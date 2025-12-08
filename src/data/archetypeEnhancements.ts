/**
 * Archetype Enhancements - Extended data for each storytelling archetype
 * Based on NUAA's SHARE & BUILD Peer Work Foundations Training
 */

export interface ArchetypeEnhancement {
  key: string;
  name: string;

  // SHARE Principles alignment
  sharePrinciples: {
    intentional: string;
    purposeful: string;
    meaningful: string;
  };

  // Storytelling purpose mapping
  primaryPurpose: 'education' | 'inspiration' | 'advocacy' | 'healing' | 'connection';
  secondaryPurpose?: 'education' | 'inspiration' | 'advocacy' | 'healing' | 'connection';

  // Boundaries & Self-Care
  boundaries: {
    strengths: string[];
    watchFor: string[];
    trafficLightGuidance: {
      red: string[];
      yellow: string[];
      green: string[];
    };
    selfCareTips: string[];
  };

  // Audience Awareness
  audiences: {
    bestFit: string[];
    adaptationTips: {
      peers: string;
      providers: string;
      policyMakers: string;
      public: string;
    };
  };

  // Universal Experiences approach
  universalExperiences: {
    emotionsToEmphasize: string[];
    turningPoints: string[];
    avoidExplicitDetails: string[];
    focusInstead: string[];
  };

  // Story Crafting Framework (from SHARE training)
  storyCrafting: {
    lifeEvents: string[];
    themes: string[];
    emotionsAndFeelings: string[];
    skillsAndLessons: string[];
    relevantContexts: string[];
  };

  // Reflective Practice
  reflectivePractice: {
    beforeSharing: string[];
    afterSharing: string[];
    ongoing: string[];
  };
}

