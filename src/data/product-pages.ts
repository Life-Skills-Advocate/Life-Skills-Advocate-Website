/**
 * Product Pages Configuration
 * Defines layout and content structure for each product page
 */

export interface ProductPageConfig {
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  format: string;
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
  pricing: {
    includes: string[];
    guarantee: string;
  };
  cta?: {
    heading: string;
    description: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

/**
 * Workbook Configurations
 */

export const adulatingLikeAChampConfig: ProductPageConfig = {
  slug: 'adulting-like-a-champ-workbook',
  title: 'Adulting Like A Champ Workbook',
  description:
    'Free 38-page gamified life skills workbook that helps teens and young adults handle bills, getting started, and asking for help.',
  price: 0,
  format: 'Digital PDF (38 pages)',
  hero: {
    title: 'Adulting Like A Champ Workbook',
    subtitle: 'Master the skills you need to thrive as an independent adult',
    primaryCTA: { text: 'Download Now', href: '/' },
  },
  features: [
    {
      title: 'Gamified Learning',
      description: 'Engaging missions and challenges make learning fun.',
      icon: '🎮',
    },
    {
      title: 'Practical Skills',
      description: 'Real-world scenarios and step-by-step guides.',
      icon: '📋',
    },
    {
      title: 'Printable Worksheets',
      description: 'Interactive exercises you can complete at your own pace.',
      icon: '📝',
    },
    {
      title: 'Progress Tracking',
      description: 'Track your accomplishments as you master each skill.',
      icon: '📊',
    },
  ],
  pricing: {
    includes: [
      '✓ 38 pages of practical content',
      '✓ Printable worksheets',
      '✓ Lifetime access',
      '✓ Digital PDF format',
      '✓ No expiration date',
    ],
    guarantee:
      'Download and use for free. No risk, no expiration—just real skills for adulting.',
  },
  cta: {
    heading: 'Start Your Adulting Journey Today',
    description:
      'Get the workbook that helps teens and young adults master essential life skills.',
    primaryButton: { text: 'Download Free', href: '/' },
    secondaryButton: { text: 'More Info', href: '/contact' },
  },
};

export const adulatingBundleConfig: ProductPageConfig = {
  slug: 'adulting-like-a-champ-bundle',
  title: 'Adulting Like A Champ Bundle',
  description:
    'Get all nine Adulting Like A Champ workbooks in one bundle: gamified life skills for teens and young adults.',
  price: 79,
  originalPrice: 135,
  format: 'Digital PDF (9 workbooks)',
  hero: {
    title: 'Adulting Like A Champ Bundle',
    subtitle: 'Master all essential life skills with our complete collection',
    primaryCTA: { text: 'Get the Bundle', href: '/' },
  },
  features: [
    {
      title: 'Complete Coverage',
      description: 'All 9 workbooks covering every adulting skill you need.',
      icon: '📚',
    },
    {
      title: 'Gamified Format',
      description: 'Fun, engaging missions that make learning stick.',
      icon: '🎯',
    },
    {
      title: 'Save 41%',
      description: 'Get all workbooks at a discounted bundle price.',
      icon: '💰',
    },
    {
      title: 'Use Forever',
      description: 'Lifetime access with no expiration or restrictions.',
      icon: '∞',
    },
  ],
  pricing: {
    includes: [
      '✓ All 9 Adulting Like A Champ workbooks',
      '✓ Printable PDFs',
      '✓ Lifetime access',
      '✓ No expiration',
      '✓ Save $56 vs. individual purchase',
    ],
    guarantee:
      '30-day money-back guarantee. Try it risk-free and see the difference.',
  },
  cta: {
    heading: 'Transform Your Life Skills',
    description: 'Complete workbook series for teens, young adults, families, and classrooms.',
    primaryButton: { text: 'Purchase Bundle', href: '/' },
    secondaryButton: { text: 'Questions?', href: '/contact' },
  },
};

export const activeListeningConfig: ProductPageConfig = {
  slug: 'active-listening-workbook-for-teens-young-adults',
  title: 'Active Listening Workbook For Teens & Young Adults',
  description:
    'Workbook that helps you stay engaged in conversations and feel truly understood.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Active Listening Workbook',
    subtitle: 'Master the skill of truly hearing what others say',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Conversation Skills',
      description: 'Learn techniques to stay focused during conversations.',
      icon: '👂',
    },
    {
      title: 'Practical Exercises',
      description: 'Real-world scenarios to practice active listening.',
      icon: '💬',
    },
    {
      title: 'Relationship Building',
      description: 'Strengthen connections through better listening.',
      icon: '🤝',
    },
    {
      title: 'Confidence Boost',
      description: 'Feel more confident in social interactions.',
      icon: '✨',
    },
  ],
  pricing: {
    includes: [
      '✓ Interactive worksheets',
      '✓ Real-life scenarios',
      '✓ Conversation templates',
      '✓ Printable format',
      '✓ Lifetime access',
    ],
    guarantee:
      'If this workbook doesn\'t help you improve your listening skills within 30 days, we\'ll refund your money.',
  },
};

