# Advocate360 — Lead Magnet Request API

**For:** Edder Flores  **From:** Webster Munoz
**Verified against:** `develop` @ 2026-09-01

How a freebie form on lifeskillsadvocate.com hands a lead to Advocate360, and what the
new hand-coded site has to send to reproduce what Thrive Leads does today.

> **API keys are not in this document.** They're sent separately. Dev and production use
> different keys.

---

## 1. What this replaces

Every freebie form on the current WordPress site is a Thrive Leads form with a **webhook**
connection and a hardcoded asset ID — the `89` and `106` you saw in the form builder. On
submit, WordPress posts the email plus that ID to Advocate360.

Advocate360 is the router from there: it validates the asset, stores the lead, mints a
one-off token, and tells Klaviyo to send the delivery email. **The new site makes the same
POST; nothing downstream changes.**

| # | Step | Who |
|---|------|-----|
| 1 | Visitor submits the form. You have an email, optionally a first name, and you already know which asset the form is for. | Your site |
| 2 | POST to the lead magnet endpoint with an `X-API-Key` header. **This is the only call you make.** | Your site |
| 3 | Advocate360 validates the asset is giveaway-eligible, lowercases the email, generates a unique token, writes the request row. If the email already has an account, the asset also lands in that user's My Materials. | A360 |
| 4 | Klaviyo profile is added to the list as a fresh opt-in (which clears any past unsubscribe), then the lead magnet event fires with the link. | A360 |
| 5 | Visitor opens `/lead/{token}` — the splash page where they download the file and can create an account. Entirely ours; you do not build it. | A360 |

Your job stops at step 2. Show a "check your email" confirmation on a `200` and you're done.

---

## 2. The endpoint

```
POST /api/lead-magnet/request
```

| | |
|---|---|
| **Production** | `https://advocate360.app/api/lead-magnet/request` |
| **Dev / staging** | `https://dev-app.lifeskillsadvocate.com/api/lead-magnet/request` |
| **Auth** | `X-API-Key: <key>` |
| **Content type** | `application/json` |

Build against **dev** first. It's a full copy of the stack with its own database, so you can
submit as many test leads as you like without touching real contacts.

> **Use `advocate360.app`, not the old host.** The existing Thrive webhooks still point at
> `app.lifeskillsadvocate.com` and still work — page requests on that host redirect, but
> `/api/*` is deliberately never redirected so nothing breaks mid-migration. New code should
> use `advocate360.app` anyway.

---

## 3. Request body

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `email` | string | Yes | Validated as a real address. Stored lowercase. |
| `first_name` | string | No | Passed to Klaviyo for the email greeting. Send it when the form has the field. |
| `resource_id` | integer | Exactly one of these two | Use for a resource (PDF, workbook, guide). |
| `exercise_id` | integer | Exactly one of these two | Use for an exercise or template. |

**Exactly one of `resource_id` or `exercise_id`.** Sending neither is rejected; sending both
is rejected. There is no `type` field — the field name you pick *is* the type.

### Minimal request

```http
POST /api/lead-magnet/request
Host: advocate360.app
Content-Type: application/json
X-API-Key: <your key>

{
  "email": "parent@example.com",
  "first_name": "Sam",
  "resource_id": 106
}
```

### curl, to try it against dev

```bash
curl -X POST https://dev-app.lifeskillsadvocate.com/api/lead-magnet/request \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $LEAD_MAGNET_API_KEY" \
  -d '{"email":"edder+test@example.com","first_name":"Edder","resource_id":106}'
```

---

## 4. Resource vs exercise

Same endpoint, same headers, same response. **One field name changes** — and the
eligibility rules behind it differ.

### Resource

A downloadable file — the PDFs, workbooks and guides in the resource library. This is what
almost every current freebie form sends.

```json
{
  "email": "parent@example.com",
  "first_name": "Sam",
  "resource_id": 106
}
```

Advocate360 rejects it unless:

- `is_paid` is **false** — a lead magnet can never give away something we sell
- `is_public` is **true** — staff-only internal documents are not giveaway material

### Exercise

An exercise or template from the exercise library. Structurally identical to send.

```json
{
  "email": "parent@example.com",
  "first_name": "Sam",
  "exercise_id": 42
}
```

Advocate360 rejects it unless:

- `is_published` is **true** — drafts cannot be handed out
- `is_gated` is **false** — gated exercises are for signed-in users

### In practice

Your form component takes an asset type and an ID, and picks the key name from the type.
One component covers both — the reuse you were after with React components.

> **The eligibility rules are what bite in practice.** The IDs are stable, but an asset's
> flags are edited in the admin area and nothing warns the website when one changes. If a
> form that worked yesterday starts returning `400`, somebody almost certainly marked the
> asset paid, unpublished or gated — it is not a bug in your request.

