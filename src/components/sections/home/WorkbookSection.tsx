'use client';

import Link from 'next/link';

export function WorkbookSection() {
  return (
    <section>
      <div>
        <div>
          <div>
            <span>Workbook Cover Image</span>
          </div>

          <div>
            <h2>We Wrote the Workbook on Executive Functioning</h2>

            <div>
              <p>
                In 2021, we published our Real-Life Executive Functioning Workbook, a comprehensive
                guide designed to tackle real-life executive functioning challenges.
              </p>

              <p>
                This resource is an invaluable tool for individuals, parents, and teachers, providing
                practical strategies and insights to enhance daily living and learning.
              </p>

              <p>
                Having sold over 3,000 copies, it has become a trusted companion, aiding countless
                students in their journey towards improved executive functioning and greater success.
              </p>
            </div>

            <Link href="/workbook">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
