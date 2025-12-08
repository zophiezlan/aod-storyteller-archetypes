/**
 * Educational Content - SHARE & BUILD Training Concepts
 * Content for introducing storytelling principles throughout the quiz experience
 */

export const sharePrinciples = {
  intentional: {
    title: 'Intentional Storytelling',
    description: 'Every story is shared with conscious thought—why this story, why now, why this audience.',
    details: 'Intentional storytelling means being clear about your motivations and ensuring they align with your goals and wellbeing. It\'s about asking yourself: What am I hoping to achieve by sharing this? Is now the right time? Is this the right audience?',
    keyQuestions: [
      'Why am I sharing this story?',
      'Why now?',
      'Why this audience?',
      'What do I hope will happen?',
    ],
  },
  purposeful: {
    title: 'Purposeful Storytelling',
    description: 'Stories serve a clear purpose—to educate, heal, advocate, connect, or inspire.',
    details: 'Purposeful storytelling means your stories are crafted and shared in ways that effectively achieve specific aims. Whether you\'re educating about harm reduction, advocating for policy change, or building community connection, being clear on your purpose makes your storytelling more effective and ethical.',
    keyQuestions: [
      'What is my primary purpose? (educate, heal, advocate, connect, inspire)',
      'How does this story serve that purpose?',
      'What specific outcome am I working toward?',
      'Is this the most effective way to achieve it?',
    ],
  },
  meaningful: {
    title: 'Meaningful Storytelling',
    description: 'Stories resonate and create genuine impact, honoring lived experience and avoiding tokenism.',
    details: 'Meaningful storytelling creates real understanding and change—for the teller, the listener, and the broader community. It moves beyond performance or checkbox exercises to create authentic connection and genuine shifts in perspective. It honors the weight of experiences shared.',
    keyQuestions: [
      'Will this create genuine impact or just fulfill expectations?',
      'Am I honoring the full complexity of experience?',
      'Does this avoid tokenism?',
      'What real change might this create?',
    ],
  },
};

export const purposeCategories = {
  education: {
    name: 'Education',
    description: 'Making complex AOD issues understandable, offering context and real-world insight beyond data.',
    icon: '📚',
    when: 'Use educational storytelling when you want to increase knowledge, correct misunderstandings, or help people grasp harm reduction concepts.',
  },
  inspiration: {
    name: 'Inspiration',
    description: 'Sharing recovery and resilience, providing hope and motivation for individuals and workers alike.',
    icon: '✨',
    when: 'Use inspirational storytelling to demonstrate possibility, show diverse pathways forward, and offer hope without toxic positivity.',
  },
  advocacy: {
    name: 'Advocacy',
    description: 'Challenging misconceptions, humanizing policy debates, and driving change by dismantling stigma.',
    icon: '📣',
    when: 'Use advocacy storytelling to push for systemic change, challenge unjust policies, and shift public discourse.',
  },
  healing: {
    name: 'Healing & Empathy',
    description: 'Supporting wellbeing for storytellers and building understanding, connection, and validation for listeners.',
    icon: '❤️',
    when: 'Use healing storytelling to hold space for pain, celebrate resilience, and model that recovery (however defined) is possible.',
  },
  connection: {
    name: 'Connection',
    description: 'Building bridges between people, fostering belonging, and creating spaces of understanding.',
    icon: '🤝',
    when: 'Use connection storytelling to build community, reveal shared experiences, and help people feel less alone.',
  },
};

