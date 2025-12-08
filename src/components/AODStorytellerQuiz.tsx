import { useState } from "react";
import {
  Heart,
  Book,
  Users,
  Compass,
  Sparkles,
  Palette,
  Eye,
  HandHeart,
  Wrench,
  Megaphone,
  Map,
  Clock,
} from "lucide-react";
import IntroductionScreen from "./IntroductionScreen";
import EnhancedResults from "./EnhancedResults";

const AODStorytellerQuiz = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const archetypes = {
    advocate: {
      name: "The Advocate",
      icon: Megaphone,
      color: "bg-emerald-100 text-emerald-700",
      description:
        "You use your story to push for change and break down stigma. You highlight the challenges people who use drugs face and call for fairer policies and attitudes.",
      superpowers:
        "Rallying support, speaking truth to power, turning personal experience into systemic change",
    },
    educator: {
      name: "The Educator",
      icon: Book,
      color: "bg-blue-100 text-blue-700",
      description:
        "You want to share knowledge and clear up misunderstandings about drug use and harm reduction. You explain things simply, making complicated topics easy to grasp.",
      superpowers:
        "Breaking down complex ideas, patient explaining, creating clarity from confusion",
    },
    connector: {
      name: "The Connector",
      icon: Users,
      color: "bg-purple-100 text-purple-700",
      description:
        "You focus on bringing people together and building understanding. You tell stories that show the shared experiences and relationships in the lives of people who use drugs.",
      superpowers:
        "Building bridges, creating belonging, showing our common humanity",
    },
    explorer: {
      name: "The Explorer",
      icon: Compass,
      color: "bg-amber-100 text-amber-700",
      description:
        "You're curious and open, telling stories of self-discovery and personal growth. You talk about your own experiences and learnings without judgement.",
      superpowers:
        "Vulnerability, authentic sharing, mapping the messy journey of growth",
    },
    healer: {
      name: "The Healer",
      icon: Heart,
      color: "bg-rose-100 text-rose-700",
      description:
        "You focus on the power of support and recovery. You share stories of hope, resilience, and the importance of compassion.",
      superpowers:
        "Holding space, offering hope, showing the power of care and community",
    },
    creator: {
      name: "The Creator",
      icon: Palette,
      color: "bg-indigo-100 text-indigo-700",
      description:
        "You bring creativity into your storytelling, often using art, music, or writing to share your experiences. You challenge stereotypes and offer a fresh view.",
      superpowers:
        "Innovation, making the familiar strange, helping people see differently",
    },
    witness: {
      name: "The Witness",
      icon: Eye,
      color: "bg-teal-100 text-teal-700",
      description:
        "You observe and share the true realities of people who use drugs, providing an honest look at the challenges and successes without judgement.",
      superpowers:
        "Seeing clearly, speaking honestly, revealing what's often hidden",
    },
    ally: {
      name: "The Ally",
      icon: HandHeart,
      color: "bg-green-100 text-green-700",
      description:
        "You want to stand beside people who use drugs and make their voices heard. You tell stories of solidarity, showing how support and understanding from others can make a difference.",
      superpowers:
        "Amplifying voices, standing alongside, building genuine solidarity",
    },
    pragmatist: {
      name: "The Pragmatist",
      icon: Wrench,
      color: "bg-slate-100 text-slate-700",
      description:
        "You're all about keeping things real and straightforward. You focus on practical stories, sharing what works, what doesn't, and the day-to-day realities of harm reduction.",
      superpowers: "Cutting through BS, practical wisdom, grounded honesty",
    },
    challenger: {
      name: "The Challenger",
      icon: Sparkles,
      color: "bg-orange-100 text-orange-700",
      description:
        "You're not afraid to confront harmful ideas and push for better understanding. You share stories that challenge stigma and shake up outdated beliefs.",
      superpowers:
        "Disrupting assumptions, asking hard questions, refusing to accept harmful norms",
    },
    navigator: {
      name: "The Navigator",
      icon: Map,
      color: "bg-cyan-100 text-cyan-700",
      description:
        "You help people find their way through the complex world of harm reduction services and support systems. You share stories that simplify confusing processes.",
      superpowers:
        "Making sense of complexity, creating pathways, practical guidance",
    },
    historian: {
      name: "The Historian",
      icon: Clock,
      color: "bg-violet-100 text-violet-700",
      description:
        "You bring the past into focus, telling stories of how harm reduction has grown and evolved over time. You share lessons from past successes and struggles.",
      superpowers:
        "Connecting past to present, providing context, honoring what came before",
    },
  };

  const questions = [
    {
      question:
        "When someone shares a difficult story with you, you're most likely to...",
      options: [
        {
          text: "Listen deeply and hold space for their emotions",
          scores: { healer: 3, ally: 2, witness: 1 },
        },
        {
          text: "Connect their experience to bigger patterns you've seen",
          scores: { historian: 3, educator: 2, witness: 1 },
        },
        {
          text: "Ask questions to understand their unique journey",
          scores: { explorer: 3, connector: 2, witness: 1 },
        },
        {
          text: "Think about how their story could drive change",
          scores: { advocate: 3, challenger: 2 },
        },
      ],
    },
    {
      question: "What matters most to you when telling stories about drug use?",
      options: [
        {
          text: "Showing the real, unfiltered truth",
          scores: { witness: 3, pragmatist: 2, explorer: 1 },
        },
        {
          text: "Helping people learn something new",
          scores: { educator: 3, navigator: 2 },
        },
        {
          text: "Making people feel less alone",
          scores: { connector: 3, healer: 2, ally: 1 },
        },
        {
          text: "Pushing back against stigma and injustice",
          scores: { advocate: 3, challenger: 2 },
        },
      ],
    },
    {
      question: "At a community meeting about harm reduction, you naturally...",
      options: [
        {
          text: "Share practical examples of what's working",
          scores: { pragmatist: 3, navigator: 2 },
        },
        {
          text: "Make sure everyone's voice is heard",
          scores: { connector: 3, ally: 2 },
        },
        {
          text: "Question assumptions and push for better",
          scores: { challenger: 3, advocate: 2 },
        },
        {
          text: "Explain complex ideas in accessible ways",
          scores: { educator: 3, navigator: 1 },
        },
      ],
    },
    {
      question: "How do you respond when someone challenges harm reduction?",
      options: [
        {
          text: "Share evidence and real-world examples",
          scores: { educator: 3, pragmatist: 2, witness: 1 },
        },
        {
          text: "Speak passionately about rights and dignity",
          scores: { advocate: 3, challenger: 2 },
        },
        {
          text: "Tell a personal story that humanizes the issue",
          scores: { explorer: 3, witness: 2, connector: 1 },
        },
        {
          text: "Patiently address their concerns",
          scores: { navigator: 3, educator: 2, ally: 1 },
        },
      ],
    },
    {
      question: "What kind of stories do you find yourself drawn to tell?",
      options: [
        {
          text: "Stories of transformation and growth",
          scores: { healer: 3, explorer: 2 },
        },
        {
          text: "Stories that reveal hidden realities",
          scores: { witness: 3, challenger: 2 },
        },
        {
          text: "Stories that build community",
          scores: { connector: 3, ally: 2 },
        },
        {
          text: "Stories that show how things have changed over time",
          scores: { historian: 3, educator: 1 },
        },
      ],
    },
    {
      question: "In your work, you're most energized by...",
      options: [
        {
          text: "Seeing people connect and support each other",
          scores: { connector: 3, ally: 2, healer: 1 },
        },
        {
          text: "Challenging myths and changing minds",
          scores: { challenger: 3, advocate: 2, educator: 1 },
        },
        {
          text: "Creating new ways to share experiences",
          scores: { creator: 3, explorer: 2 },
        },
        {
          text: "Helping people access what they need",
          scores: { navigator: 3, pragmatist: 2, ally: 1 },
        },
      ],
    },
    {
      question:
        "When working on a harm reduction campaign, you gravitate toward...",
      options: [
        {
          text: "Policy advocacy and systems change",
          scores: { advocate: 3, challenger: 2 },
        },
        {
          text: "Creating educational materials",
          scores: { educator: 3, creator: 2 },
        },
        {
          text: "Peer support and community building",
          scores: { connector: 3, healer: 2, ally: 1 },
        },
        {
          text: "Documenting real experiences",
          scores: { witness: 3, historian: 2 },
        },
      ],
    },
    {
      question: "Your approach to sharing your own drug use experience is...",
      options: [
        {
          text: "Openly vulnerable and reflective",
          scores: { explorer: 3, healer: 2 },
        },
        {
          text: "Direct and matter-of-fact",
          scores: { pragmatist: 3, witness: 2 },
        },
        {
          text: "Strategic - to achieve specific goals",
          scores: { advocate: 3, challenger: 2 },
        },
        {
          text: "Through creative expression",
          scores: { creator: 3, explorer: 1 },
        },
      ],
    },
    {
      question: "What frustrates you most about current drug discourse?",
      options: [
        {
          text: "The lack of accurate information",
          scores: { educator: 3, navigator: 2 },
        },
        {
          text: "The persistent stigma and discrimination",
          scores: { advocate: 3, challenger: 2, ally: 1 },
        },
        {
          text: "People who use drugs being excluded from conversations",
          scores: { ally: 3, connector: 2, advocate: 1 },
        },
        {
          text: "The gap between policy and reality",
          scores: { pragmatist: 3, witness: 2 },
        },
      ],
    },
    {
      question: "In a team setting, you naturally...",
      options: [
        {
          text: "Bring people together and facilitate connection",
          scores: { connector: 3, navigator: 2 },
        },
        {
          text: "Push for bold action and change",
          scores: { challenger: 3, advocate: 2 },
        },
        {
          text: "Offer historical context and lessons learned",
          scores: { historian: 3, educator: 2 },
        },
        {
          text: "Keep everyone grounded in what's practical",
          scores: { pragmatist: 3, navigator: 1 },
        },
      ],
    },
    {
      question: "How do you prefer to share harm reduction knowledge?",
      options: [
        {
          text: "Through workshops and teaching",
          scores: { educator: 3, navigator: 2 },
        },
        {
          text: "Through art, music, or creative projects",
          scores: { creator: 3, challenger: 1 },
        },
        {
          text: "One-on-one peer conversations",
          scores: { ally: 3, connector: 2, healer: 1 },
        },
        {
          text: "Through public speaking and advocacy",
          scores: { advocate: 3, challenger: 2 },
        },
      ],
    },
    {
      question: "What role does emotion play in your storytelling?",
      options: [
        {
          text: "Central - I lead with feeling and empathy",
          scores: { healer: 3, explorer: 2, connector: 1 },
        },
        {
          text: "Balanced - emotions support the facts",
          scores: { witness: 3, pragmatist: 2 },
        },
        {
          text: "Strategic - I use emotion to drive action",
          scores: { advocate: 3, challenger: 2 },
        },
        {
          text: "Channeled through creative expression",
          scores: { creator: 3, explorer: 2 },
        },
      ],
    },
    {
      question:
        "When explaining harm reduction to someone new, you focus on...",
      options: [
        {
          text: "The evidence base and what works",
          scores: { educator: 3, pragmatist: 2 },
        },
        {
          text: "The human rights foundation",
          scores: { advocate: 3, ally: 2 },
        },
        {
          text: "Personal stories and lived experience",
          scores: { explorer: 3, witness: 2, connector: 1 },
        },
        {
          text: "The evolution of the movement",
          scores: { historian: 3, educator: 1 },
        },
      ],
    },
    {
      question: "Your ideal impact through storytelling would be...",
      options: [
        {
          text: "Policy change and reduced stigma",
          scores: { advocate: 3, challenger: 2 },
        },
        {
          text: "Better understanding and education",
          scores: { educator: 3, witness: 2 },
        },
        {
          text: "Stronger, more connected communities",
          scores: { connector: 3, ally: 2, healer: 1 },
        },
        {
          text: "Inspiring others to find their own path",
          scores: { explorer: 3, healer: 2 },
        },
      ],
    },
    {
      question: "When faced with a complex harm reduction challenge, you...",
      options: [
        {
          text: "Break it down into clear, manageable steps",
          scores: { navigator: 3, educator: 2, pragmatist: 1 },
        },
        {
          text: "Look to past experiences for guidance",
          scores: { historian: 3, pragmatist: 2 },
        },
        {
          text: "Rally people to tackle it together",
          scores: { connector: 3, advocate: 2, ally: 1 },
        },
        {
          text: "Question whether the framing is right",
          scores: { challenger: 3, witness: 2 },
        },
      ],
    },
    {
      question: "Your storytelling style is most like...",
      options: [
        {
          text: "A teacher sharing knowledge",
          scores: { educator: 3, navigator: 2 },
        },
        {
          text: "An artist creating something new",
          scores: { creator: 3, explorer: 2 },
        },
        {
          text: "A documentary filmmaker showing reality",
          scores: { witness: 3, historian: 2 },
        },
        {
          text: "An activist making a case for change",
          scores: { advocate: 3, challenger: 2 },
        },
      ],
    },
    {
      question: "What draws you to harm reduction work?",
      options: [
        {
          text: "The power of peer support and community",
          scores: { ally: 3, connector: 2, healer: 1 },
        },
        {
          text: "The opportunity to challenge injustice",
          scores: { advocate: 3, challenger: 2 },
        },
        {
          text: "The practical, life-saving impact",
          scores: { pragmatist: 3, healer: 2, navigator: 1 },
        },
        {
          text: "The richness of diverse experiences",
          scores: { explorer: 3, witness: 2, creator: 1 },
        },
      ],
    },
    {
      question:
        "If you could change one thing about how stories are told in AOD work, it would be...",
      options: [
        {
          text: "More creativity and less repetition",
          scores: { creator: 3, challenger: 2 },
        },
        {
          text: "More peer voices, less professional narrative",
          scores: { ally: 3, witness: 2, advocate: 1 },
        },
        {
          text: "More focus on practical solutions",
          scores: { pragmatist: 3, navigator: 2 },
        },
        {
          text: "Better connection to history and context",
          scores: { historian: 3, educator: 2 },
        },
      ],
    },
  ];

  const handleAnswer = (scores: any) => {
    const newScores: any = { ...scores };
    Object.entries(scores).forEach(([archetype, points]) => {
      newScores[archetype] = (newScores[archetype] || 0) + (points as number);
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopArchetypes = () => {
    const sorted = Object.entries(scores)
      .map(([key, score]) => ({
        key,
        score: score as number,
        ...archetypes[key as keyof typeof archetypes],
      }))
      .sort((a, b) => b.score - a.score);

    const topScore = sorted[0].score;
    const primary = sorted[0];
    const secondary = sorted
      .filter(
        (a: any) =>
          a.score >= (topScore as number) * 0.75 && a.key !== primary.key
      )
      .slice(0, 2);

    return { primary, secondary, all: sorted };
  };

  const startQuiz = () => {
    setShowIntro(false);
  };

  // Show introduction screen first
  if (showIntro) {
    return <IntroductionScreen onStart={startQuiz} />;
  }

  // Show enhanced results
  if (showResults) {
    const { primary, secondary, all } = getTopArchetypes();

    return (
      <EnhancedResults
        primaryArchetype={primary}
        secondaryArchetypes={secondary}
        allScores={all}
      />
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AOD Storyteller Archetype
          </h1>
          <p className="text-gray-600">
            Discover your natural storytelling style in harm reduction work
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.scores)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-teal-900">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Choose the response that feels most natural to you
        </p>
      </div>
    </div>
  );
};

export default AODStorytellerQuiz;