export const askingForHelpConfig: ProductPageConfig = {
  slug: 'asking-for-help-workbook-for-teens-young-adults',
  title: 'Asking For Help Workbook For Teens & Young Adults',
  description:
    'Learn to ask for help by shrinking the ask to just a few words you can say.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Asking For Help Workbook',
    subtitle: 'Make requesting support easier and less overwhelming',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Word Scripts',
      description: 'Exact phrases you can use to ask for help.',
      icon: '🗣️',
    },
    {
      title: 'Reduce Overwhelm',
      description: 'Shrink big asks into manageable requests.',
      icon: '📉',
    },
    {
      title: 'Build Confidence',
      description: 'Feel empowered to reach out when you need support.',
      icon: '💪',
    },
    {
      title: 'Relationship Skills',
      description: 'Strengthen connections by communicating your needs.',
      icon: '🤝',
    },
  ],
  pricing: {
    includes: [
      '✓ Ready-to-use scripts',
      '✓ Interactive exercises',
      '✓ Scenario-based worksheets',
      '✓ Printable format',
      '✓ Lifetime access',
    ],
    guarantee:
      'Asking for help doesn\'t have to feel impossible. Use this workbook for 30 days—if it doesn\'t help, we\'ll refund you.',
  },
};

export const assertiveCommunicationConfig: ProductPageConfig = {
  slug: 'assertive-communication-workbook-for-teens-young-adults',
  title: 'Assertive Communication Workbook For Teens & Young Adults',
  description:
    'Develop the ability to communicate your needs clearly and respectfully.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Assertive Communication Workbook',
    subtitle: 'Express yourself clearly without guilt or aggression',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Communication Techniques',
      description: 'Learn assertive vs. aggressive vs. passive communication.',
      icon: '💬',
    },
    {
      title: 'Boundary Setting',
      description: 'Practice setting healthy boundaries respectfully.',
      icon: '🚧',
    },
    {
      title: 'Conflict Navigation',
      description: 'Handle disagreements with confidence and respect.',
      icon: '⚖️',
    },
    {
      title: 'Self-Advocacy',
      description: 'Advocate for your needs in any situation.',
      icon: '🙋',
    },
  ],
  pricing: {
    includes: [
      '✓ Communication templates',
      '✓ Boundary-setting exercises',
      '✓ Real-world scenarios',
      '✓ Printable worksheets',
      '✓ Lifetime access',
    ],
    guarantee:
      'Assertive communication is a learnable skill. Use this workbook for 30 days—if you don\'t see improvement, we\'ll refund your purchase.',
  },
};

export const conflictManagementConfig: ProductPageConfig = {
  slug: 'conflict-management-workbook-for-teens-young-adults',
  title: 'Conflict Management Workbook For Teens & Young Adults',
  description:
    'Build a pause-and-plan routine to handle conflicts instead of shutting down or exploding.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Conflict Management Workbook',
    subtitle: 'Navigate disagreements with calm and clarity',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Pause Techniques',
      description: 'Learn to pause before reacting to conflict.',
      icon: '⏸️',
    },
    {
      title: 'De-escalation Skills',
      description: 'Calm techniques to reduce conflict intensity.',
      icon: '☮️',
    },
    {
      title: 'Problem-Solving',
      description: 'Work through disagreements collaboratively.',
      icon: '🤝',
    },
    {
      title: 'Emotional Regulation',
      description: 'Manage strong emotions during conflict.',
      icon: '🧘',
    },
  ],
  pricing: {
    includes: [
      '✓ Pause-and-plan worksheets',
      '✓ De-escalation strategies',
      '✓ Problem-solving templates',
      '✓ Emotion tracking tools',
      '✓ Lifetime access',
    ],
    guarantee:
      'Master conflict management in 30 days or your money back. Learn to communicate through disagreements effectively.',
  },
};