export const trafficLightSystem = {
  title: 'The Traffic Light System for Boundaries',
  description: 'A simple framework to help you decide what\'s safe to share in different contexts.',
  introduction: 'Your boundaries will shift depending on your emotional state, the audience, the context, and where you are in processing your experiences. The Traffic Light System helps you check in with yourself before and during storytelling.',

  red: {
    name: 'Red Light - Not Today',
    description: 'Topics, questions, or scenarios that feel unsafe, triggering, or simply not right to share at this time in your journey.',
    icon: '🔴',
    examples: [
      'Experiences still too raw or unprocessed',
      'Details that could harm you legally or socially',
      'Stories that aren\'t yours to tell',
      'Topics that consistently trigger strong distress',
    ],
    guidance: 'It\'s completely okay to say "I\'m not comfortable sharing that" or "That\'s too personal for me right now." Protecting your red zones is essential self-care.',
  },

  yellow: {
    name: 'Yellow Light - Proceed with Caution',
    description: 'Areas you might share depending on context, audience, your emotional state, or with proper preparation and support in place.',
    icon: '🟡',
    examples: [
      'Recent experiences still settling',
      'Topics where context really matters',
      'Stories you need support nearby to share',
      'Details that require careful framing',
    ],
    guidance: 'Yellow doesn\'t mean no—it means check your conditions. Do you have support? Is this the right audience? Are you in a good headspace? Have you prepared adequately?',
  },

  green: {
    name: 'Green Light - Ready to Share',
    description: 'Topics, questions, or scenarios you feel comfortable discussing openly right now without additional preparation or support.',
    icon: '🟢',
    examples: [
      'Well-processed experiences you\'ve gained perspective on',
      'Stories that feel empowering to share',
      'Topics you can discuss calmly and clearly',
      'Experiences that align with your current purpose',
    ],
    guidance: 'Even green lights can shift to yellow or red depending on how you\'re feeling, who\'s listening, or what else is happening in your life. Keep checking in.',
  },

  reminders: [
    'Boundaries aren\'t barriers—they\'re the foundation that makes meaningful, sustainable storytelling possible.',
    'Your boundaries may be different from others\', and that\'s completely okay.',
    'Boundaries can and should shift over time as you process, heal, and grow.',
    'Saying no to sharing something is an act of self-respect, not selfishness.',
    'You never owe anyone your story, no matter who they are or what the context is.',
  ],
};

export const universalExperiencesApproach = {
  title: 'Universal Experiences Over Explicit Details',
  description: 'Connecting through shared emotions rather than specific drug use details.',

  rationale: 'When you focus on universal human experiences—emotions, turning points, lessons learned—rather than explicit details about drug use, you:',
  benefits: [
    'Reduce stigma by highlighting your humanity rather than stereotypes',
    'Protect yourself by maintaining appropriate boundaries',
    'Create connection with people who may not have used drugs but can relate to the feelings',
    'Keep the focus on what matters: your insights, growth, and wisdom',
    'Avoid sensationalizing or triggering your audience unnecessarily',
  ],

  emotionsToEmphasize: [
    'The desire for relief, escape, or connection',
    'Feelings of shame, isolation, or being misunderstood',
    'The tension between wanting change and feeling unable to',
    'Moments of hope, resilience, or determination',
    'The challenge of navigating judgment from others',
    'Pride in overcoming obstacles',
    'Gratitude for support and understanding',
  ],

  turningPoints: [
    'Realizing something needed to change',
    'Receiving compassion when expecting judgment',
    'Finding your people or community',
    'Learning to ask for help',
    'Discovering what works for you',
    'Setting boundaries that protect you',
    'Speaking up when it mattered',
  ],

  avoidExplicitDetails: [
    'Specific drugs, dosages, or methods of use (unless essential to your point)',
    'Graphic descriptions of drug use for shock value',
    'Details about criminal activities beyond necessary context',
    'Sensationalized trauma or "tragedy porn"',
    'Technical information that distracts from your message',
  ],

  focusInstead: [
    'What you were seeking or trying to cope with',
    'How experiences shaped your understanding',
    'What helped versus what harmed',
    'Lessons learned through your journey',
    'Growth, resilience, and wisdom gained',
    'The systems, policies, or attitudes that created barriers',
    'What genuine support looks like',
  ],

  example: {
    explicitVersion: '"I was using ice daily, injecting in my groin because all my other veins collapsed. One night I used way too much and..."',
    universalVersion: '"I was caught in a pattern where I felt like I had no other way to cope. My body was showing the toll, and I knew something had to change. One night was a real turning point..."',
    explanation: 'The universal version maintains the emotional truth and turning point without graphic details that might trigger, alienate, or sensationalize.',
  },
};

