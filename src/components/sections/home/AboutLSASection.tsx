'use client';

import Link from 'next/link';

export function AboutLSASection() {
  return (
    <section>
      <div>
        <h2>Who is Life Skills Advocate?</h2>

        <div>
          <div>
            <p>
              Life Skills Advocate, founded in 2019 by special educator Chris Hanson, is deeply rooted in
              shared neurodivergent experiences. Chris, who personally navigates ADHD, anxiety, and
              depression, understands the profound impact of having dedicated advocates. His vision for
              Life Skills Advocate emerged from his own journey, aspiring to offer the supportive services
              he wished were available during his formative years.
            </p>

            <p>
              Since our inception, we've cultivated a remarkable team, united by our own experiences with
              neurodivergence. This personal connection to our work fuels our commitment to empowering
              neurodivergent individuals and families.
            </p>

            <p>
              With everything we do, our mission is to provide neurodivergent individuals and families with
              the life skills training, executive functioning support, mentorship & coaching they need to
              build and sustain autonomy & independence.
            </p>
          </div>

          <div>
            <p>Team Image</p>
          </div>
        </div>

        <div>
          <Link href="/team">
            Meet Our Whole Team →
          </Link>
        </div>

        <div>
          <h3>Our Mission</h3>
          <p>
            Uplifting the neurodivergent community to embrace their strengths and self-advocate with
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
