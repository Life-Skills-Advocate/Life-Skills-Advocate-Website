/**
 * Resource Pages Configuration
 * Defines layout and content structure for each resource page
 */

export interface ResourcePageConfig {
  slug: string;
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA?: { text: string; href: string };
  };
  highlights?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  content?: {
    heading?: string;
    body: string;
    sections?: Array<{
      title: string;
      body: string;
    }>;
  };
  cta?: {
    heading: string;
    description: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

/**
 * Resource Page Configurations
 */

export const iepGoalsConfig: ResourcePageConfig = {
  slug: 'iep-goals',
  title: '100+ Measurable Executive Functioning IEP Goals (By Skill Area)',
  description:
    'Over 100 measurable executive functioning IEP goals, organized by skill area. Every goal is complete, IDEA-compliant, and ready to adapt to your student.',
  hero: {
    title: '100+ IEP Goals for Executive Functioning',
    subtitle: 'Ready-to-use, IDEA-compliant goals organized by skill',
    description:
      'Get instant access to over 100 measurable IEP goals for executive functioning challenges. Each goal is complete, research-backed, and ready to customize.',
    primaryCTA: { text: 'Explore Goals', href: '/resources' },
  },
  highlights: [
    {
      title: 'Complete & Ready',
      description: 'Fully written goals that meet IDEA standards and are ready to use immediately.',
      icon: '✓',
    },
    {
      title: 'Organized by Skill',
      description: 'Goals organized by executive functioning skill area for easy navigation.',
      icon: '📋',
    },
    {
      title: 'Easy to Customize',
      description: 'Adapt goals to your specific student needs with simple modifications.',
      icon: '✏️',
    },
    {
      title: 'Evidence-Based',
      description: 'Goals based on current research in executive functioning development.',
      icon: '📚',
    },
  ],
  content: {
    heading: 'About This Resource',
    body: 'Writing IEP goals for executive functioning challenges can be time-consuming. This comprehensive collection provides ready-made goals covering organization, time management, task initiation, planning, and more. Each goal is formatted to meet IDEA requirements and can be quickly adapted to your specific student.',
    sections: [
      {
        title: 'What\'s Included',
        body: 'Goals across all major executive functioning areas including planning, organization, time management, task initiation, working memory, emotional regulation, and self-monitoring.',
      },
      {
        title: 'How to Use',
        body: 'Select goals that match your student\'s needs, customize them with specific details and timelines, and use them in IEP development.',
      },
    ],
  },
  cta: {
    heading: 'Get the IEP Goal Bank',
    description: 'Start building better IEP goals today with our comprehensive resource.',
    primaryButton: { text: 'Access Goals', href: '/resources' },
    secondaryButton: { text: 'Learn More', href: '/contact' },
  },
};

export const efSkillsConfig: ResourcePageConfig = {
  slug: 'executive-functioning-skills',
  title: '11 Executive Functioning Skills: Signs, Real-Life Examples, And Simple Supports',
  description:
    'Learn the 11 core executive functioning skills, what struggles look like, and practical strategies to support each one.',
  hero: {
    title: '11 Executive Functioning Skills Explained',
    subtitle: 'Understanding EF challenges and practical support strategies',
    description:
      'Discover what the 11 executive functioning skills are, how to recognize when someone struggles with each one, and practical ways to provide support.',
    primaryCTA: { text: 'Learn Skills', href: '/resources' },
  },
  highlights: [
    {
      title: 'Skill Breakdowns',
      description: 'Clear explanations of each of the 11 core executive functioning skills.',
      icon: '🧠',
    },
    {
      title: 'Real-Life Examples',
      description: 'Relatable examples showing what each skill looks like in everyday life.',
      icon: '💡',
    },
    {
      title: 'Support Strategies',
      description: 'Practical, actionable strategies to help strengthen each skill.',
      icon: '🤝',
    },
    {
      title: 'For All Ages',
      description: 'Relevant information for teens, adults, and professionals.',
      icon: '👥',
    },
  ],
  content: {
    heading: 'Understanding the 11 Executive Functioning Skills',
    body: 'Executive functioning is the cognitive system that helps us plan, organize, manage time, initiate tasks, and more. This guide breaks down all 11 core skills with real-world examples and practical support strategies.',
    sections: [
      {
        title: 'The Skills',
        body: 'Planning & Prioritization, Organization, Time Management, Task Initiation, Working Memory, Flexibility, Self-Monitoring, Impulse Control, Emotional Regulation, Goal-Directed Persistence, and Metacognition.',
      },
      {
        title: 'Recognition & Support',
        body: 'Learn to identify which skills someone struggles with and discover evidence-based strategies to help strengthen them.',
      },
    ],
  },
  cta: {
    heading: 'Master Executive Functioning Skills',
    description: 'Understand yourself or your loved ones better with this comprehensive guide.',
    primaryButton: { text: 'Read the Guide', href: '/resources' },
    secondaryButton: { text: 'Get Support', href: '/booking' },
  },
};

export const differenceConfig: ResourcePageConfig = {
  slug: 'difference',
  title: 'Discover The Life Skills Advocate Difference',
  description:
    'Learn what makes Life Skills Advocate unique and why we\'re the preferred choice for neurodivergent support.',
  hero: {
    title: 'The Life Skills Advocate Difference',
    subtitle: 'Evidence-based coaching for neurodivergent individuals',
    description:
      'Discover why families and professionals choose Life Skills Advocate for authentic, personalized support.',
    primaryCTA: { text: 'Meet Our Team', href: '/team' },
  },
  highlights: [
    {
      title: 'Neurodivergent-Affirming',
      description: 'We honor neurodivergent strengths and work with how your brain actually functions.',
      icon: '✨',
    },
    {
      title: 'Personalized Approach',
      description: 'Every coaching plan is tailored to individual needs, not a one-size-fits-all program.',
      icon: '🎯',
    },
    {
      title: 'Expert Coaches',
      description: 'Our team consists of experienced coaches who truly understand executive functioning challenges.',
      icon: '👨‍🏫',
    },
    {
      title: 'Real Results',
      description: 'Our clients report genuine progress in independence, confidence, and life skills.',
      icon: '🎉',
    },
  ],
  content: {
    heading: 'Why Choose Life Skills Advocate?',
    body: 'Life Skills Advocate was founded on a simple belief: executive functioning skills are learnable, and every person deserves support that honors how their brain actually works.',
    sections: [
      {
        title: 'Our Approach',
        body: 'We combine evidence-based coaching strategies with genuine understanding of neurodivergence. We don\'t try to "fix" you—we help you develop skills that work for your brain.',
      },
      {
        title: 'Our Impact',
        body: 'From teens struggling with homework to adults navigating careers, our clients transform their relationship with executive functioning and gain real independence.',
      },
    ],
  },
  cta: {
    heading: 'Ready to Experience the Difference?',
    description: 'Schedule a complimentary consultation to see if our coaching is right for you.',
    primaryButton: { text: 'Book Consultation', href: '/booking' },
    secondaryButton: { text: 'Learn More', href: '/about' },
  },
};

export const hubConfig: ResourcePageConfig = {
  slug: 'hub',
  title: 'Executive Functioning 101 Resource Hub',
  description:
    'Your go-to collection of articles and guides to help you understand and develop executive functioning skills.',
  hero: {
    title: 'Executive Functioning 101 Resource Hub',
    subtitle: 'Everything you need to understand executive functioning',
    description:
      'Browse our comprehensive collection of articles, guides, and resources designed to help you understand and develop executive functioning skills.',
    primaryCTA: { text: 'Explore Resources', href: '/resources' },
  },
  highlights: [
    {
      title: 'Comprehensive Coverage',
      description: 'Articles covering all aspects of executive functioning from basics to advanced strategies.',
      icon: '📖',
    },
    {
      title: 'Easy to Navigate',
      description: 'Find exactly what you need with our organized, searchable resource library.',
      icon: '🔍',
    },
    {
      title: 'Expert Insights',
      description: 'All content is developed by experienced coaches and backed by research.',
      icon: '💼',
    },
    {
      title: 'Constantly Updated',
      description: 'New articles and resources added regularly to keep content current and relevant.',
      icon: '🔄',
    },
  ],
  content: {
    heading: 'Your Complete EF Resource Center',
    body: 'Executive functioning can be confusing. This resource hub brings together everything you need to understand EF, recognize challenges, and develop stronger skills.',
    sections: [
      {
        title: 'Browse by Topic',
        body: 'Find articles organized by skill area, age group, and challenge type. Whether you\'re just learning about EF or looking for advanced strategies, we have something for you.',
      },
      {
        title: 'For Everyone',
        body: 'Resources for teens, adults, parents, teachers, and professionals—all designed with neurodivergent individuals in mind.',
      },
    ],
  },
  cta: {
    heading: 'Explore the Resource Hub',
    description: 'Find the guidance and support you need to better understand executive functioning.',
    primaryButton: { text: 'Browse Articles', href: '/resources' },
    secondaryButton: { text: 'Book Coaching', href: '/booking' },
  },
};

export const assessmentConfig: ResourcePageConfig = {
  slug: 'assessment',
  title: 'Free Executive Functioning Assessment For Teens, Adults & Professionals',
  description:
    'Take our free executive functioning assessment to identify your strengths and challenges, with real-time scoring and actionable next steps.',
  hero: {
    title: 'Free Executive Functioning Assessment',
    subtitle: 'Discover your executive functioning profile',
    description:
      'Take our science-based assessment to identify your executive functioning strengths and challenges. Get instant results with actionable next steps.',
    primaryCTA: { text: 'Take Assessment', href: '/resources' },
  },
  highlights: [
    {
      title: 'Scientifically Designed',
      description: 'Assessment based on research in executive functioning and neurodevelopment.',
      icon: '🔬',
    },
    {
      title: 'Instant Results',
      description: 'Get immediate scoring and a personalized summary of your EF profile.',
      icon: '⚡',
    },
    {
      title: 'Actionable Insights',
      description: 'Results include specific, practical next steps to develop your skills.',
      icon: '🎯',
    },
    {
      title: 'No Cost',
      description: 'Completely free assessment with no sign-up required.',
      icon: '🎁',
    },
  ],
  content: {
    heading: 'Understand Your Executive Functioning Profile',
    body: 'This assessment helps you identify which executive functioning skills are your strengths and which areas might need more support. The results are designed to guide your next steps.',
    sections: [
      {
        title: 'What You\'ll Learn',
        body: 'Your assessment results will show your relative strengths across different EF areas, highlight potential challenges, and suggest areas to focus on.',
      },
      {
        title: 'What Happens Next',
        body: 'Use your results to guide your development efforts, or share them with a coach or educator who can help you build stronger skills.',
      },
    ],
  },
  cta: {
    heading: 'Ready to Assess Your EF?',
    description: 'Take the free assessment and get instant insights into your executive functioning profile.',
    primaryButton: { text: 'Start Assessment', href: '/resources' },
    secondaryButton: { text: 'Learn About Coaching', href: '/booking' },
  },
};

export const worksheetsConfig: ResourcePageConfig = {
  slug: 'worksheets',
  title: 'Free Executive Functioning Worksheets & Printables',
  description:
    'Download free executive functioning worksheets, checklists, and templates for planning, organization, and time management.',
  hero: {
    title: 'Free EF Worksheets & Printables',
    subtitle: 'Practical tools you can use immediately',
    description:
      'Access our library of free, printable worksheets and tools designed to help with planning, organization, time management, and more.',
    primaryCTA: { text: 'Download Worksheets', href: '/resources' },
  },
  highlights: [
    {
      title: 'Skill-Based Organization',
      description: 'Worksheets organized by executive functioning skill for easy discovery.',
      icon: '📂',
    },
    {
      title: 'Ready to Print',
      description: 'All worksheets are formatted for easy printing and daily use.',
      icon: '🖨️',
    },
    {
      title: 'Customizable',
      description: 'Adapt worksheets to your specific needs with easy modifications.',
      icon: '✍️',
    },
    {
      title: 'Practical & Actionable',
      description: 'Tools designed for real-world use in home, school, and work settings.',
      icon: '🛠️',
    },
  ],
  content: {
    heading: 'Tools for Better Organization & Planning',
    body: 'These free worksheets and templates help you tackle common executive functioning challenges. From daily planners to priority matrices, these tools are ready to use.',
    sections: [
      {
        title: 'What\'s Available',
        body: 'Browse our collection including daily planners, project checklists, priority matrices, task breakdown templates, and more.',
      },
      {
        title: 'How to Use',
        body: 'Download worksheets, print them, and use them daily. Customize as needed to fit your specific situation.',
      },
    ],
  },
  cta: {
    heading: 'Get Your Free Tools',
    description: 'Download printable worksheets to start managing tasks and time more effectively.',
    primaryButton: { text: 'Browse Worksheets', href: '/resources' },
    secondaryButton: { text: 'Get Coaching Support', href: '/booking' },
  },
};

export const toolsConfig: ResourcePageConfig = {
  slug: 'tools',
  title: 'Neurodivergent-Friendly Tools & Resources',
  description:
    'Handpicked, quality tools and resources designed specifically to support neurodivergent individuals.',
  hero: {
    title: 'Neurodivergent-Friendly Tools & Resources',
    subtitle: 'Recommendations from our coaching community',
    description:
      'Discover the best apps, tools, and resources handpicked by our coaching team to support executive functioning and neurodivergent life.',
    primaryCTA: { text: 'Explore Tools', href: '/resources' },
  },
  highlights: [
    {
      title: 'Carefully Curated',
      description: 'Every tool recommended has been tested and approved by our coaching team.',
      icon: '⭐',
    },
    {
      title: 'Neurodivergent-Designed',
      description: 'Tools specifically built with neurodivergent users in mind.',
      icon: '🧩',
    },
    {
      title: 'Practical & Proven',
      description: 'Real tools our clients use successfully in their daily lives.',
      icon: '✔️',
    },
    {
      title: 'Organized by Need',
      description: 'Tools categorized by function to help you find exactly what you need.',
      icon: '🎯',
    },
  ],
  content: {
    heading: 'Tools That Actually Work',
    body: 'Technology can be a game-changer for executive functioning. This curated list includes apps, websites, and tools our coaching community loves and recommends.',
    sections: [
      {
        title: 'Categories',
        body: 'Find tools for planning, time management, organization, focus, communication, sensory support, and more.',
      },
      {
        title: 'Try Before You Buy',
        body: 'Many recommended tools offer free trials. Take time to test what works best for your unique needs.',
      },
    ],
  },
  cta: {
    heading: 'Discover Tools That Work for You',
    description: 'Explore our curated collection of neurodivergent-friendly apps and resources.',
    primaryButton: { text: 'Browse Tools', href: '/resources' },
    secondaryButton: { text: 'Get Coaching', href: '/booking' },
  },
};

export const neurodivergenceConfig: ResourcePageConfig = {
  slug: 'neurodivergence',
  title: 'What Does It Mean To Be Neurodivergent? A Description, Not A Diagnosis',
  description:
    'Understand what neurodivergence means, how it\'s different from diagnosis, and what it means for your life and future.',
  hero: {
    title: 'What Does Neurodivergent Mean?',
    subtitle: 'A description of brain differences, not a diagnosis',
    description:
      'Neurodivergent is a framework for understanding natural brain differences. Learn what the term means and whether it fits your experience.',
    primaryCTA: { text: 'Learn More', href: '/resources' },
  },
  highlights: [
    {
      title: 'Clear Definition',
      description: 'Understand what neurodivergent means and how it differs from diagnosis.',
      icon: '📖',
    },
    {
      title: 'Affirming Approach',
      description: 'Neurodivergence as brain difference, not disorder or deficit.',
      icon: '✨',
    },
    {
      title: 'Practical Implications',
      description: 'What neurodivergence means for learning, work, relationships, and life.',
      icon: '🌍',
    },
    {
      title: 'Self-Discovery Guide',
      description: 'Help determining if the neurodivergent framework fits your experience.',
      icon: '🔍',
    },
  ],
  content: {
    heading: 'Understanding Neurodivergence',
    body: 'Neurodivergent is a term that describes natural variations in how our brains work. It\'s not a diagnosis—it\'s a description that can help you understand yourself and others better.',
    sections: [
      {
        title: 'What It Means',
        body: 'Neurodivergent describes individuals whose neurological differences (ADHD, autism, dyslexia, etc.) are recognized as a natural variation rather than a deficit.',
      },
      {
        title: 'Is It for Me?',
        body: 'Discover whether the neurodivergent framework resonates with your experience and how it might be helpful in your life.',
      },
    ],
  },
  cta: {
    heading: 'Embrace Your Neurodivergence',
    description: 'Understand yourself better with our comprehensive guide to neurodivergence.',
    primaryButton: { text: 'Read Full Article', href: '/resources' },
    secondaryButton: { text: 'Start Coaching', href: '/booking' },
  },
};

// Export all configurations
export const resourceConfigs: Record<string, ResourcePageConfig> = {
  '100-measurable-executive-functioning-iep-goals-by-skill-area': iepGoalsConfig,
  '11-executive-functioning-skills-signs-real-life-examples-and-simple-supports': efSkillsConfig,
  'discover-the-life-skills-advocate-difference': differenceConfig,
  'executive-functioning-101-resource-hub': hubConfig,
  'free-executive-functioning-assessment-for-teens-adults-professionals': assessmentConfig,
  'free-executive-functioning-worksheets-printables': worksheetsConfig,
  'neurodivergent-friendly-tools-resources': toolsConfig,
  'what-does-it-mean-to-be-neurodivergent-a-description-not-a-diagnosis': neurodivergenceConfig,
};

export function getResourceConfig(slug: string): ResourcePageConfig | null {
  return resourceConfigs[slug] || null;
}
