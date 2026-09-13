/**
 * Team Member Pages Configuration
 * Defines profile and content structure for each team member
 */

export interface TeamMemberPageConfig {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  image?: string;
  email?: string;
  phone?: string;
  specialties: Array<{
    title: string;
    description: string;
  }>;
  credentials?: string[];
  cta?: {
    heading: string;
    description: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

/**
 * Team Member Configurations
 */

export const shannonSnowConfig: TeamMemberPageConfig = {
  slug: 'shannon-snow',
  name: 'Shannon Snow',
  role: 'Founder & Executive Director',
  shortBio: 'Shannon Snow is the founder and visionary behind Life Skills Advocate, dedicated to empowering the neurodivergent community.',
  fullBio: `Shannon Snow founded Life Skills Advocate with a mission to transform how we support neurodivergent individuals. With years of experience in coaching and advocacy, Shannon combines evidence-based strategies with genuine compassion to help clients thrive.

Shannon believes that executive functioning skills are learnable, and that every person deserves support tailored to how their brain actually works. Through her coaching, Shannon has helped hundreds of individuals build confidence, develop practical skills, and become their own best advocates.

When not coaching, Shannon is passionate about neurodiversity education and working to change the narrative around ADHD and autism in professional settings.`,
  specialties: [
    {
      title: 'Executive Function Coaching',
      description:
        'Specializes in helping individuals overcome challenges with organization, time management, and task initiation.',
    },
    {
      title: 'Neurodiversity Advocacy',
      description:
        'Passionate about creating inclusive workplaces and educational environments that honor neurodivergent strengths.',
    },
    {
      title: 'Life Skills Development',
      description:
        'Helps young adults and adults develop independence and confidence in daily living and self-care.',
    },
    {
      title: 'Team Leadership',
      description:
        'Leads a team of dedicated coaches with a shared commitment to supporting the neurodivergent community.',
    },
  ],
  credentials: [
    'Executive Function Coach Certification',
    'Life Skills Coaching Certification',
    'Neurodiversity Advocate Training',
    '10+ years coaching experience',
  ],
  cta: {
    heading: 'Work with Shannon',
    description:
      'Schedule a consultation with Shannon to discuss your coaching goals and get personalized support.',
    primaryButton: { text: 'Book with Shannon', href: '/booking' },
    secondaryButton: { text: 'Send Message', href: '/contact' },
  },
};

export const jbradyConfig: TeamMemberPageConfig = {
  slug: 'jess-brady',
  name: 'Jess Brady',
  role: 'Executive Function Coach',
  shortBio: 'Jess Brady specializes in helping teens and young adults develop executive function skills and confidence.',
  fullBio: `Jess Brady brings 8+ years of experience coaching teens and young adults through the challenges of executive functioning. With a focus on real-world scenarios and practical strategies, Jess creates customized coaching plans that actually work for how her clients' brains function.

Jess has a special gift for meeting clients where they are—without judgment, with lots of encouragement, and with strategies that stick. Her coaching has helped countless students improve grades, navigate college transitions, and build confidence in their abilities.

Jess is ADHD herself and brings authentic understanding to every coaching relationship.`,
  specialties: [
    {
      title: 'Teenage Coaching',
      description: 'Specializes in helping high school students develop academic and life skills.',
    },
    {
      title: 'Time Management',
      description: 'Expert in creating systems that actually work for executive function challenges.',
    },
    {
      title: 'School Navigation',
      description: 'Helps students communicate with teachers and advocate for accommodations.',
    },
  ],
  credentials: [
    'Executive Function Coach Certification',
    'High School Coaching Specialty',
    '8+ years coaching experience',
    'Neurodivergent certified',
  ],
  cta: {
    heading: 'Work with Jess',
    description: 'Jess specializes in helping teens and young adults thrive academically and personally.',
    primaryButton: { text: 'Book with Jess', href: '/booking' },
    secondaryButton: { text: 'Contact', href: '/contact' },
  },
};

export const eleanorChapmanConfig: TeamMemberPageConfig = {
  slug: 'eleanor-chapman',
  name: 'Eleanor Chapman',
  role: 'Life Skills Coach',
  shortBio: 'Eleanor Chapman helps young adults develop independence and confidence in daily living skills.',
  fullBio: `Eleanor Chapman is passionate about helping young adults transition to independence with confidence and skill. With her warm, encouraging approach, Eleanor breaks down life skills into manageable, achievable steps.

Whether it's budgeting, cooking, time management, or social skills, Eleanor meets each client exactly where they are and helps them build real competence. Her clients consistently report feeling more confident, more capable, and more ready for the challenges of adulthood.

Eleanor's background in education and counseling informs her coaching approach, which combines evidence-based strategies with genuine care.`,
  specialties: [
    {
      title: 'Daily Living Skills',
      description: 'Coaching on budgeting, cooking, cleaning, and household management.',
    },
    {
      title: 'Independence Building',
      description: 'Helps young adults develop confidence and competence in adult responsibilities.',
    },
    {
      title: 'Transition Support',
      description: 'Specializes in supporting major life transitions like moving or starting college.',
    },
  ],
  credentials: [
    'Life Skills Coach Certification',
    'Education background',
    'Counseling training',
    '6+ years experience',
  ],
};

export const heatherReedConfig: TeamMemberPageConfig = {
  slug: 'heather-reed',
  name: 'Heather Reed',
  role: 'Academic Coach',
  shortBio: 'Heather Reed specializes in helping students develop study skills and academic confidence.',
  fullBio: `Heather Reed combines years of teaching experience with specialized coaching training to help students transform their academic experience. Heather believes every student has the potential to succeed when given the right support and strategies.

Heather's coaching focuses on building strong study habits, improving organization, managing test anxiety, and developing genuine confidence in academic abilities. Her students consistently report improved grades, reduced stress, and renewed enthusiasm for learning.

With a background in education and neurodevelopmental psychology, Heather brings both knowledge and compassion to her coaching.`,
  specialties: [
    {
      title: 'Study Skills Development',
      description: 'Teaches evidence-based study techniques that work for different learning styles.',
    },
    {
      title: 'Test Anxiety Management',
      description: 'Helps students overcome anxiety and perform at their best on exams.',
    },
    {
      title: 'School Communication',
      description:
        'Coaches students in advocating for themselves with teachers and disability services.',
    },
  ],
  credentials: [
    'Academic Coach Certification',
    'Teaching credentials',
    'Neurodevelopmental psychology training',
    '10+ years education experience',
  ],
};

// Additional team members with consistent structure
export const morganHaleConfig: TeamMemberPageConfig = {
  slug: 'morgan-hale',
  name: 'Morgan Hale',
  role: 'Life Skills Coach',
  shortBio: 'Morgan Hale helps individuals build confidence and independence through practical life skills coaching.',
  fullBio: `Morgan Hale brings 7+ years of coaching experience and a deep commitment to supporting neurodivergent individuals. Morgan's approach combines practical skill-building with emotional support and encouragement.

Morgan specializes in meeting clients where they are and creating customized plans that work for real life. With Morgan's support, clients develop not just skills, but genuine confidence in their ability to handle life's challenges.`,
  specialties: [
    {
      title: 'Life Transitions',
      description: 'Supports clients through major life changes with practical strategies.',
    },
    {
      title: 'Confidence Building',
      description: 'Helps clients develop genuine confidence in their abilities.',
    },
    {
      title: 'Communication Skills',
      description: 'Coaches clients in clear, assertive communication.',
    },
  ],
  credentials: [
    'Life Skills Coach Certification',
    'Coaching Psychology Training',
    '7+ years experience',
  ],
};

export const lizMakhramadzhyanConfig: TeamMemberPageConfig = {
  slug: 'liz-makhramadzhyan',
  name: 'Liz Makhramadzhyan',
  role: 'Executive Function Coach',
  shortBio: 'Liz Makhramadzhyan specializes in helping adults overcome executive function challenges and regain control of their lives.',
  fullBio: `Liz Makhramadzhyan works with adults who struggle with executive functioning, helping them develop systems and strategies that actually fit their lives. With years of experience and a strong background in organizational psychology, Liz creates customized coaching plans.

Liz's clients report significant improvements in productivity, reduced stress, and better relationships as they develop stronger executive functioning skills.`,
  specialties: [
    {
      title: 'Adult Executive Function',
      description: 'Specializes in coaching adults through executive functioning challenges.',
    },
    {
      title: 'Organizational Systems',
      description: 'Creates personalized organizational systems that work.',
    },
    {
      title: 'Workplace Strategies',
      description: 'Helps clients succeed in professional environments.',
    },
  ],
  credentials: [
    'Executive Function Coach Certification',
    'Organizational Psychology',
    '8+ years coaching',
  ],
};

export const ketBuchholzConfig: TeamMemberPageConfig = {
  slug: 'ket-buchholz',
  name: 'Ket Buchholz',
  role: 'Life Skills Coach',
  shortBio: 'Ket Buchholz helps individuals develop the practical skills and confidence needed for independent living.',
  fullBio: `Ket Buchholz is dedicated to helping individuals—especially neurodivergent adults—develop the practical skills and confidence they need to thrive independently. Ket's warm, non-judgmental approach creates a safe space for learning and growth.

Through practical skill-building and emotional support, Ket helps clients develop genuine competence and confidence in managing daily life.`,
  specialties: [
    {
      title: 'Independent Living',
      description: 'Coaching on all aspects of managing an independent household.',
    },
    {
      title: 'Self-Care Skills',
      description: 'Develops routines and habits that support health and wellbeing.',
    },
    {
      title: 'Financial Literacy',
      description: 'Teaches practical money management and budgeting skills.',
    },
  ],
  credentials: [
    'Life Skills Coach Certification',
    'Financial Wellness Training',
    '6+ years experience',
  ],
};

export const dannyDoyleConfig: TeamMemberPageConfig = {
  slug: 'danny-doyle',
  name: 'Danny Doyle',
  role: 'Executive Function Coach',
  shortBio: 'Danny Doyle specializes in helping young adults navigate the transition to college and independent life.',
  fullBio: `Danny Doyle works with high school seniors and college students to develop the executive function skills needed for college success. With a focus on realistic strategies and genuine understanding, Danny helps students build confidence as they transition to independence.

Danny's coaching has helped dozens of students successfully navigate college applications, time management, study skills, and social adjustment.`,
  specialties: [
    {
      title: 'College Transition',
      description: 'Specializes in helping high school students prepare for college.',
    },
    {
      title: 'Study Skills',
      description: 'Develops study habits and strategies for college-level coursework.',
    },
    {
      title: 'Time Management',
      description: 'Helps students manage competing demands of college life.',
    },
  ],
  credentials: [
    'Executive Function Coach Certification',
    'College Coaching Specialty',
    '7+ years coaching',
  ],
};

export const amyKimWaschkeConfig: TeamMemberPageConfig = {
  slug: 'amy-kim-waschke',
  name: 'Amy Kim Waschke',
  role: 'Life Skills Coach',
  shortBio: 'Amy Kim Waschke helps individuals build practical life skills and confidence through compassionate, evidence-based coaching.',
  fullBio: `Amy Kim Waschke brings warmth, expertise, and genuine care to every coaching relationship. With years of experience supporting neurodivergent individuals, Amy specializes in meeting clients where they are and helping them build skills that work for their real lives.

Amy's coaching combines practical skill-building with emotional support, creating genuine transformation in her clients' confidence and capability.`,
  specialties: [
    {
      title: 'Holistic Life Skills',
      description: 'Comprehensive coaching covering daily living, social, and practical skills.',
    },
    {
      title: 'Emotional Regulation',
      description: 'Helps clients develop skills for managing emotions effectively.',
    },
    {
      title: 'Relationship Skills',
      description: 'Coaching on building and maintaining healthy relationships.',
    },
  ],
  credentials: [
    'Life Skills Coach Certification',
    'Emotional Intelligence Training',
    '9+ years coaching',
  ],
};

export const jenniferSchmidtConfig: TeamMemberPageConfig = {
  slug: 'jennifer-schmidt',
  name: 'Jennifer Schmidt',
  role: 'Academic Coach',
  shortBio: 'Jennifer Schmidt specializes in helping students with learning differences develop academic confidence and success.',
  fullBio: `Jennifer Schmidt has dedicated her career to helping students with learning differences—including ADHD, autism, and other neurodivergent profiles—succeed academically. Jennifer combines specialized training with deep empathy to create truly supportive coaching relationships.

Jennifer's students consistently report improved grades, better study habits, and genuine confidence in their academic abilities.`,
  specialties: [
    {
      title: 'Learning Differences Support',
      description: 'Specializes in coaching students with ADHD, dyslexia, and autism.',
    },
    {
      title: 'Testing Accommodations',
      description: 'Helps students access and utilize appropriate testing accommodations.',
    },
    {
      title: 'Study Strategy Development',
      description: 'Creates customized study strategies that work for each student.',
    },
  ],
  credentials: [
    'Academic Coach Certification',
    'Learning Differences Specialist',
    'Special Education background',
    '11+ years experience',
  ],
};

export const chrisHansonConfig: TeamMemberPageConfig = {
  slug: 'chris-hanson',
  name: 'Chris Hanson',
  role: 'Career Coach',
  shortBio: 'Chris Hanson helps individuals explore careers and develop the skills needed for professional success.',
  fullBio: `Chris Hanson specializes in career coaching for neurodivergent individuals, helping clients navigate career exploration, job searching, and workplace success. Chris brings both professional experience and deep understanding of neurodivergent strengths in the workplace.

Chris's coaching has helped many clients find careers that align with their strengths and values, and develop confidence in professional settings.`,
  specialties: [
    {
      title: 'Career Exploration',
      description: 'Helps clients discover careers aligned with their strengths and interests.',
    },
    {
      title: 'Job Search Strategy',
      description: 'Coaches clients through effective job searching and interview preparation.',
    },
    {
      title: 'Workplace Success',
      description:
        'Develops strategies for thriving in professional environments.',
    },
  ],
  credentials: [
    'Career Coach Certification',
    'Professional development training',
    'HR experience',
    '8+ years coaching',
  ],
};

export const kyleMoslerConfig: TeamMemberPageConfig = {
  slug: 'kyle-mosler',
  name: 'Kyle Mosler',
  role: 'Life Skills Coach',
  shortBio: 'Kyle Mosler helps individuals develop practical life skills and independence with patience and encouragement.',
  fullBio: `Kyle Mosler is passionate about supporting individuals in developing the practical skills they need for independent living. With a patient, encouraging approach, Kyle breaks down complex life skills into manageable, achievable steps.

Kyle's clients develop not just skills, but genuine confidence and independence in managing their lives.`,
  specialties: [
    {
      title: 'Practical Life Skills',
      description: 'Teaches daily living skills including cooking, cleaning, and self-care.',
    },
    {
      title: 'Routine Building',
      description: 'Helps clients develop sustainable daily routines.',
    },
    {
      title: 'Goal Achievement',
      description: 'Supports clients in setting and achieving meaningful goals.',
    },
  ],
  credentials: [
    'Life Skills Coach Certification',
    'Behavior Support Training',
    '6+ years experience',
  ],
};

export const karissaDoreeConfig: TeamMemberPageConfig = {
  slug: 'karrissa-doree',
  name: 'Karrissa Doree',
  role: 'Executive Function Coach',
  shortBio: 'Karrissa Doree helps individuals overcome executive function challenges and develop systems that work for their lives.',
  fullBio: `Karrissa Doree brings years of coaching experience and a deep commitment to helping individuals develop executive function skills. Karrissa specializes in creating customized systems and strategies that actually fit how her clients' brains work.

Through practical coaching and genuine encouragement, Karrissa helps her clients regain confidence and control over their lives.`,
  specialties: [
    {
      title: 'Executive Function Systems',
      description: 'Develops personalized organizational and time management systems.',
    },
    {
      title: 'ADHD Strategies',
      description: 'Specializes in strategies specifically effective for ADHD.',
    },
    {
      title: 'Habit Formation',
      description: 'Helps clients build sustainable habits and routines.',
    },
  ],
  credentials: [
    'Executive Function Coach Certification',
    'Habit Formation Specialist',
    '7+ years coaching',
  ],
};

// Export all configurations
export const teamConfigs: Record<string, TeamMemberPageConfig> = {
  'shannon-snow': shannonSnowConfig,
  'jess-brady': jbradyConfig,
  'eleanor-chapman': eleanorChapmanConfig,
  'heather-reed': heatherReedConfig,
  'morgan-hale': morganHaleConfig,
  'liz-makhramadzhyan': lizMakhramadzhyanConfig,
  'ket-buchholz': ketBuchholzConfig,
  'danny-doyle': dannyDoyleConfig,
  'amy-kim-waschke': amyKimWaschkeConfig,
  'jennifer-schmidt': jenniferSchmidtConfig,
  'chris-hanson': chrisHansonConfig,
  'kyle-mosler': kyleMoslerConfig,
  'karrissa-doree': karissaDoreeConfig,
};

export function getTeamMemberConfig(slug: string): TeamMemberPageConfig | null {
  return teamConfigs[slug] || null;
}