export const organizingSpacesConfig: ProductPageConfig = {
  slug: 'organizing-spaces-workbook-for-teens-young-adults',
  title: 'Organizing Spaces Workbook For Teens & Young Adults',
  description:
    'Create organized spaces that work for your brain and reduce daily stress.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Organizing Spaces Workbook',
    subtitle: 'Transform cluttered spaces into organized, functional areas',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Organization Systems',
      description: 'Simple systems that actually work for your brain.',
      icon: '🗂️',
    },
    {
      title: 'Decluttering Guide',
      description: 'Step-by-step process to get rid of stuff you don\'t need.',
      icon: '🧹',
    },
    {
      title: 'Maintenance Plans',
      description: 'Keep your spaces organized long-term.',
      icon: '♻️',
    },
    {
      title: 'Stress Reduction',
      description: 'A clean space creates a clearer mind.',
      icon: '✨',
    },
  ],
  pricing: {
    includes: [
      '✓ Organization system templates',
      '✓ Decluttering worksheets',
      '✓ Space planning guides',
      '✓ Maintenance checklists',
      '✓ Lifetime access',
    ],
    guarantee:
      'Organize your space and your mind. If this doesn\'t work for you in 30 days, we\'ll refund your money.',
  },
};

export const planningPrioritizingConfig: ProductPageConfig = {
  slug: 'planning-prioritizing-workbook-for-teens-young-adults',
  title: 'Planning & Prioritizing Workbook For Teens & Young Adults',
  description: 'Learn to break down big goals and focus on what matters most.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Planning & Prioritizing Workbook',
    subtitle: 'Turn big goals into manageable action steps',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Goal Setting',
      description: 'Define clear, achievable goals that matter to you.',
      icon: '🎯',
    },
    {
      title: 'Break Down Tasks',
      description: 'Turn overwhelming projects into manageable steps.',
      icon: '🪜',
    },
    {
      title: 'Prioritization',
      description: 'Focus on what\'s actually important.',
      icon: '⭐',
    },
    {
      title: 'Action Planning',
      description: 'Create realistic timelines and action plans.',
      icon: '📅',
    },
  ],
  pricing: {
    includes: [
      '✓ Goal-setting worksheets',
      '✓ Task breakdown templates',
      '✓ Priority matrix tools',
      '✓ Action planning guides',
      '✓ Lifetime access',
    ],
    guarantee:
      'Master planning and prioritization in 30 days. If you don\'t feel more organized, we\'ll refund you.',
  },
};

export const settingBoundariesConfig: ProductPageConfig = {
  slug: 'setting-boundaries-workbook-for-teens-young-adults',
  title: 'Setting Boundaries Workbook For Teens & Young Adults',
  description:
    'Learn to create and maintain healthy boundaries that protect your energy and wellbeing.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Setting Boundaries Workbook',
    subtitle: 'Protect your energy by creating healthy boundaries',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Boundary Basics',
      description: 'Understand what healthy boundaries look like.',
      icon: '🚧',
    },
    {
      title: 'Communication Scripts',
      description: 'Exact phrases for stating your boundaries.',
      icon: '🗣️',
    },
    {
      title: 'Boundary Types',
      description: 'Learn different types of boundaries (emotional, physical, time).',
      icon: '📏',
    },
    {
      title: 'Maintenance Skills',
      description: 'Keep your boundaries strong and consistent.',
      icon: '💪',
    },
  ],
  pricing: {
    includes: [
      '✓ Boundary-setting worksheets',
      '✓ Communication templates',
      '✓ Scenario-based exercises',
      '✓ Maintenance guides',
      '✓ Lifetime access',
    ],
    guarantee:
      'Healthy boundaries lead to healthier relationships. Use this workbook for 30 days—if it doesn\'t help, we\'ll refund your purchase.',
  },
};

export const taskInitiationConfig: ProductPageConfig = {
  slug: 'task-initiation-workbook-for-teens-young-adults',
  title: 'Task Initiation Workbook For Teens & Young Adults',
  description:
    'Overcome procrastination and learn strategies to start tasks, even when you don\'t feel like it.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Task Initiation Workbook',
    subtitle: 'Overcome procrastination and start tasks with confidence',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Start Strategies',
      description: 'Practical techniques to overcome procrastination.',
      icon: '🚀',
    },
    {
      title: 'Motivation Hacks',
      description: 'Build momentum even when motivation is low.',
      icon: '⚡',
    },
    {
      title: 'Time Management',
      description: 'Schedule tasks in ways that actually work for you.',
      icon: '⏰',
    },
    {
      title: 'Accountability',
      description: 'Build systems to keep yourself accountable.',
      icon: '✓',
    },
  ],
  pricing: {
    includes: [
      '✓ Start-task worksheets',
      '✓ Motivation-building exercises',
      '✓ Scheduling templates',
      '✓ Accountability tools',
      '✓ Lifetime access',
    ],
    guarantee:
      'Stop procrastinating in 30 days. If this doesn\'t help you start tasks, we\'ll refund your money.',
  },
};

