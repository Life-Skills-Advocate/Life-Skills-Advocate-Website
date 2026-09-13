'use client';

import Link from 'next/link';

interface HomeHeroProps {
  onCtaClick?: () => void;
}

export function HomeHero({ onCtaClick }: HomeHeroProps) {
  return (
    <section>
      <div>
        <div>
          <div>
            <h1>Become Your Own Best Advocate</h1>

            <p>And lean into...</p>

            <ul>
              <li>✓ Greater autonomy & independence</li>
              <li>✓ A healthier internal narrative about your neurodivergence</li>
              <li>✓ Improved executive functioning</li>
              <li>✓ Higher grades</li>
              <li>✓ Stronger motivation</li>
              <li>✓ Better time management</li>
              <li>✓ Greater self-confidence</li>
              <li>✓ Stronger relationships</li>
              <li>✓ More order and organization</li>
            </ul>

            <Link href="/discovery" onClick={onCtaClick}>
              Book a Complimentary Discovery Meeting
            </Link>
          </div>

          <div>
            <div>Hero Image Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
