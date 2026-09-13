/**
 * Service Pages Configuration
 * Defines layout and content structure for each service page
 */

export interface ServicePageConfig {
  slug: string;
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    image?: string;
    primaryCTA?: { text: string; href: string };
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  content?: {
    heading?: string;
    body: string;
  };
  cta?: {
    heading: string;
    description: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

/**
 * Executive Function Coaching configurations
 */

export const academicCoachingConfig: ServicePageConfig = {
  slug: 'academic-coaching-for-neurodivergent-minds',
  title: 'Academic Coaching For Neurodivergent Minds',
  description:
    'Unlock your potential with Academic Coaching for Neurodivergent Minds – personalized guidance to conquer challenges, excel academically & thrive in school.',
  hero: {
    title: 'Academic Coaching For Neurodivergent Minds',
    subtitle: 'Personalized guidance to excel in school and beyond',
    primaryCTA: { text: 'Book a Discovery Call', href: '/booking' },
  },
  features: [
    {
      title: 'Personalized Learning Plans',
      description:
        'Customized strategies that work with your unique learning style, not against it.',
      icon: '📚',
    },
    {
      title: 'Study Skills Development',
      description: 'Learn proven techniques for organization, focus, and retention.',
      icon: '🎯',
    },
    {
      title: 'Test Preparation',
      description:
        'Develop confidence and strategies for academic assessments and exams.',
      icon: '✓',
    },
    {
      title: 'Communication with Schools',
      description:
        'Navigate school systems and advocate for the accommodations you need.',
      icon: '💬',
    },
  ],
  benefits: [
    {
      title: 'Improved Grades',
      description:
        'Students typically see measurable improvement in academic performance within 6-8 weeks.',
    },
    {
      title: 'Increased Confidence',
      description: 'Build genuine confidence in your academic abilities and potential.',
    },
    {
      title: 'Less Stress',
      description: 'Replace anxiety with practical tools and realistic study plans.',
    },
    {
      title: 'Better Organization',
      description: 'Master time management and keep track of assignments and deadlines.',
    },
  ],
  cta: {
    heading: 'Ready to Transform Your Academic Experience?',
    description:
      "Let's work together to find the strategies that will help you thrive academically.",
    primaryButton: { text: 'Book Now', href: '/booking' },
    secondaryButton: { text: 'Learn More', href: '/contact' },
  },
};

export const careerCoachingConfig: ServicePageConfig = {
  slug: 'career-coaching-for-neurodivergent-minds',
  title: 'Career Coaching For Neurodivergent Minds',
  description:
    'Achieve success with Career Coaching for Neurodivergent Minds – personalized guidance to build skills, navigate the workplace & unlock your full potential.',
  hero: {
    title: 'Career Coaching For Neurodivergent Minds',
    subtitle: 'Navigate your career path with confidence and authenticity',
    primaryCTA: { text: 'Schedule a Session', href: '/booking' },
  },
  features: [
    {
      title: 'Career Exploration',
      description: 'Discover careers that align with your strengths and interests.',
      icon: '🔍',
    },
    {
      title: 'Job Search Strategies',
      description:
        'Learn effective approaches to finding opportunities that match your needs.',
      icon: '📋',
    },
    {
      title: 'Interview Preparation',
      description: 'Build confidence and master strategies for successful interviews.',
      icon: '🎤',
    },
    {
      title: 'Workplace Success',
      description: 'Develop skills to thrive in your role and advance your career.',
      icon: '🚀',
    },
  ],
  benefits: [
    {
      title: 'Clarified Career Direction',
      description: 'Get clear on what you want and how to get there.',
    },
    {
      title: 'Increased Interview Success',
      description: 'Learn to present yourself effectively to potential employers.',
    },
    {
      title: 'Better Job Fit',
      description: 'Find work environments and roles that support your neurodivergence.',
    },
    {
      title: 'Long-term Career Growth',
      description:
        'Build the skills and strategies for lasting success and advancement.',
    },
  ],
  cta: {
    heading: 'Ready to Advance Your Career?',
    description:
      "Let's create a career path that works for your unique strengths and values.",
    primaryButton: { text: 'Get Started', href: '/booking' },
    secondaryButton: { text: 'Questions?', href: '/contact' },
  },
};

export const executiveFunctionCoachingConfig: ServicePageConfig = {
  slug: 'executive-function-coaching-for-adults',
  title: 'Executive Function Coaching For Adults',
  description:
    'Discover Executive Function Coaching for Adults to manage burnout, improve relationships, and regain control over your life with personalized support.',
  hero: {
    title: 'Executive Function Coaching For Adults',
    subtitle: 'Regain control of your time, tasks, and life',
    primaryCTA: { text: 'Book Your First Session', href: '/booking' },
  },
  features: [
    {
      title: 'Time Management Mastery',
      description: 'Overcome procrastination and create sustainable routines.',
      icon: '⏰',
    },
    {
      title: 'Task Organization',
      description: 'Break down complex projects into manageable steps.',
      icon: '✅',
    },
    {
      title: 'Priority Management',
      description: 'Learn to focus on what matters most.',
      icon: '🎯',
    },
    {
      title: 'Relationship Support',
      description:
        'Improve relationships by managing ADHD symptoms that affect others.',
      icon: '💕',
    },
  ],
  benefits: [
    {
      title: 'Reduced Stress and Burnout',
      description: 'Feel calmer and more in control of your responsibilities.',
    },
    {
      title: 'Increased Productivity',
      description: 'Accomplish more with less effort using personalized systems.',
    },
    {
      title: 'Better Relationships',
      description:
        'Reduce friction and improve communication in personal relationships.',
    },
    {
      title: 'Renewed Confidence',
      description: 'Feel capable and confident in your ability to manage your life.',
    },
  ],
  cta: {
    heading: 'Ready for a Fresh Start?',
    description:
      "Adult coaching can transform how you manage your time and life. Let's get you started.",
    primaryButton: { text: 'Book Now', href: '/booking' },
    secondaryButton: { text: 'Contact Us', href: '/contact' },
  },
};

export const lifeSkillsCoachingConfig: ServicePageConfig = {
  slug: 'life-skills-coaching-for-neurodivergent-minds',
  title: 'Life Skills Coaching For Neurodivergent Minds',
  description:
    'Discover Life Skills Coaching for Neurodivergent Minds: personalized support to boost executive function, independence & confidence.',
  hero: {
    title: 'Life Skills Coaching For Neurodivergent Minds',
    subtitle: 'Develop independence and confidence in daily living',
    primaryCTA: { text: 'Start Today', href: '/booking' },
  },
  features: [
    {
      title: 'Daily Living Skills',
      description: 'Master budgeting, cooking, cleaning, and household management.',
      icon: '🏠',
    },
    {
      title: 'Social Skills',
      description: 'Build confidence in social situations and relationships.',
      icon: '👥',
    },
    {
      title: 'Self-Advocacy',
      description: 'Learn to communicate your needs effectively.',
      icon: '🗣️',
    },
    {
      title: 'Independence Building',
      description: 'Develop the skills for greater autonomy and self-reliance.',
      icon: '💪',
    },
  ],
  benefits: [
    {
      title: 'Greater Independence',
      description: 'Handle daily tasks with confidence and competence.',
    },
    {
      title: 'Improved Self-Esteem',
      description: 'Build confidence in your ability to manage your life.',
    },
    {
      title: 'Stronger Relationships',
      description: 'Navigate social situations with greater ease and understanding.',
    },
    {
      title: 'Prepared for Transitions',
      description: 'Successfully navigate major life changes.',
    },
  ],
  cta: {
    heading: 'Ready to Build Your Life Skills?',
    description:
      'Coaching can help you develop the skills and confidence for greater independence.',
    primaryButton: { text: 'Book a Session', href: '/booking' },
    secondaryButton: { text: 'Learn More', href: '/contact' },
  },
};

// High School Students Coaching
export const hsCoachingConfig: ServicePageConfig = {
  slug: 'executive-function-coaching-for-high-school-students',
  title: 'Executive Function Coaching For High School Students',
  description:
    'Discover how executive function coaching for high school students helps them thrive by enhancing organization, time management, and self-confidence.',
  hero: {
    title: 'Executive Function Coaching For High School Students',
    subtitle: 'Build skills for academic and personal success',
    primaryCTA: { text: 'Get Support Now', href: '/booking' },
  },
  features: [
    {
      title: 'Organization Systems',
      description: 'Master binders, planners, and digital tools.',
      icon: '📋',
    },
    {
      title: 'Time Management',
      description: 'Balance homework, activities, and life.',
      icon: '⏰',
    },
    {
      title: 'Study Strategies',
      description: 'Learn techniques that actually work for your brain.',
      icon: '📚',
    },
    {
      title: 'Goal Setting',
      description: 'Define and achieve meaningful goals.',
      icon: '🎯',
    },
  ],
  cta: {
    heading: 'Support Your Teen Through High School',
    description: 'Coaching helps high school students develop executive function skills they\'ll use for life.',
    primaryButton: { text: 'Schedule Now', href: '/booking' },
    secondaryButton: { text: 'Talk to Us', href: '/contact' },
  },
};

// College Students Coaching
export const collegeCoachingConfig: ServicePageConfig = {
  slug: 'executive-function-coaching-for-college-students',
  title: 'Executive Function Coaching For College Students',
  description:
    'Executive function coaching for college students to boost organization, time management, and confidence for success in college and beyond.',
  hero: {
    title: 'Executive Function Coaching For College Students',
    subtitle: 'Thrive in college with personalized executive function support',
    primaryCTA: { text: 'Book a Session', href: '/booking' },
  },
  features: [
    {
      title: 'Independent Living',
      description: 'Manage dorm life, laundry, and meals.',
      icon: '🏠',
    },
    {
      title: 'Academic Management',
      description: 'Balance multiple classes and projects.',
      icon: '🎓',
    },
    {
      title: 'Time Management',
      description: 'Build routines that actually work.',
      icon: '⏰',
    },
    {
      title: 'Social Navigation',
      description: 'Build meaningful college relationships.',
      icon: '👥',
    },
  ],
  cta: {
    heading: 'Make College Successful',
    description: 'College is a transition. Executive function coaching helps students thrive.',
    primaryButton: { text: 'Start Coaching', href: '/booking' },
    secondaryButton: { text: 'Questions?', href: '/contact' },
  },
};

// Young Adults Coaching
export const youngAdultCoachingConfig: ServicePageConfig = {
  slug: 'executive-function-coaching-for-young-adults',
  title: 'Executive Function Coaching For Young Adults',
  description:
    'Executive Function Coaching for Young Adults to build independence, manage responsibilities, and achieve success with compassionate guidance.',
  hero: {
    title: 'Executive Function Coaching For Young Adults',
    subtitle: 'Navigate adulthood with confidence and skills',
    primaryCTA: { text: 'Begin Coaching', href: '/booking' },
  },
  features: [
    {
      title: 'Career Development',
      description: 'Find work that fits your strengths.',
      icon: '💼',
    },
    {
      title: 'Independence Building',
      description: 'Manage finances, home, and responsibilities.',
      icon: '🔑',
    },
    {
      title: 'Relationship Skills',
      description: 'Build healthy personal and professional relationships.',
      icon: '💕',
    },
    {
      title: 'Future Planning',
      description: 'Create a life plan that works for you.',
      icon: '🗺️',
    },
  ],
  cta: {
    heading: 'Ready to Take Control of Your Future?',
    description: 'Young adults can build the skills and confidence for independent, fulfilling lives.',
    primaryButton: { text: 'Get Started', href: '/booking' },
    secondaryButton: { text: 'Contact Us', href: '/contact' },
  },
};

// Pricing
export const pricingConfig: ServicePageConfig = {
  slug: 'executive-function-coaching-pricing',
  title: 'Executive Function Coaching Pricing',
  description: 'Worried about what coaching will cost? Learn more about our transparent, flexible pricing.',
  hero: {
    title: 'Coaching Pricing',
    subtitle: 'Transparent pricing for quality coaching',
    primaryCTA: { text: 'Book a Free Consultation', href: '/booking' },
  },
  features: [
    {
      title: 'Flexible Sessions',
      description: 'Choose weekly, biweekly, or monthly sessions.',
      icon: '📅',
    },
    {
      title: 'Multiple Formats',
      description: 'In-person or virtual coaching.',
      icon: '💻',
    },
    {
      title: 'Customized Plans',
      description: 'Packages tailored to your needs.',
      icon: '🎯',
    },
    {
      title: 'Free Consultation',
      description: 'Start with a complimentary discovery call.',
      icon: '🎉',
    },
  ],
  content: {
    heading: 'Investment in Your Success',
    body: 'Our coaching rates are competitive and reflect the high quality of our coaches. We offer flexible packages to meet different budgets and needs. Ask us about sliding scale options.',
  },
  cta: {
    heading: 'Ready to Invest in Your Success?',
    description: 'Start with a free consultation to discuss pricing and options.',
    primaryButton: { text: 'Schedule Free Consultation', href: '/booking' },
    secondaryButton: { text: 'Get Details', href: '/contact' },
  },
};

// Add more service configurations as needed
export const serviceConfigs: Record<string, ServicePageConfig> = {
  'academic-coaching-for-neurodivergent-minds': academicCoachingConfig,
  'career-coaching-for-neurodivergent-minds': careerCoachingConfig,
  'executive-function-coaching-for-adults': executiveFunctionCoachingConfig,
  'executive-function-coaching-for-high-school-students': hsCoachingConfig,
  'executive-function-coaching-for-college-students': collegeCoachingConfig,
  'executive-function-coaching-for-young-adults': youngAdultCoachingConfig,
  'executive-function-coaching-pricing': pricingConfig,
  'life-skills-coaching-for-neurodivergent-minds': lifeSkillsCoachingConfig,
};

export function getServiceConfig(slug: string): ServicePageConfig | null {
  return serviceConfigs[slug] || null;
}