export const timeManagementConfig: ProductPageConfig = {
  slug: 'time-management-workbook-for-teens-young-adults',
  title: 'Time Management Workbook For Teens & Young Adults',
  description:
    'Master time management with strategies designed for how your brain actually works.',
  price: 15,
  format: 'Digital PDF (Interactive Worksheets)',
  hero: {
    title: 'Time Management Workbook',
    subtitle: 'Take control of your time and reduce stress',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Time Tracking',
      description: 'Understand where your time actually goes.',
      icon: '⏱️',
    },
    {
      title: 'Scheduling Systems',
      description: 'Create schedules that work for your brain.',
      icon: '📅',
    },
    {
      title: 'Priority Management',
      description: 'Focus on what\'s most important.',
      icon: '🎯',
    },
    {
      title: 'Buffer Building',
      description: 'Account for realistic timelines and transitions.',
      icon: '🛡️',
    },
  ],
  pricing: {
    includes: [
      '✓ Time-tracking worksheets',
      '✓ Scheduling templates',
      '✓ Priority-setting tools',
      '✓ Buffer-planning guides',
      '✓ Lifetime access',
    ],
    guarantee:
      'Master time management in 30 days. If you\'re still struggling, we\'ll give you your money back.',
  },
};

export const realLifeWorkbookConfig: ProductPageConfig = {
  slug: 'real-life-executive-functioning-workbook',
  title: 'Real-Life Executive Functioning Workbook',
  description:
    'Comprehensive workbook with real-world scenarios and practical strategies for executive function.',
  price: 24.99,
  format: 'Digital PDF (Comprehensive Guide)',
  hero: {
    title: 'Real-Life Executive Functioning Workbook',
    subtitle: 'Master executive function with real-world scenarios',
    primaryCTA: { text: 'Get Workbook', href: '/' },
  },
  features: [
    {
      title: 'Real Scenarios',
      description: 'Learn from situations you actually face every day.',
      icon: '🌍',
    },
    {
      title: 'Comprehensive Coverage',
      description: 'All aspects of executive function in one place.',
      icon: '📚',
    },
    {
      title: 'Practical Strategies',
      description: 'Strategies you can implement right now.',
      icon: '💡',
    },
    {
      title: 'Progress Tracking',
      description: 'See your improvement over time.',
      icon: '📈',
    },
  ],
  pricing: {
    includes: [
      '✓ Comprehensive workbook',
      '✓ Real-world scenarios',
      '✓ Practical strategies',
      '✓ Progress tracking tools',
      '✓ Lifetime access',
    ],
    guarantee:
      'This comprehensive guide covers everything you need. Use it for 30 days—if it doesn\'t help, we\'ll refund your purchase.',
  },
};

export const iepGoalBankConfig: ProductPageConfig = {
  slug: 'comprehensive-iep-goal-bank',
  title: 'Comprehensive IEP Goal Bank',
  description:
    '100+ measurable executive functioning IEP goals organized by skill area for educators and parents.',
  price: 19.99,
  format: 'Digital PDF (IEP Goals Reference)',
  hero: {
    title: 'Comprehensive IEP Goal Bank',
    subtitle: 'Create effective IEP goals with our complete resource',
    primaryCTA: { text: 'Get Goal Bank', href: '/' },
  },
  features: [
    {
      title: 'Organized by Skill',
      description: '100+ goals organized by executive function skill areas.',
      icon: '🗂️',
    },
    {
      title: 'SMART Goals',
      description: 'All goals follow SMART criteria for measurability.',
      icon: '✓',
    },
    {
      title: 'Customizable',
      description: 'Easy to adapt goals for individual student needs.',
      icon: '✏️',
    },
    {
      title: 'Complete Resource',
      description: 'Everything educators and parents need for IEP planning.',
      icon: '📋',
    },
  ],
  pricing: {
    includes: [
      '✓ 100+ measurable goals',
      '✓ Organized by skill area',
      '✓ SMART goal format',
      '✓ Customization examples',
      '✓ Lifetime access',
    ],
    guarantee:
      'Write better IEP goals with this comprehensive bank. If it doesn\'t help you, we\'ll refund your purchase.',
  },
};

