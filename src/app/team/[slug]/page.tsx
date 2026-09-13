import { Metadata } from 'next';
import { generateMetadata as generateMetadataHelper } from '@/lib/metadata';
import { TEAM_PAGES, getPageBySlug } from '@/data/pages';
import { getTeamMemberConfig } from '@/data/team-pages';
import {
  TeamMemberHero,
  TeamMemberSpecialties,
  TeamMemberBio,
  TeamMemberCTA,
} from '@/components/sections/team';

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TEAM_PAGES.filter((p) => p.slug).map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  const config = getTeamMemberConfig(slug);

  if (!page) {
    return {
      title: 'Team Member Not Found',
      description: 'The requested team member page could not be found.',
    };
  }

  const title = config ? `${config.name} - ${config.role}` : page.title;
  const description = config ? config.shortBio : page.description;

  return generateMetadataHelper({
    title,
    description,
    canonical: page.canonical,
    ogImage: page.ogImage ? { url: page.ogImage } : undefined,
  });
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const config = getTeamMemberConfig(slug);

  // If no config exists, render fallback
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Team Member Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The team member profile you're looking for doesn't exist yet or is not
            configured. We're working on building out our full team profiles.
          </p>
          <a
            href="/team"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Team
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <TeamMemberHero
        name={config.name}
        role={config.role}
        bio={config.shortBio}
        image={config.image}
        email={config.email}
        phone={config.phone}
      />

      <TeamMemberSpecialties
        heading="Areas of Expertise"
        specialties={config.specialties}
      />

      <TeamMemberBio
        heading="About"
        content={config.fullBio}
        credentials={config.credentials}
      />

      {config.cta && (
        <TeamMemberCTA
          heading={config.cta.heading}
          description={config.cta.description}
          primaryButton={config.cta.primaryButton}
          secondaryButton={config.cta.secondaryButton}
        />
      )}
    </>
  );
}