export const audienceConsiderations = {
  title: 'Understanding Your Audience',
  description: 'Different audiences need different approaches to storytelling.',

  introduction: 'The same story can land completely differently depending on who\'s listening. Understanding your audience helps you adapt your tone, language, level of detail, and framing to maximize connection and impact.',

  audiences: {
    peers: {
      name: 'Peers with Lived Experience',
      characteristics: [
        'May have shared experiences or parallel journeys',
        'Often value authenticity and honesty',
        'Can handle complexity and contradiction',
        'May be triggered by certain content',
      ],
      approach: {
        tone: 'Informal, conversational, peer-to-peer',
        language: 'Shared language is fine, but avoid assuming universal understanding',
        focus: 'Connection, mutual learning, shared wisdom',
        tips: [
          'Honor diverse experiences—not everyone\'s journey looks like yours',
          'Make space for others\' stories, don\'t dominate',
          'Be real about struggles and successes',
          'Respect boundaries and triggers',
        ],
      },
    },

    providers: {
      name: 'Healthcare Workers & Service Providers',
      characteristics: [
        'May have clinical knowledge but lack lived experience perspective',
        'Often genuinely want to understand and help',
        'May carry unconscious biases or stigma',
        'Focused on practical application to their work',
      ],
      approach: {
        tone: 'Professional but personal, bridging lived experience and clinical practice',
        language: 'Balance accessibility with credibility—translate jargon both ways',
        focus: 'How lived experience informs better practice, what helps vs. what harms',
        tips: [
          'Challenge assumptions gently but firmly',
          'Connect your experience to their practice',
          'Offer concrete examples of what would help',
          'Model the respect and partnership you want to see',
        ],
      },
    },

    policyMakers: {
      name: 'Policy Makers & Politicians',
      characteristics: [
        'Often far removed from ground-level realities',
        'Respond to data, evidence, and political pressure',
        'Have limited time and many competing priorities',
        'May carry strong political or ideological positions',
      ],
      approach: {
        tone: 'Formal, strategic, clear about what you\'re asking for',
        language: 'Professional, evidence-informed, politically aware',
        focus: 'Policy gaps, real-world consequences, clear recommendations',
        tips: [
          'Lead with the problem and solution, not just story',
          'Connect personal narrative to broader evidence',
          'Be specific about what policy changes you\'re advocating for',
          'Anticipate counterarguments and address them',
        ],
      },
    },

    public: {
      name: 'General Public',
      characteristics: [
        'Wide range of knowledge, experience, and attitudes',
        'May carry stigma or misconceptions',
        'Often influenced by media stereotypes',
        'Can be curious and open if approached right',
      ],
      approach: {
        tone: 'Accessible, engaging, invitational',
        language: 'Clear, jargon-free, assume little prior knowledge',
        focus: 'Challenging stigma, building empathy, humanizing the issues',
        tips: [
          'Start where they are, build from there',
          'Use analogy and common ground',
          'Challenge assumptions without attacking',
          'Make harm reduction concrete and relatable',
        ],
      },
    },
  },

  keyQuestions: [
    'Who is my primary audience for this story?',
    'What do they already know or believe?',
    'What matters most to them?',
    'What language and tone will resonate?',
    'What\'s my goal with this specific audience?',
    'How can I adapt while staying authentic?',
  ],
};

export const reflectivePracticeFramework = {
  title: 'Reflective Practice for Sustainable Storytelling',
  description: 'Regular reflection keeps peer work authentic, safe, and effective.',

  why: 'Reflection isn\'t about perfection—it\'s about learning, growth, and care. It helps you balance the power of storytelling with the responsibility of care for yourself and those who listen.',

  beforeSharing: {
    title: 'Before Sharing Your Story',
    questions: [
      'Why am I sharing this story right now?',
      'What do I hope will happen?',
      'Is this the right audience and context?',
      'Where are my boundaries—what\'s green, yellow, and red?',
      'Am I in a good headspace to share this?',
      'Do I have support if strong emotions come up?',
      'Have I processed this enough to share it sustainably?',
      'What might be triggering for me or others?',
    ],
    purpose: 'Preparation and protection—ensuring you\'re set up for a safe, intentional storytelling experience.',
  },

  afterSharing: {
    title: 'After Sharing Your Story',
    questions: [
      'How am I feeling now?',
      'Did I maintain my boundaries?',
      'What impact did my story seem to have?',
      'What worked well?',
      'What would I do differently next time?',
      'Do I need support or self-care right now?',
      'What did I learn from this experience?',
      'Are there any feelings or reactions I need to process?',
    ],
    purpose: 'Integration and learning—processing the experience and taking care of yourself.',
  },

  ongoing: {
    title: 'Ongoing Reflection',
    questions: [
      'How is storytelling work affecting my wellbeing overall?',
      'Am I maintaining healthy boundaries or getting depleted?',
      'What patterns am I noticing in my storytelling?',
      'How can I keep growing and improving?',
      'What support or learning do I need?',
      'Am I staying connected to my "why"?',
      'Is my storytelling still aligned with my values and goals?',
      'How can I make this work sustainable long-term?',
    ],
    purpose: 'Sustainability and growth—building a storytelling practice that nourishes rather than depletes you.',
  },

  reminders: [
    'Reflection doesn\'t have to be formal—it can be journaling, talking with a trusted friend, or just quiet thinking.',
    'Be honest with yourself—this isn\'t about performing reflection, it\'s about real self-awareness.',
    'Notice patterns without judgment—what you learn helps you grow.',
    'Seek support when needed—supervision, peer debrief, or counseling are all valuable.',
    'Celebrate what\'s working, not just what needs improvement.',
  ],
};