export const neurodivergentCookbookConfig: ProductPageConfig = {
  slug: 'the-neurodivergent-friendly-cookbook',
  title: 'The Neurodivergent-Friendly Cookbook',
  description:
    'Simple, accessible recipes and meal planning strategies designed for neurodivergent people.',
  price: 17.99,
  format: 'Digital PDF (Cookbook)',
  hero: {
    title: 'The Neurodivergent-Friendly Cookbook',
    subtitle: 'Enjoy cooking and eating with sensory-friendly recipes',
    primaryCTA: { text: 'Get Cookbook', href: '/' },
  },
  features: [
    {
      title: 'Sensory-Friendly Recipes',
      description: 'Recipes designed for neurodivergent taste preferences.',
      icon: '🍽️',
    },
    {
      title: 'Simple Instructions',
      description: 'Clear, step-by-step directions without overwhelming steps.',
      icon: '📝',
    },
    {
      title: 'Meal Planning',
      description: 'Easy systems for planning meals that work for you.',
      icon: '📅',
    },
    {
      title: 'Accessibility Focus',
      description: 'Recipes for varying energy and sensory levels.',
      icon: '♿',
    },
  ],
  pricing: {
    includes: [
      '✓ 50+ sensory-friendly recipes',
      '✓ Meal planning templates',
      '✓ Shopping lists',
      '✓ Cooking tips',
      '✓ Lifetime access',
    ],
    guarantee:
      'Enjoy cooking again with recipes designed for your brain. If you don\'t find value in 30 days, we\'ll refund you.',
  },
};

export const mealPlanConfig: ProductPageConfig = {
  slug: 'the-real-life-executive-functioning-meal-plan',
  title: 'The Real-Life Executive Functioning Meal Plan',
  description: 'Monthly meal planning and shopping guides designed for executive function challenges.',
  price: 14.99,
  format: 'Digital PDF (Meal Plan)',
  hero: {
    title: 'Real-Life Executive Functioning Meal Plan',
    subtitle: 'Simplify meal planning and eating with structured guides',
    primaryCTA: { text: 'Get Meal Plan', href: '/' },
  },
  features: [
    {
      title: 'Monthly Plans',
      description: 'Pre-planned meals for an entire month.',
      icon: '📅',
    },
    {
      title: 'Shopping Lists',
      description: 'Organized shopping lists for each week.',
      icon: '🛒',
    },
    {
      title: 'Flexible Options',
      description: 'Swap meals based on your energy and preferences.',
      icon: '🔄',
    },
    {
      title: 'Simple Recipes',
      description: 'Recipes that don\'t require complex executive function.',
      icon: '👨‍🍳',
    },
  ],
  pricing: {
    includes: [
      '✓ Full month meal planning',
      '✓ Weekly shopping lists',
      '✓ Simple recipes',
      '✓ Flexible swaps',
      '✓ Lifetime access',
    ],
    guarantee:
      'Reduce meal planning stress in 30 days. If this doesn\'t help, we\'ll refund your purchase.',
  },
};

// Export all configurations
export const productConfigs: Record<string, ProductPageConfig> = {
  'adulting-like-a-champ-workbook': adulatingLikeAChampConfig,
  'adulting-like-a-champ-bundle': adulatingBundleConfig,
  'active-listening-workbook-for-teens-young-adults': activeListeningConfig,
  'asking-for-help-workbook-for-teens-young-adults': askingForHelpConfig,
  'assertive-communication-workbook-for-teens-young-adults': assertiveCommunicationConfig,
  'conflict-management-workbook-for-teens-young-adults': conflictManagementConfig,
  'organizing-spaces-workbook-for-teens-young-adults': organizingSpacesConfig,
  'planning-prioritizing-workbook-for-teens-young-adults': planningPrioritizingConfig,
  'setting-boundaries-workbook-for-teens-young-adults': settingBoundariesConfig,
  'task-initiation-workbook-for-teens-young-adults': taskInitiationConfig,
  'time-management-workbook-for-teens-young-adults': timeManagementConfig,
  'real-life-executive-functioning-workbook': realLifeWorkbookConfig,
  'comprehensive-iep-goal-bank': iepGoalBankConfig,
  'the-neurodivergent-friendly-cookbook': neurodivergentCookbookConfig,
  'the-real-life-executive-functioning-meal-plan': mealPlanConfig,
};

export function getProductConfig(slug: string): ProductPageConfig | null {
  return productConfigs[slug] || null;
}
