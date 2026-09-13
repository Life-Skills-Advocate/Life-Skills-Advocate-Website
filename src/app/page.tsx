import { Metadata } from 'next';
import { generateMetadata as generateMetadataHelper } from '@/lib/metadata';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { ExecutiveFunctioningSection } from '@/components/sections/home/ExecutiveFunctioningSection';
import { HowWeHelpSection } from '@/components/sections/home/HowWeHelpSection';
import { AboutLSASection } from '@/components/sections/home/AboutLSASection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { DiscoveryMeetingCTA } from '@/components/sections/home/DiscoveryMeetingCTA';
import { PartnershipsSection } from '@/components/sections/home/PartnershipsSection';
import { NeurowyldShopSection } from '@/components/sections/home/NeurowyldShopSection';
import { WorkbookSection } from '@/components/sections/home/WorkbookSection';
import { BlogPreviewSection } from '@/components/sections/home/BlogPreviewSection';

const pageMetadata = {
  title: 'Life Skills Advocate | Become Your Own Best Advocate',
  description:
    "Life Skills Advocate's mission: Uplifting the neurodivergent community to embrace their strengths and self-advocate with confidence.",
  canonical: 'https://lifeskillsadvocate.com/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadataHelper(pageMetadata);

export default function Home() {
  return (
    <>
      <HomeHero />
      <ExecutiveFunctioningSection />
      <HowWeHelpSection />
      <AboutLSASection />
      <TestimonialsSection />
      <DiscoveryMeetingCTA />
      <PartnershipsSection />
      <NeurowyldShopSection />
      <WorkbookSection />
      <BlogPreviewSection />
    </>
  );
}
