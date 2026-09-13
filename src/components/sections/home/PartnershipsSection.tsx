'use client';

export function PartnershipsSection() {
  const partners = [
    { name: 'PolyTech' },
    { name: 'Eaton Arrowsmith' },
    { name: 'Bellevue College OLS' },
    { name: 'Fusion Academy' },
    { name: 'Inattentive ADHD Coalition' },
    { name: 'Guardian Light Family Services' },
    { name: 'RISE Educational Advocacy' },
    { name: 'Social Skills Laboratory' },
    { name: 'ODMF' },
    { name: 'Fawn Friends' },
    { name: 'Canopy Neurodiversity Foundation' },
  ];

  return (
    <section>
      <div>
        <h2>Partnerships & Professional Affiliations</h2>

        <div>
          {partners.map((partner, index) => (
            <div key={index}>
              <div>
                <span>{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