export const selfCareStrategies = {
  title: 'Self-Care for Storytellers',
  description: 'Boundaries equal self-care in storytelling—they ensure you can share sustainably.',

  categories: {
    physical: {
      name: 'Physical Self-Care',
      description: 'Taking care of your body supports your capacity to share stories.',
      examples: [
        'Move your body in ways that feel good',
        'Get adequate rest and sleep',
        'Eat nourishing food',
        'Take breaks during intensive storytelling',
        'Notice and respond to physical stress signals',
      ],
    },
    emotional: {
      name: 'Emotional Self-Care',
      description: 'Processing feelings that arise from storytelling work.',
      examples: [
        'Journal privately about your experiences',
        'Allow yourself to feel without judgment',
        'Express emotions through creative outlets',
        'Talk with trusted friends or supports',
        'Notice patterns in what triggers you',
      ],
    },
    professional: {
      name: 'Professional Boundaries',
      description: 'Maintaining healthy limits in your storytelling work.',
      examples: [
        'Set clear boundaries on your time and availability',
        'Balance storytelling with other aspects of your identity',
        'Know when to say no to requests',
        'Protect your personal time',
        'Maintain boundaries between work and personal life',
      ],
    },
    psychological: {
      name: 'Psychological Support',
      description: 'Getting professional support for the emotional weight of this work.',
      examples: [
        'Regular supervision or peer support',
        'Counseling or therapy when needed',
        'Debrief after difficult storytelling experiences',
        'Process vicarious trauma',
        'Build mental health literacy and skills',
      ],
    },
    social: {
      name: 'Social Connection',
      description: 'Building supportive relationships that sustain you.',
      examples: [
        'Connect with other peer workers and storytellers',
        'Build friendships outside of storytelling work',
        'Seek community and belonging',
        'Both give and receive support',
        'Celebrate together, not just struggle together',
      ],
    },
    spiritual: {
      name: 'Spiritual & Cultural',
      description: 'Connecting to practices that give meaning and grounding.',
      examples: [
        'Engage with cultural practices that nourish you',
        'Connect to nature',
        'Practice mindfulness or meditation',
        'Engage with art, music, or creativity',
        'Connect to community and tradition',
      ],
    },
  },

  redFlags: {
    title: 'Warning Signs of Storytelling Burnout',
    signs: [
      'Feeling depleted rather than energized by storytelling',
      'Difficulty maintaining boundaries',
      'Increased emotional reactivity or numbness',
      'Avoiding storytelling opportunities or feeling resentful of them',
      'Physical symptoms like fatigue, headaches, or sleep issues',
      'Cynicism or loss of hope',
      'Feeling like you\'re performing rather than authentically sharing',
      'Isolating from support or community',
    ],
    action: 'If you\'re experiencing these signs, it\'s time to step back, reassess, and prioritize your wellbeing. Talk to a supervisor, peer, or counselor. Your wellbeing matters as much as the stories you share.',
  },
};

export default {
  sharePrinciples,
  purposeCategories,
  trafficLightSystem,
  universalExperiencesApproach,
  audienceConsiderations,
  reflectivePracticeFramework,
  selfCareStrategies,
};