---

## 5. Responses

### 200 OK

```json
{
  "success": true,
  "token": "Xk3nQ8vRt2mBpL7a",
  "link": "https://advocate360.app/lead/Xk3nQ8vRt2mBpL7a",
  "existing_user": false
}
```

You don't need to do anything with `token` or `link` — Klaviyo already has them and sends
the email. `existing_user` tells you the address already has an Advocate360 account; the
asset was also added to their library. If you ever want different confirmation copy for
returning users, that's the flag to read.

### Status codes

| Status | Means | What to do |
|--------|-------|------------|
| `200` | Lead recorded, email on its way | Show the confirmation message |
| `401` | API key missing or wrong | Check the header name is exactly `X-API-Key`, and that you're using the key for that environment |
| `404` | No asset with that ID | Wrong ID, or a dev ID used against production. **The two databases do not share IDs.** |
| `400` | Asset exists but is not giveaway-eligible | Read the `detail` string — it names the reason (paid, internal, not published, gated) |
| `422` | Body failed validation | Both IDs sent, neither sent, or the email is malformed |
| `500` | Key not configured on the server | Ours, not yours — tell Webster |

Every error returns a JSON body with a `detail` string. Log it; it names the exact cause.

---

## 6. This cannot be a browser fetch

**Read this before building the form component.**

On our call you described capturing the input fields and pushing to Advocate360 with
JavaScript from the page. That plan hits three walls, and the first two are hard stops:

1. **CORS blocks it.** The API only accepts browser requests from the Advocate360
   hostnames. `lifeskillsadvocate.com` is deliberately *not* on that list — the integration
   was built as server-to-server and needs no origin entry.
2. **The API key would be public.** Anything in front-end JavaScript is readable by anyone
   who opens devtools. That key authorises freebie requests for any email address.
3. **There is no rate limit on this endpoint**, because until now only WordPress could
   reach it. A leaked key means anyone can send our files to any address, at any volume,
   from our domain.

### The fix is small

Post the form to a **server-side route on the new site**, and have that route add the
`X-API-Key` and call Advocate360.

- Same-origin from the browser, so no CORS problem
- The key stays in the host's environment variables
- On Vercel or Netlify that's one serverless function

```
[browser form] --same-origin POST--> [your server route] --X-API-Key--> [Advocate360]
```

This also decides your React-vs-static question in a way we didn't discuss: whichever you
pick, the site needs somewhere to run that one piece of server code. **Worth confirming
with Chris where the new site will be hosted before you build the form.**

---

## 7. Where the IDs come from

**Today:** the Advocate360 admin area lists every resource and exercise with its ID — the
same screen I shared on the call. Chris or I can pull you the current list of
giveaway-eligible assets whenever you need it.

**There is no public endpoint you can call to enumerate them.** The resource and exercise
listing endpoints both require a signed-in user, so a build step cannot fetch the catalogue
as things stand.

So the auto-syncing ID library — and the idea of a new freebie generating its own form — is
real and buildable, but it's *net new work on our side*, not something you can wire up
against what exists today. We agreed to keep it out of the MVP; I'll raise it as a ticket so
it's on the board rather than living in a call recording.

---

## 8. Two things not to carry over

### Lead magnet links do not expire

If any page or email template you migrate says a download link expires — 30 days is the
number that has floated around — **drop that sentence** rather than reproducing it. The
links have no expiry, and we've already had one round of policy drafting misled by a stale
comment in our own code. Publishing an expiry we don't enforce is a promise we'd be
breaking.

### Stripe and HubSpot stay as redirects

Paid resources and the discovery-call buttons are plain outbound links to Stripe Checkout
and the HubSpot scheduler. There's no API contract to rebuild there — keep them as links
and they keep working.

---

## 9. What I owe you

Ping me when you reach the form components and these land the same day.

- [ ] **Dev and production API keys** — over a private channel, not in the repo or a
      ticket. Store them as environment variables on whatever hosts the new site.
- [ ] **The current list of giveaway-eligible assets** — resource and exercise IDs with
      titles, so you can map each existing Thrive form to its replacement.
- [ ] **A test lead run on dev, together** — twenty minutes on a call: you submit, we watch
      the request land and the Klaviyo email arrive. That's the real proof the payload is
      right.
- [ ] **An answer on hosting, once Chris confirms it** — determines where the server-side
      proxy route lives. Blocking for the form component, so let's settle it early.

---

*Written against the `lead_magnet_router` and request schema on `develop`, 2026-09-01.
If the contract changes, this document is the thing to update. — Webster*
