'use client';

import Link from 'next/link';

export function HowWeHelpSection() {
  const segments = [
    {
      id: 'high-school',
      title: 'High School Students',
      slug: 'high-school-students',
    },
    {
      id: 'college',
      title: 'College Students',
      slug: 'college-students',
    },
    {
      id: 'young-adults',
      title: 'Young Adults',
      slug: 'young-adults',
    },
    {
      id: 'adults',
      title: 'Adults',
      slug: 'adults',
    },
  ];

  const keyAreas = [
    { id: 'school', title: 'School', slug: 'school' },
    { id: 'work', title: 'Work', slug: 'work' },
    { id: 'life', title: 'Life', slug: 'life' },
  ];

  return (
    <section>
      <div>
        <div>
          <h2>How Can Life Skills Advocate Help?</h2>
          <div>
            <p>
              At Life Skills Advocate, our coaches bring a combination of professional expertise and lived
              experience with neurodivergence to empower you or your loved one's path towards greater
              autonomy & independence.
            </p>
            <p>
              Our comprehensive Real-Life Executive Function Coaching supports individuals across all life
              stages, addressing their unique challenges and goals.
            </p>
            <p>
              In everything we do, we prioritize a client-centered, shame-free approach, with a strong
              focus on structure and predictability, ensuring that every aspect of our coaching is directly
              applicable to your daily challenges and long-term goals.
            </p>
          </div>
        </div>

        <div>
          <h3>Discover How Coaching With LSA Can Support YOU</h3>
          <p>Across THESE Key Areas</p>
          <p>
            Whether you're a high school student, college student, professional, or somewhere in between,
            our personalized coaching approach focuses on your unique needs and aspirations, starting at
            age 14.
          </p>

          <div>
            {segments.map((segment) => (
              <div key={segment.id}>
                <div>Client Image</div>
                <div>
                  <h4>{segment.title}</h4>
                  <Link href={`/coaching/${segment.slug}`}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>Life is Interconnected</h3>
          <p>
            Challenges in one area—like school—can often spill over into others, such as home or work. At Life Skills Advocate, we understand that your needs aren't
            confined to just one domain. Our coaching approach considers the whole picture, providing
            support across various aspects of life. Whether you're seeking help with a specific area or
            navigating multiple challenges at once, we're here to guide you through it all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h4>
                <Link
                  href={`/coaching/${area.slug}`}
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
