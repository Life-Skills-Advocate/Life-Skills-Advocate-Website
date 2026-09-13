'use client';

import Link from 'next/link';

export function DiscoveryMeetingCTA() {
  return (
    <section>
      <div>
        <h2>Book Your Complimentary 30-Minute Coaching Discovery Meeting With Amy 👇</h2>

        <div>
          <div>
            <span>Amy's Photo</span>
          </div>
          <p>Amy Kim Waschke</p>
          <p>Client Onboarding Specialist</p>
        </div>

        <div>
          <div>
            <h3>Who Is Coaching For?</h3>
            <div>
              <div>
                <input type="radio" id="myself" name="coachingFor" />
                <label htmlFor="myself">For Myself</label>
              </div>
              <div>
                <input type="radio" id="other" name="coachingFor" />
                <label htmlFor="other">For Someone Else</label>
              </div>
            </div>
          </div>

          <div>
            <h3>What to Expect</h3>
            <ol>
              <li>
                <span>1. Welcome 😃</span>
                <p>Introduce yourself and learn how coaching with LSA may help.</p>
              </li>
              <li>
                <span>2. Goals 🎯</span>
                <p>Discuss your goals and customize your experience.</p>
              </li>
              <li>
                <span>3. Overview 🔍</span>
                <p>Discover our coaching process and benefits.</p>
              </li>
              <li>
                <span>4. Next Steps ✔️</span>
                <p>Get paired with the right coach & book a session.</p>
              </li>
            </ol>
          </div>
        </div>

        <Link href="/discovery">
          Schedule Your Discovery Meeting
        </Link>
      </div>
    </section>
  );
}
