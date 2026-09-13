'use client';

import Link from 'next/link';

export function NeurowyldShopSection() {
  return (
    <section>
      <div>
        <div>
          <div>
            <h2>Discover Neurowyld</h2>
            <p>
              We've launched Neurowyld – our new shop featuring neurodivergent-affirming merch that
              celebrates comfort, advocacy, and identity. Discover sensory-friendly, mission-driven
              designs that let you show up as your authentic self.
            </p>
            <p>
              Every purchase helps expand coaching access and empower our community.
            </p>
            <Link href="/neurowyld">
              Shop Neurowyld →
            </Link>
          </div>

          <div>
            <span>Neurowyld Shop Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}