export const archetypeEnhancements: Record<string, ArchetypeEnhancement> = {
  advocate: {
    key: 'advocate',
    name: 'The Advocate',

    sharePrinciples: {
      intentional: 'You share stories strategically to drive specific policy changes and challenge systemic injustice. Your "why" is rooted in making structures fairer for everyone affected by drug laws.',
      purposeful: 'Your primary purpose is advocacy—using personal narratives to influence decision-makers, shift public opinion, and dismantle harmful policies. Every story serves the bigger campaign.',
      meaningful: 'You create impact by connecting individual experiences to systemic issues, showing policymakers the real-world consequences of their decisions and inspiring collective action.',
    },

    primaryPurpose: 'advocacy',
    secondaryPurpose: 'inspiration',

    boundaries: {
      strengths: [
        'Clear about why you\'re sharing and what you want to achieve',
        'Strategic in choosing what to disclose for maximum impact',
        'Strong sense of purpose helps maintain boundaries',
      ],
      watchFor: [
        'Over-sharing in heated advocacy moments',
        'Burnout from constant exposure to injustice',
        'Pressure to share more than feels safe to "prove" your point',
        'Vicarious trauma from hearing others\' difficult stories',
      ],
      trafficLightGuidance: {
        red: [
          'Details that could be used against you legally',
          'Stories that feel like ammunition rather than advocacy',
          'Experiences still too raw for public consumption',
        ],
        yellow: [
          'Recent experiences that still feel tender',
          'Stories involving others without their consent',
          'Topics that might trigger strong emotional responses mid-presentation',
        ],
        green: [
          'Well-processed experiences you can discuss calmly',
          'Stories that effectively illustrate policy failures',
          'Examples that humanize statistics without sensationalism',
        ],
      },
      selfCareTips: [
        'Schedule breaks between advocacy events to process emotions',
        'Build a debrief routine with trusted peers after intense campaigns',
        'Remember: You don\'t have to prove you\'re "damaged enough" to deserve rights',
        'Track your energy—advocacy is a marathon, not a sprint',
        'Connect with other advocates to share the load',
      ],
    },

    audiences: {
      bestFit: [
        'Policy makers and politicians',
        'Media and journalists',
        'Professional conferences',
        'Community organizing groups',
      ],
      adaptationTips: {
        peers: 'Share the strategy behind your advocacy—help others understand how to use their stories for change while staying safe.',
        providers: 'Highlight service gaps and barriers from lived experience perspective, offering concrete policy solutions.',
        policyMakers: 'Lead with data, follow with human impact. Be clear about what you\'re asking for and why current policy fails.',
        public: 'Frame stories to challenge common assumptions while staying relatable. Focus on rights and dignity, not pity.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Frustration with unjust treatment',
        'Determination to create change',
        'Hope for a fairer future',
        'Dignity in the face of discrimination',
      ],
      turningPoints: [
        'Recognizing a pattern of systemic injustice',
        'Deciding to speak out despite risks',
        'Finding community in collective action',
        'Witnessing policy change create real impact',
      ],
      avoidExplicitDetails: [
        'Specific drugs or dosages (unless relevant to policy point)',
        'Criminal activities beyond what\'s necessary for context',
        'Graphic descriptions of suffering for shock value',
      ],
      focusInstead: [
        'How policies create barriers or harm',
        'The dignity and rights everyone deserves',
        'Practical changes that would make a difference',
        'The resilience and resistance of affected communities',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Experiences of discrimination or criminalization',
        'Barriers to accessing healthcare or support',
        'Witnessing harm from punitive drug policies',
        'Moments of solidarity in collective advocacy',
      ],
      themes: [
        'Justice vs. criminalization',
        'Rights and dignity',
        'Systemic change',
        'Collective resistance',
      ],
      emotionsAndFeelings: [
        'Righteous anger at injustice',
        'Determination',
        'Solidarity',
        'Empowerment through action',
      ],
      skillsAndLessons: [
        'Understanding how policy impacts real lives',
        'Strategic communication for change',
        'Building coalitions',
        'Turning personal pain into collective power',
      ],
      relevantContexts: [
        'Policy consultations',
        'Media interviews',
        'Parliamentary inquiries',
        'Community campaigns',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'What specific change do I want this story to create?',
        'Am I in a good headspace to handle challenging questions?',
        'Have I protected identities of others in my story?',
        'Do I have support lined up after this event?',
      ],
      afterSharing: [
        'Did I achieve my advocacy goals?',
        'How did I handle difficult moments or pushback?',
        'Do I need to debrief or process any emotions that came up?',
        'What would I do differently next time?',
      ],
      ongoing: [
        'How can I balance advocacy with self-care?',
        'Am I building sustainable practices or heading for burnout?',
        'What new skills or knowledge would strengthen my advocacy?',
        'How can I amplify others\' voices alongside my own?',
      ],
    },
  },

  educator: {
    key: 'educator',
    name: 'The Educator',

    sharePrinciples: {
      intentional: 'You share stories deliberately to correct misinformation and build understanding. Your "why" is helping people grasp complex AOD concepts through accessible, relatable narratives.',
      purposeful: 'Your primary purpose is education—transforming abstract harm reduction principles into concrete, understandable examples that clarify rather than confuse.',
      meaningful: 'You create impact by bridging knowledge gaps, making the complex simple, and building genuine understanding that outlasts the initial learning moment.',
    },

    primaryPurpose: 'education',
    secondaryPurpose: 'connection',

    boundaries: {
      strengths: [
        'Clear about what information serves learning vs. what\'s unnecessary detail',
        'Good at contextualizing personal experiences within broader concepts',
        'Comfortable setting limits on questions that don\'t serve educational goals',
      ],
      watchFor: [
        'Becoming a "walking textbook" and losing personal boundaries',
        'Pressure to have all the answers',
        'Exhaustion from constant emotional labor of education',
        'Feeling responsible for fixing everyone\'s misconceptions',
      ],
      trafficLightGuidance: {
        red: [
          'Personal details that don\'t serve the learning objective',
          'Experiences you haven\'t fully processed yourself',
          'Topics that trigger you or cause distress',
        ],
        yellow: [
          'Recent experiences that need more distance',
          'Stories that might derail the learning focus',
          'Questions that feel invasive rather than curious',
        ],
        green: [
          'Well-understood experiences that illustrate key concepts',
          'Examples that clarify common misunderstandings',
          'Stories that connect lived experience to evidence',
        ],
      },
      selfCareTips: [
        'Remember: You\'re not responsible for everyone\'s learning',
        'Set boundaries on "teaching moments"—you\'re allowed to just exist',
        'Build a resource list to share instead of always explaining in person',
        'Celebrate small wins in shifting understanding',
        'Connect with other educators to share strategies and support',
      ],
    },

    audiences: {
      bestFit: [
        'Students and trainees',
        'Healthcare workers seeking to understand',
        'Community groups new to harm reduction',
        'Workshops and training sessions',
      ],
      adaptationTips: {
        peers: 'Share the educational frameworks you use, help peers articulate their own knowledge in accessible ways.',
        providers: 'Connect clinical knowledge to lived experience, showing how theory meets reality in people\'s lives.',
        policyMakers: 'Translate complex evidence into clear implications, using stories to illustrate research findings.',
        public: 'Start with what they know, build from there. Use analogies and familiar concepts to introduce harm reduction.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'The "aha moment" of understanding something new',
        'Relief when someone finally gets it',
        'Patience in explaining complex topics',
        'Curiosity and openness to learning',
      ],
      turningPoints: [
        'First time someone truly understood your explanation',
        'Realizing you could help others learn from your experiences',
        'Discovering frameworks that helped you make sense of your own journey',
        'Witnessing changed attitudes from better understanding',
      ],
      avoidExplicitDetails: [
        'Graphic descriptions that sensationalize rather than educate',
        'Technical drug knowledge that distracts from the learning point',
        'Personal trauma that overwhelms the educational message',
      ],
      focusInstead: [
        'The learning journey and "aha moments"',
        'How understanding grows over time',
        'The difference knowledge makes in real lives',
        'Connections between concepts and experiences',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Learning harm reduction principles yourself',
        'Misconceptions you once held and how they changed',
        'Times when education made a real difference',
        'Teaching moments that stuck with you',
      ],
      themes: [
        'Knowledge as empowerment',
        'Learning and growth',
        'Evidence meeting experience',
        'Clarity from confusion',
      ],
      emotionsAndFeelings: [
        'Satisfaction of making concepts clear',
        'Patience with learning processes',
        'Excitement about sharing knowledge',
        'Compassion for people\'s misunderstandings',
      ],
      skillsAndLessons: [
        'Breaking down complex ideas',
        'Meeting people where they\'re at',
        'Connecting theory to practice',
        'Building on existing knowledge',
      ],
      relevantContexts: [
        'Training workshops',
        'Educational presentations',
        'Peer education sessions',
        'Community learning events',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'What\'s the key learning I want people to take away?',
        'Have I pitched this at the right level for this audience?',
        'Am I clear on where my boundaries are with this topic?',
        'Do I have examples that illuminate without overwhelming?',
      ],
      afterSharing: [
        'Did people seem to understand the key concepts?',
        'What questions came up that I wasn\'t expecting?',
        'How well did I maintain my boundaries while teaching?',
        'What could make this clearer next time?',
      ],
      ongoing: [
        'How can I keep learning alongside teaching?',
        'Am I staying current with evidence and best practices?',
        'What new educational approaches could I explore?',
        'How do I balance being a teacher with having boundaries?',
      ],
    },
  },

  connector: {
    key: 'connector',
    name: 'The Connector',

    sharePrinciples: {
      intentional: 'You share stories to build bridges between people and foster belonging. Your "why" is creating spaces where everyone feels less alone and more understood.',
      purposeful: 'Your primary purpose is connection—using narratives to reveal common ground, build community, and help people see their shared humanity across differences.',
      meaningful: 'You create impact by weaving relationships, showing how individual stories thread together into collective strength, and building trust through authentic sharing.',
    },

    primaryPurpose: 'connection',
    secondaryPurpose: 'healing',

    boundaries: {
      strengths: [
        'Attuned to when sharing creates connection vs. when it\'s too much',
        'Good at reading the room and adapting your sharing',
        'Natural at making people feel comfortable and seen',
      ],
      watchFor: [
        'Over-extending yourself to make everyone feel included',
        'Absorbing others\' emotions and losing track of your own',
        'Saying yes to sharing when you need to say no',
        'Feeling responsible for everyone\'s sense of belonging',
      ],
      trafficLightGuidance: {
        red: [
          'Details that might make others uncomfortable rather than connected',
          'Experiences that feel too vulnerable for the current setting',
          'Stories that aren\'t yours to share',
        ],
        yellow: [
          'Personal details in new group settings',
          'Experiences that still feel tender',
          'Topics where you\'re not sure of the group\'s readiness',
        ],
        green: [
          'Relatable moments that create "me too" feelings',
          'Stories that normalize diverse experiences',
          'Examples that show common struggles and strengths',
        ],
      ],
      selfCareTips: [
        'Remember: You can\'t pour from an empty cup—your connection matters too',
        'Build time for solo processing, not just group connection',
        'Practice saying "I\'m not in a space to share right now"',
        'Notice when you\'re connecting vs. caretaking',
        'Celebrate community wins, don\'t carry all the weight',
      ],
    },

    audiences: {
      bestFit: [
        'Peer support groups',
        'Community gatherings',
        'Team building sessions',
        'Facilitated sharing circles',
      ],
      adaptationTips: {
        peers: 'Create space for everyone\'s voices, use your stories to invite others in rather than dominate the conversation.',
        providers: 'Help them see the whole person, not just the "client"—use stories to build empathy and understanding.',
        policyMakers: 'Emphasize community perspectives and collective experiences, not just individual stories.',
        public: 'Find common ground through universal emotions and experiences, building bridges across perceived differences.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Longing for belonging and acceptance',
        'Relief of being understood',
        'Warmth of genuine connection',
        'Strength found in community',
      ],
      turningPoints: [
        'First time you felt truly seen and accepted',
        'Realizing you weren\'t alone in your struggles',
        'Finding your people or community',
        'Creating connection when it was needed most',
      ],
      avoidExplicitDetails: [
        'Trauma specifics that might alienate or trigger',
        'Drug use details that distract from connection themes',
        'Personal information that others might find invasive',
      ],
      focusInstead: [
        'The feeling of isolation vs. the relief of connection',
        'How belonging transforms experience',
        'The power of being seen and accepted',
        'Building trust across differences',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Finding community after isolation',
        'Moments of deep understanding with another person',
        'Times when sharing created unexpected bonds',
        'Building bridges across divides',
      ],
      themes: [
        'Belonging and acceptance',
        'Shared humanity',
        'Building community',
        'Trust and connection',
      ],
      emotionsAndFeelings: [
        'Warmth of genuine connection',
        'Relief of being understood',
        'Joy in bringing people together',
        'Compassion for others\' journeys',
      ],
      skillsAndLessons: [
        'Creating safe spaces for sharing',
        'Listening deeply',
        'Finding common ground',
        'Building and nurturing relationships',
      ],
      relevantContexts: [
        'Support groups',
        'Community events',
        'Peer connection spaces',
        'Facilitated circles',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Is this the right space for this level of sharing?',
        'Am I centered enough to share without needing something back?',
        'Will this create connection or create discomfort?',
        'Do I have support for myself after facilitating connection?',
      ],
      afterSharing: [
        'Did the sharing create genuine connection?',
        'How am I feeling now—energized or depleted?',
        'Did I maintain my own boundaries while holding space?',
        'What worked well in building trust and rapport?',
      ],
      ongoing: [
        'Am I balancing connection work with personal boundaries?',
        'How can I sustain this work without burnout?',
        'What fills my own cup when I\'m facilitating for others?',
        'How can I model healthy boundaries while staying connected?',
      ],
    },
  },

  // Continue with remaining archetypes following the same comprehensive structure...
  // Due to length, I'll create a few more key ones, but this shows the pattern

  explorer: {
    key: 'explorer',
    name: 'The Explorer',

    sharePrinciples: {
      intentional: 'You share stories of discovery and personal journey to normalize growth, change, and self-reflection. Your "why" is showing that transformation is ongoing, not linear.',
      purposeful: 'Your primary purpose is inspiration—demonstrating that it\'s okay to not have all the answers, to keep learning, and to share the messy process of self-discovery.',
      meaningful: 'You create impact by modeling vulnerability and authenticity, helping others feel permission to explore their own experiences without judgment.',
    },

    primaryPurpose: 'inspiration',
    secondaryPurpose: 'healing',

    boundaries: {
      strengths: [
        'Comfortable with uncertainty and works-in-progress',
        'Willing to share vulnerably while maintaining core boundaries',
        'Good at framing sharing as exploration, not confession',
      ],
      watchFor: [
        'Over-sharing in moments of emotional vulnerability',
        'Processing in public when you need private reflection',
        'Feeling pressure to have "realized" something before you\'re ready',
        'Confusing openness with lack of boundaries',
      ],
      trafficLightGuidance: {
        red: [
          'Experiences you\'re still actively processing',
          'Stories that feel more like therapy than sharing',
          'Details that feel exposing rather than exploratory',
        ],
        yellow: [
          'Recent realizations still settling',
          'Vulnerable moments without adequate support nearby',
          'Topics that might trigger unexpected emotional responses',
        ],
        green: [
          'Growth journeys you\'ve gained perspective on',
          'Lessons learned through trial and error',
          'Questions you\'re comfortable exploring publicly',
        ],
      ],
      selfCareTips: [
        'Journal privately before sharing publicly',
        'Build a trusted processing circle for raw reflections',
        'Remember: Not every insight needs an audience',
        'Check in with yourself—am I sharing or seeking validation?',
        'Honor your own timeline for processing and sharing',
      ],
    },

    audiences: {
      bestFit: [
        'Personal growth workshops',
        'Peer reflection groups',
        'Storytelling events',
        'Recovery and wellness spaces',
      ],
      adaptationTips: {
        peers: 'Share your process, not just outcomes. Help others see that growth isn\'t linear and that\'s okay.',
        providers: 'Demonstrate how change happens over time, challenge expectations of quick fixes or perfect recovery.',
        policyMakers: 'Illustrate why flexible, person-centered approaches work better than rigid programs.',
        public: 'Normalize imperfection and ongoing growth, challenge "before/after" narratives about drug use.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Curiosity about yourself and your experiences',
        'Uncertainty and not having all the answers',
        'Growth through trial and error',
        'Self-compassion in the learning process',
      ],
      turningPoints: [
        'Realizing something about yourself you hadn\'t seen before',
        'Choosing to try something new despite fear',
        'Learning from a mistake without shame',
        'Finding meaning in difficult experiences',
      ],
      avoidExplicitDetails: [
        'Graphic descriptions of drug use',
        'Unprocessed trauma shared for shock value',
        'Details that sensationalize rather than illuminate',
      ],
      focusInstead: [
        'The internal journey of self-discovery',
        'Questions you\'re learning to sit with',
        'How perspective shifts over time',
        'What you\'re learning about yourself',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Moments of self-discovery',
        'Trying new approaches to challenges',
        'Learning from unexpected experiences',
        'Times of questioning and reflection',
      ],
      themes: [
        'Self-discovery and growth',
        'Vulnerability and authenticity',
        'Learning through experience',
        'Non-linear journeys',
      ],
      emotionsAndFeelings: [
        'Curiosity about self and experience',
        'Openness to change',
        'Uncertainty without fear',
        'Self-compassion',
      ],
      skillsAndLessons: [
        'Staying curious rather than judgmental',
        'Sitting with not-knowing',
        'Seeing experience as teacher',
        'Being gentle with yourself',
      ],
      relevantContexts: [
        'Personal storytelling events',
        'Peer support groups',
        'Workshops on lived experience',
        'Reflective practice sessions',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Have I processed this enough to share it publicly?',
        'Am I looking for insight or validation?',
        'Is this the right audience for this level of vulnerability?',
        'Do I have support if this brings up emotions?',
      ],
      afterSharing: [
        'How do I feel now that I\'ve shared this?',
        'Did sharing help clarify my understanding or confuse it?',
        'Was I authentic or performing vulnerability?',
        'What do I need to process further privately?',
      ],
      ongoing: [
        'Am I honoring my process or performing for others?',
        'How can I stay grounded while being open?',
        'What boundaries help me explore safely?',
        'Who are my trusted mirrors for deeper reflection?',
      ],
    },
  },

  healer: {
    key: 'healer',
    name: 'The Healer',

    sharePrinciples: {
      intentional: 'You share stories to offer hope, model resilience, and create space for others\' healing. Your "why" is believing that witnessing and being witnessed is transformative.',
      purposeful: 'Your primary purpose is healing and empathy—using stories to hold space for pain, celebrate resilience, and show that recovery (however defined) is possible.',
      meaningful: 'You create impact by modeling hope without toxic positivity, honoring struggle while showing paths forward, and building connections that support healing.',
    },

    primaryPurpose: 'healing',
    secondaryPurpose: 'connection',

    boundaries: {
      strengths: [
        'Attuned to emotional safety—yours and others\'',
        'Comfortable holding space without fixing',
        'Good at sharing hope without minimizing pain',
      ],
      watchFor: [
        'Taking on others\' healing as your responsibility',
        'Vicarious trauma from absorbing others\' pain',
        'Feeling pressure to always be "the strong one"',
        'Giving more support than you\'re receiving',
      ],
      trafficLightGuidance: {
        red: [
          'Experiences still too tender to hold gently',
          'Stories that might trigger your own unhealed wounds',
          'Details about others\' healing without consent',
        ],
        yellow: [
          'Recent struggles still in process',
          'Topics that might overwhelm rather than support',
          'Sharing when you\'re not in a resourced state yourself',
        ],
        green: [
          'Experiences of resilience you\'ve integrated',
          'Hope stories that feel grounded, not performative',
          'Examples of healing that honor the difficulty',
        ],
      ],
      selfCareTips: [
        'Remember: You can\'t pour from an empty cup—your healing matters too',
        'Build regular supervision or debrief practices',
        'Notice signs of compassion fatigue',
        'Practice receiving support, not just giving it',
        'Set limits on how much pain you witness in a day/week',
      ],
    },

    audiences: {
      bestFit: [
        'Support groups and recovery spaces',
        'Healthcare and counseling settings',
        'Peer support programs',
        'Wellness and healing events',
      ],
      adaptationTips: {
        peers: 'Share hope without hierarchy—your healing path isn\'t the only valid one. Honor diverse recovery journeys.',
        providers: 'Help them see healing as multifaceted, not just abstinence. Model person-centered, compassionate care.',
        policyMakers: 'Emphasize support and care over punishment, show how compassionate systems enable healing.',
        public: 'Challenge stigma by showing the humanity in struggle and strength in recovery, however that looks.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Hope amid struggle',
        'Resilience through difficulty',
        'Compassion for self and others',
        'Strength found in vulnerability',
      ],
      turningPoints: [
        'Receiving compassion when you expected judgment',
        'Realizing you were stronger than you knew',
        'Finding hope in dark moments',
        'Witnessing or experiencing healing',
      ],
      avoidExplicitDetails: [
        'Graphic descriptions of trauma',
        'Oversimplified "I was broken, now I\'m fixed" narratives',
        'Details that might retraumatize listeners',
      ],
      focusInstead: [
        'The journey toward healing (ongoing, not finished)',
        'What helped vs. what harmed',
        'The role of connection and support',
        'Resilience and strength, not just suffering',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Receiving care that made a difference',
        'Finding resilience in difficult times',
        'Moments of compassion—given or received',
        'Small wins on healing journeys',
      ],
      themes: [
        'Hope and resilience',
        'Compassion and care',
        'Healing as journey, not destination',
        'Support systems that work',
      ],
      emotionsAndFeelings: [
        'Hope in darkness',
        'Gratitude for support',
        'Compassion for self',
        'Strength through vulnerability',
      ],
      skillsAndLessons: [
        'Accepting help',
        'Finding resilience',
        'Practicing self-compassion',
        'Supporting others without fixing',
      ],
      relevantContexts: [
        'Recovery spaces',
        'Peer support groups',
        'Healthcare settings',
        'Wellness programs',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Am I in a good place to offer hope without bypassing pain?',
        'Is this the right setting for this level of emotional content?',
        'Do I have what I need to stay grounded if others\' stories affect me?',
        'Am I sharing to support others or to prove something?',
      ],
      afterSharing: [
        'How am I feeling—energized or depleted?',
        'Did I maintain healthy boundaries while holding space?',
        'Do I need to process anything that came up?',
        'What worked well in offering hope without minimizing struggle?',
      ],
      ongoing: [
        'Am I getting the support I need while supporting others?',
        'How can I prevent compassion fatigue?',
        'What fills my own cup?',
        'Am I honoring my own healing journey, not just facilitating others\'?',
      ],
    },
  },

  creator: {
    key: 'creator',
    name: 'The Creator',

    sharePrinciples: {
      intentional: 'You share stories through creative mediums to disrupt assumptions and offer fresh perspectives. Your "why" is showing that art can shift consciousness and challenge stereotypes.',
      purposeful: 'Your primary purpose is inspiration through innovation—using creative expression to help people see drug use, harm reduction, and recovery in entirely new ways.',
      meaningful: 'You create impact by making the familiar strange, offering audiences an entry point through beauty, metaphor, or surprise that bypasses their defenses.',
    },

    primaryPurpose: 'inspiration',
    secondaryPurpose: 'advocacy',

    boundaries: {
      strengths: [
        'Art creates natural distance—you can explore without over-exposing',
        'Creative process itself can be therapeutic and boundary-protecting',
        'Metaphor and symbolism allow sharing without explicit details',
      ],
      watchFor: [
        'Art becoming performative rather than authentic',
        'Pressure to create trauma porn or exploit pain for impact',
        'Burning out trying to constantly innovate or impress',
        'Confusing artistic vulnerability with lack of boundaries',
      ],
      trafficLightGuidance: {
        red: [
          'Creating art about experiences still too raw or unprocessed',
          'Work that feels exploitative of yourself or others',
          'Projects where the creative process itself is harmful',
        ],
        yellow: [
          'Pushing creative boundaries when you\'re not in a stable place',
          'Work that might be misunderstood without context',
          'Projects that require you to revisit difficult memories repeatedly',
        ],
        green: [
          'Art that transforms pain into something meaningful',
          'Creative work that feels authentic and grounded',
          'Projects that energize rather than deplete you',
        ],
      },
      selfCareTips: [
        'Build in processing time after creating difficult pieces',
        'Have a trusted creative circle for feedback before going public',
        'Remember: Not everything you create needs to be shared',
        'Protect your creative process—it\'s for you first, audiences second',
        'Balance difficult work with joyful, playful creation',
      ],
    },

    audiences: {
      bestFit: [
        'Arts and cultural events',
        'Community exhibitions',
        'Alternative harm reduction spaces',
        'Youth and creative communities',
      ],
      adaptationTips: {
        peers: 'Share your creative process, inspire others to find their own artistic voice. Show that creativity is for everyone.',
        providers: 'Use art to humanize and challenge their clinical perspectives, create empathy through beauty and metaphor.',
        policyMakers: 'Creative work can bypass political defenses, create emotional connections that statistics can\'t.',
        public: 'Art reaches people who might not engage with traditional harm reduction messaging. Make it accessible and engaging.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'The transformative power of creative expression',
        'Finding beauty in unexpected places',
        'Freedom in artistic exploration',
        'Connection through shared creativity',
      ],
      turningPoints: [
        'Discovering art as a way to process experience',
        'Creating something that surprises even yourself',
        'Reaching someone through your work in an unexpected way',
        'Finding your creative voice and claiming it',
      ],
      avoidExplicitDetails: [
        'Graphic drug use imagery for shock value',
        'Exploitative representations of suffering',
        'Details that sensationalize rather than illuminate',
      ],
      focusInstead: [
        'The emotional truth behind experiences',
        'Metaphor and symbolism that invite reflection',
        'Beauty, humor, or surprise as entry points',
        'The creative process itself as healing',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Discovering creative expression as outlet',
        'Creating work that challenged assumptions',
        'Connecting with others through art',
        'Transforming pain into something meaningful',
      ],
      themes: [
        'Creativity as resistance',
        'Art as healing practice',
        'Innovation and experimentation',
        'Finding voice through expression',
      ],
      emotionsAndFeelings: [
        'Liberation through creativity',
        'Joy in making',
        'Surprise at your own creation',
        'Connection through shared artistry',
      ],
      skillsAndLessons: [
        'Using art to process complex emotions',
        'Finding creative courage',
        'Making the invisible visible',
        'Trusting your artistic instincts',
      ],
      relevantContexts: [
        'Art exhibitions and shows',
        'Creative workshops',
        'Community arts programs',
        'Performance spaces',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Does this work feel authentic or am I performing?',
        'Have I created appropriate distance through the art form?',
        'Am I ready for diverse interpretations of my work?',
        'Do I have support for any reactions this might provoke?',
      ],
      afterSharing: [
        'How do I feel about how my work was received?',
        'Can I hold space for misinterpretation without defensiveness?',
        'What did I learn through the creative process?',
        'Do I need to process anything that arose?',
      ],
      ongoing: [
        'Is my creativity serving me or am I serving it?',
        'How can I keep my artistic practice joyful and sustainable?',
        'What boundaries protect my creative energy?',
        'Who are my trusted artistic mentors and mirrors?',
      ],
    },
  },

  witness: {
    key: 'witness',
    name: 'The Witness',

    sharePrinciples: {
      intentional: 'You share stories to reveal unvarnished truth about drug use and harm reduction realities. Your "why" is bringing hidden experiences into the light without judgment.',
      purposeful: 'Your primary purpose is education through honest observation—showing what\'s really happening, not what people want to hear or assume.',
      meaningful: 'You create impact by offering clear-eyed testimony that cuts through myths and stereotypes, building understanding through unfiltered truth.',
    },

    primaryPurpose: 'education',
    secondaryPurpose: 'advocacy',

    boundaries: {
      strengths: [
        'Comfortable with discomfort—can speak difficult truths',
        'Clear distinction between observing and over-identifying',
        'Good at factual, grounded sharing without emotional overwhelm',
      ],
      watchFor: [
        'Becoming desensitized to difficult realities',
        'Sharing trauma without adequate self-protection',
        'Secondary trauma from constantly witnessing others\' pain',
        'Pressure to be the "voice" for entire communities',
      ],
      trafficLightGuidance: {
        red: [
          'Testimonies that retraumatize you in the telling',
          'Stories that betray confidences or identities',
          'Observations you haven\'t had time to process',
        ],
        yellow: [
          'Recent events still unfolding',
          'Situations where your testimony might cause harm',
          'Topics where you\'re still finding your objectivity',
        ],
        green: [
          'Well-observed realities you can discuss calmly',
          'Truths that need telling and you\'re positioned to share',
          'Honest accounts that educate without sensationalizing',
        ],
      },
      selfCareTips: [
        'Build regular decompression practices after witnessing difficult situations',
        'Create clear boundaries between observer and participant roles',
        'Seek supervision or peer support for processing what you witness',
        'Remember: You can bear witness without carrying all the weight',
        'Balance heavy witnessing with joy and lightness in other areas',
      ],
    },

    audiences: {
      bestFit: [
        'Documentary and journalism projects',
        'Research and academic settings',
        'Professional conferences',
        'Policy consultations',
      ],
      adaptationTips: {
        peers: 'Honor their experiences while adding your observations. Create space for multiple truths to coexist.',
        providers: 'Bridge the gap between their clinical view and on-the-ground realities. Speak truth that improves practice.',
        policyMakers: 'Provide unvarnished testimony that grounds abstract policy in real lives and consequences.',
        public: 'Challenge assumptions with clear observation, helping them see beyond media stereotypes.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Clear-sighted observation without judgment',
        'Commitment to truth-telling',
        'Steady presence amid difficulty',
        'Integrity in bearing witness',
      ],
      turningPoints: [
        'Realizing your observations could help others understand',
        'Choosing to speak truth despite discomfort',
        'Being believed and validated as a witness',
        'Seeing your testimony create real change',
      ],
      avoidExplicitDetails: [
        'Graphic details that sensationalize rather than inform',
        'Identifying information that breaks confidentiality',
        'Voyeuristic descriptions that exploit suffering',
      ],
      focusInstead: [
        'Patterns and systemic issues you\'ve observed',
        'The gap between public perception and reality',
        'What honest observation reveals about policy needs',
        'Truth-telling as ethical practice',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Observing realities others don\'t see',
        'Speaking difficult truths that needed telling',
        'Documenting experiences for the record',
        'Having your testimony create understanding',
      ],
      themes: [
        'Truth and honesty',
        'Observation without judgment',
        'Reality versus perception',
        'Bearing witness as service',
      ],
      emotionsAndFeelings: [
        'Steadiness in difficult situations',
        'Commitment to accuracy',
        'Integrity and honesty',
        'Compassionate objectivity',
      ],
      skillsAndLessons: [
        'Observing clearly without projecting',
        'Speaking truth with care',
        'Maintaining boundaries while bearing witness',
        'Using testimony to educate and inform',
      ],
      relevantContexts: [
        'Research interviews',
        'Documentary projects',
        'Policy hearings',
        'Professional testimony',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Is this truth mine to tell or does it belong to others?',
        'Can I speak this honestly without harming myself or others?',
        'Am I clear-headed enough to be an accurate witness?',
        'Do I have what I need to stay grounded in difficult testimony?',
      ],
      afterSharing: [
        'How am I carrying what I witnessed and shared?',
        'Do I need to process or debrief?',
        'Did my testimony serve the purpose I intended?',
        'What impact did this have on me?',
      ],
      ongoing: [
        'Am I experiencing secondary trauma from constant witnessing?',
        'How do I maintain healthy boundaries as an observer?',
        'What practices help me process what I witness?',
        'Am I balancing truth-telling with self-protection?',
      ],
    },
  },

  ally: {
    key: 'ally',
    name: 'The Ally',

    sharePrinciples: {
      intentional: 'You share stories to amplify voices of people who use drugs and build genuine solidarity. Your "why" is standing alongside, not speaking for or over.',
      purposeful: 'Your primary purpose is connection through solidarity—using your position to create space, challenge stigma, and support self-determination.',
      meaningful: 'You create impact by leveraging whatever privilege or platform you have to make room for others, building authentic relationships across difference.',
    },

    primaryPurpose: 'connection',
    secondaryPurpose: 'advocacy',

    boundaries: {
      strengths: [
        'Aware of your position and privilege, use it strategically',
        'Good at stepping back and amplifying rather than centering yourself',
        'Comfortable with discomfort of being called in or challenged',
      ],
      watchFor: [
        'Savior complex—wanting to rescue rather than support',
        'Speaking for rather than with or alongside',
        'Using others\' stories without permission or credit',
        'Performing allyship for recognition rather than genuine solidarity',
      ],
      trafficLightGuidance: {
        red: [
          'Stories that aren\'t yours to tell',
          'Speaking for communities when they can speak for themselves',
          'Using allyship performatively for personal gain',
        ],
        yellow: [
          'Uncertain about whether your voice is needed in this space',
          'Sharing others\' experiences without explicit consent',
          'Topics where you need to listen more before speaking',
        ],
        green: [
          'Using your platform to amplify marginalized voices',
          'Speaking about your own learning and growth as ally',
          'Challenging stigma in spaces where you have credibility',
        ],
      },
      selfCareTips: [
        'Build genuine relationships, not transactional allyship',
        'Be accountable to communities you\'re allied with',
        'Welcome being called in—it\'s part of growth',
        'Remember: Allyship is a practice, not an identity',
        'Take care of yourself without centering your own discomfort',
      ],
    },

    audiences: {
      bestFit: [
        'Mixed audiences where you can bridge gaps',
        'Spaces where stigma is high',
        'Professional settings where you have credibility',
        'Community building contexts',
      ],
      adaptationTips: {
        peers: 'Listen more than you speak. Learn. Use your position to create space and access for others.',
        providers: 'Challenge stigma from inside professional spaces. Model genuine respect and partnership.',
        policyMakers: 'Leverage any credibility you have to amplify peer voices and support their demands.',
        public: 'Use your story of becoming an ally to invite others into solidarity and challenge assumptions.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Growth through relationship and accountability',
        'Discomfort of learning and being challenged',
        'Commitment to solidarity over comfort',
        'Humility and willingness to listen',
      ],
      turningPoints: [
        'Realizing your assumptions were wrong',
        'Being called in and choosing to learn',
        'Building genuine relationships across difference',
        'Using your position to create real change',
      ],
      avoidExplicitDetails: [
        'Others\' stories without permission',
        'Trauma voyeurism or tragedy porn',
        'Savior narratives that center yourself',
      ],
      focusInstead: [
        'Your own learning journey as an ally',
        'How you were challenged to grow',
        'What genuine solidarity looks like',
        'Systems change, not individual rescue',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Unlearning stigma and misconceptions',
        'Building authentic relationships',
        'Being accountable and learning from mistakes',
        'Using privilege or position to create space',
      ],
      themes: [
        'Solidarity and accountability',
        'Learning and growth',
        'Leveraging privilege for justice',
        'Genuine relationship building',
      ],
      emotionsAndFeelings: [
        'Humility and openness',
        'Discomfort of growth',
        'Commitment to justice',
        'Gratitude for trust given',
      ],
      skillsAndLessons: [
        'Listening deeply without defensiveness',
        'Stepping back to make room',
        'Being accountable',
        'Using position for collective benefit',
      ],
      relevantContexts: [
        'Professional settings',
        'Community partnerships',
        'Policy advocacy',
        'Educational spaces',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Is my voice needed here or should I amplify others?',
        'Am I centering myself or the issue?',
        'Have I checked in with the communities I\'m allied with?',
        'Am I practicing solidarity or performing allyship?',
      ],
      afterSharing: [
        'Did I amplify or overshadow?',
        'What feedback am I receiving from communities I\'m allied with?',
        'Where can I learn and grow from this experience?',
        'Did I use my position effectively?',
      ],
      ongoing: [
        'Am I building genuine relationships or tokenizing?',
        'How am I staying accountable?',
        'What am I learning about power and privilege?',
        'Is my allyship welcome and useful?',
      ],
    },
  },

  pragmatist: {
    key: 'pragmatist',
    name: 'The Pragmatist',

    sharePrinciples: {
      intentional: 'You share stories to cut through BS and focus on what actually works. Your "why" is grounded in practical wisdom and real-world solutions.',
      purposeful: 'Your primary purpose is education through straightforward honesty—showing what helps, what doesn\'t, and why based on lived experience.',
      meaningful: 'You create impact by offering grounded, practical guidance that people can actually use, based on trial and error in the real world.',
    },

    primaryPurpose: 'education',
    secondaryPurpose: 'healing',

    boundaries: {
      strengths: [
        'Clear about facts versus feelings, can separate them',
        'Good at sharing practical information without over-personalizing',
        'Comfortable being direct without being cold',
      ],
      watchFor: [
        'Minimizing emotions (yours or others\') in favor of "just the facts"',
        'Becoming cynical or dismissive of less practical approaches',
        'Forgetting to honor the emotional weight beneath practical issues',
        'Burning out from always being the "realistic" one',
      ],
      trafficLightGuidance: {
        red: [
          'Practical advice about situations that still trigger strong emotions',
          'Details that minimize the real difficulty of issues',
          'Information shared without adequate safety context',
        ],
        yellow: [
          'Advice about strategies you\'re still figuring out',
          'Practical tips that work for you but might not translate',
          'Directness that might land harshly without relationship',
        ],
        green: [
          'Well-tested strategies you can share confidently',
          'Practical information that truly helps',
          'Honest assessment of what works and what doesn\'t',
        ],
      },
      selfCareTips: [
        'Honor your own emotions even when you\'re focused on practical matters',
        'Build space for reflection, not just action',
        'Remember: Being realistic doesn\'t mean being hard on yourself',
        'Connect with others who value straightforward honesty',
        'Balance pragmatism with hope—both matter',
      ],
    },

    audiences: {
      bestFit: [
        'Peer education and training',
        'Service delivery settings',
        'Practical workshops',
        'Front-line worker training',
      ],
      adaptationTips: {
        peers: 'Share what actually works in daily life. Give practical tips without preaching. Honor diverse approaches.',
        providers: 'Bridge theory and practice. Show them what real-world implementation looks like.',
        policyMakers: 'Focus on evidence and outcomes. What works, what doesn\'t, and why. Be specific.',
        public: 'Make harm reduction concrete and practical. Show real strategies, not just philosophy.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Satisfaction of finding what actually works',
        'Relief when practical solutions emerge',
        'Frustration with theoretical versus real',
        'Confidence from tested wisdom',
      ],
      turningPoints: [
        'Discovering a practical strategy that made real difference',
        'Learning through trial and error',
        'Cutting through confusion to find what works',
        'Helping others with straightforward practical advice',
      ],
      avoidExplicitDetails: [
        'Technical drug details unless necessary for practical point',
        'Overly clinical descriptions',
        'Details that minimize the emotional reality',
      ],
      focusInstead: [
        'What actually works versus what sounds good',
        'Practical lessons from experience',
        'Trial and error process',
        'Real-world problem-solving',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Figuring out what works through experience',
        'Learning practical harm reduction strategies',
        'Helping others with grounded advice',
        'Navigating systems effectively',
      ],
      themes: [
        'Practical wisdom',
        'Learning what works',
        'Grounded honesty',
        'Real-world solutions',
      ],
      emotionsAndFeelings: [
        'Satisfaction of practical success',
        'Confidence from experience',
        'Respect for what works',
        'Impatience with theory over practice',
      ],
      skillsAndLessons: [
        'Testing what works in real life',
        'Cutting through BS',
        'Practical problem-solving',
        'Sharing grounded wisdom',
      ],
      relevantContexts: [
        'Peer training',
        'Harm reduction workshops',
        'Service delivery',
        'Practical education',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Is this practical advice grounded in real experience?',
        'Am I honoring the emotional dimension alongside the practical?',
        'Will this information actually help or just sound smart?',
        'Am I being realistic without being cynical?',
      ],
      afterSharing: [
        'Did my practical focus serve people well?',
        'Did I balance honesty with compassion?',
        'What questions came up that I should consider?',
        'Was I grounded and helpful?',
      ],
      ongoing: [
        'Am I staying connected to emotions while being practical?',
        'How can I honor both pragmatism and hope?',
        'What am I learning from ongoing experience?',
        'Am I being realistic or becoming cynical?',
      ],
    },
  },

  challenger: {
    key: 'challenger',
    name: 'The Challenger',

    sharePrinciples: {
      intentional: 'You share stories to disrupt harmful assumptions and push people out of their comfort zones. Your "why" is refusing to accept stigma and demanding better.',
      purposeful: 'Your primary purpose is advocacy through confrontation—using strategic challenge to shift perspectives and create discomfort that leads to growth.',
      meaningful: 'You create impact by disrupting, questioning, and refusing to let harmful narratives go unchallenged, creating space for new thinking.',
    },

    primaryPurpose: 'advocacy',
    secondaryPurpose: 'education',

    boundaries: {
      strengths: [
        'Comfortable with conflict when it serves justice',
        'Clear about what you will and won\'t tolerate',
        'Good at strategic confrontation without losing yourself',
      ],
      watchFor: [
        'Burning out from constant battle',
        'Anger overwhelming strategic thinking',
        'Isolating yourself through constant challenge',
        'Taking on every fight instead of choosing battles',
      ],
      trafficLightGuidance: {
        red: [
          'Challenges made in rage rather than strategy',
          'Confrontations that compromise your safety',
          'Fighting battles that aren\'t yours to fight',
        ],
        yellow: [
          'Challenges when you\'re already depleted',
          'Confrontations without adequate support nearby',
          'Disrupting spaces where you haven\'t built relationship',
        ],
        green: [
          'Strategic challenges that can create real change',
          'Disruption grounded in clear purpose',
          'Confrontation you\'re prepared for and supported in',
        ],
      },
      selfCareTips: [
        'Choose your battles—you can\'t fight everything',
        'Build community with fellow challengers for support',
        'Process anger in healthy ways',
        'Celebrate wins, don\'t just move to next fight',
        'Remember: Rest is resistance too',
      ],
    },

    audiences: {
      bestFit: [
        'Spaces where harmful assumptions dominate',
        'Professional conferences',
        'Media and public discourse',
        'Policy and advocacy settings',
      ],
      adaptationTips: {
        peers: 'Model strategic challenge without burning bridges. Show how disruption can be effective.',
        providers: 'Challenge their assumptions directly but constructively. Push for better without destroying relationship.',
        policyMakers: 'Be disruptive enough to be heard, strategic enough to be effective.',
        public: 'Challenge dominant narratives while inviting people to question alongside you.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Righteous anger at injustice',
        'Courage to speak unpopular truths',
        'Determination to push for better',
        'Frustration with complacency',
      ],
      turningPoints: [
        'Deciding you wouldn\'t stay silent anymore',
        'First time your challenge created real change',
        'Finding others who also refuse to accept status quo',
        'Learning to challenge strategically, not just angrily',
      ],
      avoidExplicitDetails: [
        'Personal attacks rather than systemic critique',
        'Rage without purpose',
        'Details that alienate potential allies',
      ],
      focusInstead: [
        'What assumptions need disrupting and why',
        'Strategic challenge that invites growth',
        'Collective resistance, not just individual rage',
        'Vision for what could be different',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Speaking up when others stayed silent',
        'Challenging harmful assumptions',
        'Creating discomfort that led to change',
        'Refusing to accept stigma or injustice',
      ],
      themes: [
        'Disruption and resistance',
        'Challenging norms',
        'Strategic confrontation',
        'Refusing complacency',
      ],
      emotionsAndFeelings: [
        'Righteous anger',
        'Courage and determination',
        'Impatience with injustice',
        'Hope through resistance',
      ],
      skillsAndLessons: [
        'Strategic challenge',
        'Speaking truth to power',
        'Disrupting harmful patterns',
        'Sustaining resistance',
      ],
      relevantContexts: [
        'Advocacy campaigns',
        'Professional conferences',
        'Media engagement',
        'Policy challenge',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Is this challenge strategic or just cathartic?',
        'Do I have support for the potential backlash?',
        'Am I clear on what change I\'m pushing for?',
        'Is this the right moment and audience?',
      ],
      afterSharing: [
        'Did my challenge create the disruption I intended?',
        'How am I carrying the aftermath?',
        'What did I learn about effective challenge?',
        'Do I need to process anger or backlash?',
      ],
      ongoing: [
        'Am I sustaining myself while challenging systems?',
        'How do I balance anger with strategy?',
        'What makes my challenges effective versus alienating?',
        'Am I building movement or burning bridges?',
      ],
    },
  },

  navigator: {
    key: 'navigator',
    name: 'The Navigator',

    sharePrinciples: {
      intentional: 'You share stories to help people find their way through complex harm reduction systems and services. Your "why" is making the confusing accessible.',
      purposeful: 'Your primary purpose is education through guidance—translating bureaucracy, explaining processes, and showing people clear pathways forward.',
      meaningful: 'You create impact by simplifying complexity, removing barriers to access, and helping people successfully navigate systems that weren\'t designed for them.',
    },

    primaryPurpose: 'education',
    secondaryPurpose: 'connection',

    boundaries: {
      strengths: [
        'Good at explaining systems without taking on responsibility for them',
        'Clear about what you know and what you don\'t',
        'Comfortable guiding without controlling',
      ],
      watchFor: [
        'Taking on others\' navigation as your responsibility',
        'Frustration with systems leading to burnout',
        'Becoming a bottleneck—everyone goes through you',
        'Forgetting to acknowledge the emotional weight of navigation',
      ],
      trafficLightGuidance: {
        red: [
          'Guidance about systems you don\'t actually understand',
          'Taking on responsibility for others\' decisions',
          'Navigating for people rather than with them',
        ],
        yellow: [
          'Systems you\'re still learning yourself',
          'Situations where your guidance might not fit',
          'Complex navigation when you\'re already stretched',
        ],
        green: [
          'Clear, accurate information about systems',
          'Guidance that empowers self-navigation',
          'Pathways you\'ve successfully helped others navigate',
        ],
      },
      selfCareTips: [
        'Build resource lists to share rather than always explaining',
        'Empower others to navigate, don\'t create dependency',
        'Set limits on your availability',
        'Celebrate successful navigation, share the load',
        'Remember: You\'re a guide, not a savior',
      ],
    },

    audiences: {
      bestFit: [
        'People new to harm reduction services',
        'Service providers seeking better access',
        'Orientation and onboarding',
        'System navigation support',
      ],
      adaptationTips: {
        peers: 'Share navigation knowledge, build collective wisdom. Teach people to fish, don\'t just fish for them.',
        providers: 'Help them see barriers from user perspective. Improve systems, not just navigation.',
        policyMakers: 'Show how complexity creates barriers. Advocate for simpler, more accessible systems.',
        public: 'Demystify harm reduction services. Make access less intimidating.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Relief when pathways become clear',
        'Satisfaction of successful navigation',
        'Frustration with unnecessary complexity',
        'Empowerment through knowledge',
      ],
      turningPoints: [
        'Finally understanding a confusing system',
        'Helping someone else find their way',
        'Discovering shortcuts or pathways',
        'Realizing you could be a guide for others',
      ],
      avoidExplicitDetails: [
        'Overwhelming detail that confuses more than clarifies',
        'Technical jargon without translation',
        'Information that creates dependency rather than empowerment',
      ],
      focusInstead: [
        'Clear, actionable pathways',
        'What makes navigation easier',
        'Empowerment through knowledge',
        'Reducing barriers to access',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Learning to navigate complex systems',
        'Helping others find their way',
        'Discovering hidden pathways or resources',
        'Advocating for simpler access',
      ],
      themes: [
        'Guidance and wayfinding',
        'Access and empowerment',
        'Simplifying complexity',
        'Building navigation skills',
      ],
      emotionsAndFeelings: [
        'Satisfaction of successful guidance',
        'Frustration with barriers',
        'Pride in helping others navigate',
        'Determination to improve access',
      ],
      skillsAndLessons: [
        'Understanding complex systems',
        'Clear communication',
        'Empowering rather than creating dependency',
        'Advocating for better access',
      ],
      relevantContexts: [
        'Service navigation support',
        'Orientation programs',
        'Peer navigation',
        'System improvement advocacy',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Is my guidance clear and accurate?',
        'Am I empowering self-navigation or creating dependency?',
        'Do I have current, accurate information?',
        'Am I acknowledging the emotional work of navigation?',
      ],
      afterSharing: [
        'Was my guidance helpful?',
        'Did I empower rather than rescue?',
        'What gaps in navigation support did I notice?',
        'How can I improve my guidance?',
      ],
      ongoing: [
        'Am I staying current with system changes?',
        'How can I build collective navigation capacity?',
        'What boundaries protect my guiding work?',
        'Am I advocating for better systems, not just navigation?',
      ],
    },
  },

  historian: {
    key: 'historian',
    name: 'The Historian',

    sharePrinciples: {
      intentional: 'You share stories to connect present struggles to past movements and honor those who came before. Your "why" is ensuring history informs current action.',
      purposeful: 'Your primary purpose is education through context—showing how harm reduction evolved, what battles were fought, and what wisdom we can draw from the past.',
      meaningful: 'You create impact by connecting people to their own history, preventing reinvention of wheels, and honoring the shoulders we stand on.',
    },

    primaryPurpose: 'education',
    secondaryPurpose: 'connection',

    boundaries: {
      strengths: [
        'Good at contextualizing without getting lost in nostalgia',
        'Able to honor the past without idealizing it',
        'Clear about which histories are yours to tell',
      ],
      watchFor: [
        'Living in the past instead of learning from it',
        'Gatekeeping history or creating false hierarchies',
        'Romanticizing "the way things were"',
        'Forgetting to make history relevant to present',
      ],
      trafficLightGuidance: {
        red: [
          'Histories that aren\'t yours to share',
          'Nostalgia that dismisses present realities',
          'Stories told without honoring their sources',
        ],
        yellow: [
          'Recent history still unfolding',
          'Contested narratives without acknowledging complexity',
          'Historical detail that overshadows present application',
        ],
        green: [
          'Well-researched historical context',
          'Stories that illuminate present challenges',
          'History that honors sources and inspires action',
        ],
      },
      selfCareTips: [
        'Balance looking back with present engagement',
        'Build relationships across generations',
        'Honor history without being bound by it',
        'Celebrate what we\'ve learned and how we\'ve grown',
        'Make history alive and relevant, not dusty',
      ],
    },

    audiences: {
      bestFit: [
        'Orientation for new workers',
        'Movement building',
        'Educational conferences',
        'Intergenerational gatherings',
      ],
      adaptationTips: {
        peers: 'Share history that empowers, showing battles won and wisdom gained. Build intergenerational connection.',
        providers: 'Give historical context for current practice. Show how we got here and why it matters.',
        policyMakers: 'Use history to show what works, what failed, and why. Learn from past policy impacts.',
        public: 'Connect current harm reduction to its radical, life-saving history. Show movement roots.',
      },
    },

    universalExperiences: {
      emotionsToEmphasize: [
        'Pride in movement history',
        'Gratitude for those who came before',
        'Inspiration from past struggles',
        'Connection across generations',
      ],
      turningPoints: [
        'Learning your own community\'s history',
        'Connecting with movement elders',
        'Realizing current work stands on past foundations',
        'Honoring and passing forward knowledge',
      ],
      avoidExplicitDetails: [
        'Idealized versions that erase complexity',
        'Nostalgia that dismisses current realities',
        'History told without honoring living sources',
      ],
      focusInstead: [
        'How past informs present',
        'Lessons learned and wisdom gained',
        'Evolution and growth',
        'Honoring those who paved the way',
      ],
    },

    storyCrafting: {
      lifeEvents: [
        'Learning movement history',
        'Connecting with elders and archives',
        'Sharing historical context with new generations',
        'Applying historical lessons to present',
      ],
      themes: [
        'Historical context and continuity',
        'Honoring the past',
        'Learning from history',
        'Intergenerational connection',
      ],
      emotionsAndFeelings: [
        'Respect for history',
        'Gratitude for foundations',
        'Responsibility to pass forward',
        'Pride in movement',
      ],
      skillsAndLessons: [
        'Connecting past to present',
        'Honoring sources',
        'Making history relevant',
        'Building intergenerational bridges',
      ],
      relevantContexts: [
        'Educational settings',
        'Movement events',
        'Orientation programs',
        'Historical documentation',
      ],
    },

    reflectivePractice: {
      beforeSharing: [
        'Am I honoring sources and getting history right?',
        'Is this history relevant to present moment?',
        'Am I creating false nostalgia or useful context?',
        'Have I acknowledged whose shoulders I stand on?',
      ],
      afterSharing: [
        'Did historical context serve the present?',
        'Was I accurate and respectful?',
        'What questions arose about history?',
        'How can I deepen historical knowledge?',
      ],
      ongoing: [
        'Am I staying connected to living history?',
        'How can I honor the past while building the future?',
        'What historical lessons matter most right now?',
        'Am I passing knowledge forward effectively?',
      ],
    },
  },
};

export default archetypeEnhancements;
