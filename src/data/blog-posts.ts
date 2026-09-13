/**
 * Blog Posts Configuration
 * Defines metadata and content for each blog post
 */

export interface BlogPostConfig {
  slug: string;
  title: string;
  excerpt: string;
  author?: string;
  publishedDate: string;
  readTime: string;
  category?: string;
  content: string;
  cta?: {
    heading: string;
    description: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

/**
 * Blog Post Configurations
 */

export const iepGoalsPost: BlogPostConfig = {
  slug: '100-measurable-executive-functioning-iep-goals-by-skill-area',
  title: '100+ Measurable Executive Functioning IEP Goals (By Skill Area)',
  excerpt:
    'Discover over 100 ready-to-use, IDEA-compliant IEP goals organized by executive functioning skill area.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 30, 2024',
  readTime: '12 min',
  category: 'IEP Goals',
  content: `<h2>Writing IEP Goals That Actually Work</h2>
<p>Creating IEP goals for executive functioning challenges can be overwhelming. You want to write goals that are meaningful, measurable, and truly address the student's needs. But where do you start?</p>

<h3>What Makes a Good IEP Goal?</h3>
<p>IDEA-compliant IEP goals need to be:</p>
<ul>
  <li>Specific and measurable</li>
  <li>Achievable within a school year</li>
  <li>Relevant to the student's disability</li>
  <li>Written in observable, behavioral terms</li>
</ul>

<h3>Executive Functioning Skills to Target</h3>
<p>The most impactful IEP goals target core executive functioning areas:</p>
<ul>
  <li><strong>Planning & Organization</strong> - Breaking down tasks, organizing materials</li>
  <li><strong>Time Management</strong> - Estimating time, meeting deadlines</li>
  <li><strong>Task Initiation</strong> - Starting work without excessive prompting</li>
  <li><strong>Working Memory</strong> - Holding and manipulating information</li>
  <li><strong>Emotional Regulation</strong> - Managing frustration and staying on task</li>
  <li><strong>Flexibility</strong> - Adapting to changes in routine</li>
</ul>

<h3>How to Use These Goal Templates</h3>
<p>Simply select goals that match your student's needs, customize them with specific details and baselines, and use them in IEP development. Each goal is written to meet IDEA requirements and can be quickly adapted.</p>`,
  cta: {
    heading: 'Get Access to 100+ IEP Goals',
    description: 'Save time and create better IEP goals with our comprehensive collection.',
    primaryButton: { text: 'Access Now', href: '/products' },
    secondaryButton: { text: 'Learn More', href: '/services' },
  },
};

export const efSkillsPost: BlogPostConfig = {
  slug: '11-executive-functioning-skills-signs-real-life-examples-and-simple-supports',
  title: '11 Executive Functioning Skills: Signs, Real-Life Examples, And Simple Supports',
  excerpt:
    'Understand the 11 core executive functioning skills, recognize struggles, and discover practical support strategies.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 28, 2024',
  readTime: '15 min',
  category: 'Executive Functioning',
  content: `<h2>Understanding the 11 Executive Functioning Skills</h2>
<p>Executive functioning is the cognitive system that helps us plan, organize, manage time, and control impulses. When executive function is working well, we can juggle multiple tasks, adapt to change, and achieve our goals. When it struggles, everything feels harder.</p>

<h3>The 11 Skills Explained</h3>
<p>Here are the core executive functioning skills and what to look for:</p>

<h4>1. Planning & Prioritization</h4>
<p><strong>What it is:</strong> Breaking big projects into steps and deciding what matters most.</p>
<p><strong>When it struggles:</strong> Feels overwhelmed by tasks, doesn't know where to start, misses deadlines.</p>
<p><strong>How to help:</strong> Use visual schedules, break projects into smaller chunks, create priority lists.</p>

<h4>2. Organization</h4>
<p><strong>What it is:</strong> Keeping track of materials, information, and systems for easy access.</p>
<p><strong>When it struggles:</strong> Can't find things, loses track of assignments, messy workspace.</p>
<p><strong>How to help:</strong> Color-coding, labeled folders, consistent routines for organizing spaces.</p>

<h4>3. Time Management</h4>
<p><strong>What it is:</strong> Estimating how long things take and managing time effectively.</p>
<p><strong>When it struggles:</strong> Loses track of time, rushes at the last minute, late to activities.</p>
<p><strong>How to help:</strong> Visual timers, time reminders, breaking work into timed segments.</p>

<h4>4. Task Initiation</h4>
<p><strong>What it is:</strong> Starting tasks without excessive prompting.</p>
<p><strong>When it struggles:</strong> Procrastinates, needs constant reminders, takes forever to get started.</p>
<p><strong>How to help:</strong> External reminders, breaking tasks into first small steps, accountability systems.</p>

<h4>5. Working Memory</h4>
<p><strong>What it is:</strong> Holding and manipulating information in your mind.</p>
<p><strong>When it struggles:</strong> Forgets instructions, loses track mid-conversation, needs things repeated.</p>
<p><strong>How to help:</strong> Written directions, checklists, notes, external memory aids.</p>

<h4>6. Flexibility</h4>
<p><strong>What it is:</strong> Adapting when plans change or trying new approaches.</p>
<p><strong>When it struggles:</strong> Gets stuck on one idea, upset by changes, difficulty switching tasks.</p>
<p><strong>How to help:</strong> Prepare for transitions, use transition warnings, offer choices.</p>

<h4>7. Self-Monitoring</h4>
<p><strong>What it is:</strong> Noticing and evaluating your own performance.</p>
<p><strong>When it struggles:</strong> Doesn't notice mistakes, can't assess own performance, surprised by feedback.</p>
<p><strong>How to help:</strong> Self-check systems, rubrics, video feedback, regular check-ins.</p>

<h4>8. Impulse Control</h4>
<p><strong>What it is:</strong> Thinking before acting, resisting immediate urges.</p>
<p><strong>When it struggles:</strong> Acts without thinking, interrupts, says things without filtering.</p>
<p><strong>How to help:</strong> Pause reminders, scripts for waiting, delayed gratification practice.</p>

<h4>9. Emotional Regulation</h4>
<p><strong>What it is:</strong> Managing and expressing emotions appropriately.</p>
<p><strong>When it struggles:</strong> Overreacts to small issues, shuts down when frustrated, difficulty recovering.</p>
<p><strong>How to help:</strong> Calming strategies, emotion recognition tools, safe spaces, coping techniques.</p>

<h4>10. Goal-Directed Persistence</h4>
<p><strong>What it is:</strong> Staying focused on goals even when facing obstacles.</p>
<p><strong>When it struggles:</strong> Gives up easily, loses motivation, can't push through difficulty.</p>
<p><strong>How to help:</strong> Break into achievable milestones, celebrate progress, mentoring, accountability.</p>

<h4>11. Metacognition</h4>
<p><strong>What it is:</strong> Thinking about your own thinking and learning process.</p>
<p><strong>When it struggles:</strong> Doesn't reflect on what worked, makes same mistakes, can't explain thinking.</p>
<p><strong>How to help:</strong> Reflection prompts, think-aloud protocols, learning journals.</p>

<h3>The Bottom Line</h3>
<p>Executive functioning skills are learnable. With the right strategies and support, people can strengthen these skills at any age.</p>`,
  cta: {
    heading: 'Develop These Skills With Coaching',
    description: 'Work with an executive function coach to strengthen these crucial skills.',
    primaryButton: { text: 'Learn About Coaching', href: '/services' },
    secondaryButton: { text: 'Book Consultation', href: '/booking' },
  },
};

export const differencePost: BlogPostConfig = {
  slug: 'discover-the-life-skills-advocate-difference',
  title: 'Discover The Life Skills Advocate Difference',
  excerpt:
    'What makes Life Skills Advocate unique in supporting neurodivergent individuals.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 25, 2024',
  readTime: '8 min',
  category: 'About Us',
  content: `<h2>Why We Started Life Skills Advocate</h2>
<p>Life Skills Advocate was founded on a simple belief: executive functioning skills are learnable, and every person deserves support that honors how their brain actually works.</p>

<h3>What Makes Us Different</h3>

<h4>1. Neurodivergent-Affirming Approach</h4>
<p>We don't try to "fix" ADHD, autism, or dyslexia. Instead, we celebrate neurodivergent strengths while building practical skills. Our coaching honors how your brain works, not against it.</p>

<h4>2. Personalized Coaching Plans</h4>
<p>There's no one-size-fits-all solution. Every coaching plan is tailored to individual needs, goals, and learning style. What works for one person might not work for another—and that's okay.</p>

<h4>3. Evidence-Based Strategies</h4>
<p>Our coaching methods are grounded in research on executive functioning, neurodevelopment, and best practices in coaching. We use strategies that actually work.</p>

<h4>4. Experienced Coaches</h4>
<p>Our team consists of coaches who truly understand executive functioning challenges—many of us are neurodivergent ourselves. We bring both expertise and authentic understanding.</p>

<h4>5. Real, Measurable Results</h4>
<p>Our clients report genuine progress: improved grades, better relationships, greater independence, and real confidence in their abilities.</p>

<h3>Our Mission</h3>
<p>To empower the neurodivergent community to embrace their strengths, develop life skills, and become their own best advocates.</p>`,
  cta: {
    heading: 'Experience the Difference',
    description: 'Schedule a consultation to see how our coaching can support your growth.',
    primaryButton: { text: 'Book Consultation', href: '/booking' },
    secondaryButton: { text: 'Meet Our Team', href: '/team' },
  },
};

export const hubPost: BlogPostConfig = {
  slug: 'executive-functioning-101-resource-hub',
  title: 'Executive Functioning 101 Resource Hub',
  excerpt: 'Your go-to collection of articles and guides for understanding executive functioning.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 22, 2024',
  readTime: '5 min',
  category: 'Resources',
  content: `<h2>Welcome to the EF Resource Hub</h2>
<p>Executive functioning can be confusing. There's so much to learn—about what it is, how to recognize struggles, and how to develop stronger skills.</p>

<p>This resource hub brings everything together in one place. Whether you're just learning about EF or looking for advanced strategies, you'll find something useful here.</p>

<h3>Browse by Topic</h3>
<ul>
  <li>Understanding Executive Functioning Basics</li>
  <li>Recognizing EF Challenges</li>
  <li>Practical Support Strategies</li>
  <li>Working with Schools and Educators</li>
  <li>Tools and Apps for Executive Function</li>
  <li>Real-Life Stories and Examples</li>
</ul>

<h3>For Everyone</h3>
<p>Resources designed for:</p>
<ul>
  <li><strong>Students</strong> - Understanding your own challenges and building strategies</li>
  <li><strong>Parents</strong> - Supporting your child's executive function development</li>
  <li><strong>Teachers</strong> - Classroom strategies and accommodations</li>
  <li><strong>Professionals</strong> - Evidence-based approaches and coaching techniques</li>
</ul>

<h3>Get Started</h3>
<p>Start with the article that sounds most relevant to your situation. Each resource builds your understanding step by step.</p>`,
  cta: {
    heading: 'Explore All Resources',
    description: 'Browse our complete collection of EF guides and articles.',
    primaryButton: { text: 'Browse Resources', href: '/resources' },
    secondaryButton: { text: 'Book Coaching', href: '/booking' },
  },
};

export const assessmentPost: BlogPostConfig = {
  slug: 'free-executive-functioning-assessment-for-teens-adults-professionals',
  title: 'Free Executive Functioning Assessment For Teens, Adults & Professionals',
  excerpt:
    'Take our free assessment to identify your executive functioning strengths and challenges.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 20, 2024',
  readTime: '6 min',
  category: 'Tools',
  content: `<h2>Understand Your Executive Functioning Profile</h2>
<p>Everyone has different executive functioning strengths and challenges. Understanding your personal profile is the first step toward developing stronger skills.</p>

<h3>What Our Assessment Measures</h3>
<p>Our science-based assessment evaluates:</p>
<ul>
  <li>Planning & Organization skills</li>
  <li>Time Management ability</li>
  <li>Task Initiation patterns</li>
  <li>Working Memory capacity</li>
  <li>Flexibility and adaptability</li>
  <li>Self-Monitoring awareness</li>
  <li>Impulse Control</li>
  <li>Emotional Regulation</li>
  <li>Goal-Directed Persistence</li>
  <li>Metacognitive awareness</li>
</ul>

<h3>What You'll Learn</h3>
<p>After taking the assessment, you'll receive:</p>
<ul>
  <li>Immediate scoring across all EF areas</li>
  <li>A personalized summary of your profile</li>
  <li>Identification of your strongest areas</li>
  <li>Recognition of areas to develop</li>
  <li>Practical, specific next steps for improvement</li>
</ul>

<h3>How to Use Your Results</h3>
<p>Your assessment results are a tool for growth. Use them to:</p>
<ul>
  <li>Guide your development efforts</li>
  <li>Share with educators or coaches</li>
  <li>Track progress over time</li>
  <li>Identify areas for coaching focus</li>
</ul>

<h3>Take the Assessment</h3>
<p>The assessment takes about 10-15 minutes and is completely free. No sign-up required.</p>`,
  cta: {
    heading: 'Take the Free Assessment',
    description: 'Get instant insights into your executive functioning profile.',
    primaryButton: { text: 'Start Assessment', href: '/resources' },
    secondaryButton: { text: 'Learn About Coaching', href: '/services' },
  },
};

export const worksheetsPost: BlogPostConfig = {
  slug: 'free-executive-functioning-worksheets-printables',
  title: 'Free Executive Functioning Worksheets & Printables',
  excerpt:
    'Download practical, printable worksheets for planning, organization, and time management.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 18, 2024',
  readTime: '7 min',
  category: 'Tools',
  content: `<h2>Tools You Can Use Right Now</h2>
<p>Theory is great, but practice is what makes change stick. These worksheets give you concrete tools to use immediately in your daily life.</p>

<h3>What's Available</h3>
<p>Our worksheet library includes:</p>
<ul>
  <li><strong>Planning Worksheets</strong> - Project planning, goal setting, breaking down tasks</li>
  <li><strong>Organization Sheets</strong> - Checklists, priority matrices, tracking systems</li>
  <li><strong>Time Management Tools</strong> - Daily schedules, time blocking templates, deadline trackers</li>
  <li><strong>Reflection Prompts</strong> - Learning journals, progress tracking, metacognitive questions</li>
  <li><strong>Emotion Regulation Cards</strong> - Calming strategies, coping techniques, mindfulness guides</li>
</ul>

<h3>How to Use These Worksheets</h3>
<ol>
  <li><strong>Download</strong> the worksheet that matches your need</li>
  <li><strong>Print</strong> it (or use it digitally)</li>
  <li><strong>Customize</strong> it for your specific situation</li>
  <li><strong>Use daily</strong> as part of your routine</li>
  <li><strong>Track progress</strong> over time</li>
</ol>

<h3>Make Them Your Own</h3>
<p>These worksheets are templates. Feel free to modify them to fit your needs exactly. The goal is to create tools that actually work for you.</p>`,
  cta: {
    heading: 'Download Free Worksheets',
    description: 'Get immediate tools for planning, organization, and time management.',
    primaryButton: { text: 'Download Now', href: '/resources' },
    secondaryButton: { text: 'Get Coaching Support', href: '/booking' },
  },
};

export const toolsPost: BlogPostConfig = {
  slug: 'neurodivergent-friendly-tools-resources',
  title: 'Neurodivergent-Friendly Tools & Resources',
  excerpt:
    'Handpicked apps, websites, and tools designed specifically for neurodivergent individuals.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 15, 2024',
  readTime: '10 min',
  category: 'Tools',
  content: `<h2>Technology Can Be a Game-Changer</h2>
<p>The right tools can make executive functioning so much easier. From reminder apps to focus timers to project management systems, technology offers solutions for nearly every EF challenge.</p>

<h3>Categories of Helpful Tools</h3>

<h4>Planning & Project Management</h4>
<ul>
  <li><strong>Todoist</strong> - Task management with priorities and recurring tasks</li>
  <li><strong>Asana</strong> - Visual project planning with timelines</li>
  <li><strong>Notion</strong> - Customizable all-in-one workspace</li>
</ul>

<h4>Time Management</h4>
<ul>
  <li><strong>Forest App</strong> - Gamified focus timer with visual feedback</li>
  <li><strong>Be Focused</strong> - Pomodoro timer with break reminders</li>
  <li><strong>Google Calendar</strong> - Visual schedule with reminders</li>
</ul>

<h4>Organization</h4>
<ul>
  <li><strong>OneNote</strong> - Digital notebook for organizing notes</li>
  <li><strong>Evernote</strong> - Capture and organize information</li>
  <li><strong>Google Drive</strong> - Centralized storage and organization</li>
</ul>

<h4>Focus & Attention</h4>
<ul>
  <li><strong>Freedom</strong> - Website and app blocker</li>
  <li><strong>Cold Turkey</strong> - Distraction blocker</li>
  <li><strong>Brain.fm</strong> - Focus music designed for concentration</li>
</ul>

<h4>Sensory Support</h4>
<ul>
  <li><strong>Headspace</strong> - Meditation and mindfulness</li>
  <li><strong>Spotify</strong> - Music for focus and calming</li>
  <li><strong>Calm</strong> - Relaxation and sleep support</li>
</ul>

<h3>How to Choose Tools</h3>
<p>The best tool is one you'll actually use. Try free trials, start with one tool, and build your toolkit gradually. What works for someone else might not work for you—and that's perfectly fine.</p>`,
  cta: {
    heading: 'Explore All Tools',
    description: 'Browse our curated collection of neurodivergent-friendly resources.',
    primaryButton: { text: 'View Tools', href: '/resources' },
    secondaryButton: { text: 'Get Coaching', href: '/booking' },
  },
};

export const neurodivergencePost: BlogPostConfig = {
  slug: 'what-does-it-mean-to-be-neurodivergent-a-description-not-a-diagnosis',
  title: 'What Does It Mean To Be Neurodivergent? A Description, Not A Diagnosis',
  excerpt:
    'Understand what neurodivergence means and whether this framework fits your experience.',
  author: 'Life Skills Advocate',
  publishedDate: 'August 12, 2024',
  readTime: '11 min',
  category: 'Identity',
  content: `<h2>Neurodivergent: A Framework for Understanding</h2>
<p>You might hear the term "neurodivergent" and wonder: What does it mean? Is it a diagnosis? Is it for me?</p>

<p>The word "neurodivergent" refers to natural variations in how our brains work. It's not a diagnosis—it's a description.</p>

<h3>What Neurodivergence Is</h3>
<p>Neurodivergence describes individuals whose neurological differences are recognized as natural variations rather than deficits. Common neurodivergent profiles include:</p>
<ul>
  <li>ADHD (Attention-Deficit/Hyperactivity Disorder)</li>
  <li>Autism Spectrum Disorder</li>
  <li>Dyslexia</li>
  <li>Dyscalculia</li>
  <li>Dysgraphia</li>
  <li>Dyspraxia</li>
  <li>Sensory Processing Differences</li>
</ul>

<h3>What Neurodivergence Is NOT</h3>
<ul>
  <li>A diagnosis by itself—it's a framework</li>
  <li>A deficit or disorder—it's a difference</li>
  <li>Something to be ashamed of—it's a natural brain variation</li>
  <li>A one-size-fits-all identity—neurodivergence looks different for everyone</li>
</ul>

<h3>Neurodivergent Strengths</h3>
<p>Neurodivergent individuals often have remarkable strengths:</p>
<ul>
  <li><strong>ADHD:</strong> Creativity, spontaneity, hyperfocus, resilience</li>
  <li><strong>Autism:</strong> Attention to detail, deep focus, pattern recognition, loyalty</li>
  <li><strong>Dyslexia:</strong> Visual-spatial skills, big-picture thinking, creativity</li>
</ul>

<h3>Challenges Are Real</h3>
<p>Recognizing strengths doesn't mean ignoring challenges. Many neurodivergent people struggle with:</p>
<ul>
  <li>Executive functioning (organizing, planning, time management)</li>
  <li>Social communication</li>
  <li>Sensory sensitivities</li>
  <li>Emotional regulation</li>
  <li>Academic or work performance in areas that don't match their strengths</li>
</ul>

<h3>Is Neurodivergent for Me?</h3>
<p>The neurodivergent framework resonates with people who:</p>
<ul>
  <li>Have received a diagnosis (ADHD, autism, dyslexia, etc.)</li>
  <li>Suspect they're neurodivergent but haven't been formally diagnosed</li>
  <li>Want a strengths-based framework for understanding themselves</li>
  <li>Feel like they think or work differently than the majority</li>
  <li>Want to move away from shame-based, deficit-focused thinking</li>
</ul>

<h3>The Neurodivergent Approach</h3>
<p>Embracing neurodivergence means:</p>
<ul>
  <li>Celebrating your natural strengths</li>
  <li>Working WITH your brain, not against it</li>
  <li>Developing strategies that fit how you actually function</li>
  <li>Seeking support and accommodation unapologetically</li>
  <li>Finding your people and community</li>
</ul>

<h3>Moving Forward</h3>
<p>Whether or not you use the label "neurodivergent," what matters is understanding yourself and finding strategies that work. You deserve support that honors how your brain works.</p>`,
  cta: {
    heading: 'Embrace Your Neurodivergence',
    description: 'Get support from coaches who understand and celebrate neurodiversity.',
    primaryButton: { text: 'Start Coaching', href: '/booking' },
    secondaryButton: { text: 'Learn More', href: '/about' },
  },
};

// Export all configurations
export const blogPosts: Record<string, BlogPostConfig> = {
  '100-measurable-executive-functioning-iep-goals-by-skill-area': iepGoalsPost,
  '11-executive-functioning-skills-signs-real-life-examples-and-simple-supports':
    efSkillsPost,
  'discover-the-life-skills-advocate-difference': differencePost,
  'executive-functioning-101-resource-hub': hubPost,
  'free-executive-functioning-assessment-for-teens-adults-professionals': assessmentPost,
  'free-executive-functioning-worksheets-printables': worksheetsPost,
  'neurodivergent-friendly-tools-resources': toolsPost,
  'what-does-it-mean-to-be-neurodivergent-a-description-not-a-diagnosis': neurodivergencePost,
};

export function getBlogPostConfig(slug: string): BlogPostConfig | null {
  return blogPosts[slug] || null;
}

// Get all blog posts for listing
export function getAllBlogPosts(): BlogPostConfig[] {
  return Object.values(blogPosts);
}

// Get previous and next posts for navigation
export function getBlogPostNavigation(slug: string) {
  const posts = Object.values(blogPosts);
  const currentIndex = posts.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) return { previous: null, next: null };

  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
}
