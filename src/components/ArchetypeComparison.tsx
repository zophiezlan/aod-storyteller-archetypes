import { useState } from 'react';
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
  ArrowLeft,
  Search,
} from 'lucide-react';

interface ArchetypeComparisonProps {
  onBack?: () => void;
}

const ArchetypeComparison = ({ onBack }: ArchetypeComparisonProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);

  const archetypes = [
    {
      key: 'advocate',
      name: 'The Advocate',
      icon: Megaphone,
      color: 'bg-emerald-100 text-emerald-700 border-emerald-300',
      description:
        'You use your story to push for change and break down stigma. You highlight the challenges people who use drugs face and call for fairer policies and attitudes.',
      superpowers:
        'Rallying support, speaking truth to power, turning personal experience into systemic change',
      primaryPurpose: 'Advocacy & Systems Change',
      bestFor: ['Policy advocacy', 'Breaking down stigma', 'Systemic campaigns'],
      approach: 'Strategic and bold, with clear goals for impact',
    },
    {
      key: 'educator',
      name: 'The Educator',
      icon: Book,
      color: 'bg-blue-100 text-blue-700 border-blue-300',
      description:
        'You want to share knowledge and clear up misunderstandings about drug use and harm reduction. You explain things simply, making complicated topics easy to grasp.',
      superpowers:
        'Breaking down complex ideas, patient explaining, creating clarity from confusion',
      primaryPurpose: 'Education & Information',
      bestFor: ['Training sessions', 'Workshops', 'Public education'],
      approach: 'Clear, informative, and accessible',
    },
    {
      key: 'connector',
      name: 'The Connector',
      icon: Users,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      description:
        'You focus on bringing people together and building understanding. You tell stories that show the shared experiences and relationships in the lives of people who use drugs.',
      superpowers:
        'Building bridges, creating belonging, showing our common humanity',
      primaryPurpose: 'Connection & Community',
      bestFor: ['Peer support groups', 'Community building', 'Creating safe spaces'],
      approach: 'Warm, inclusive, and relationship-focused',
    },
    {
      key: 'explorer',
      name: 'The Explorer',
      icon: Compass,
      color: 'bg-amber-100 text-amber-700 border-amber-300',
      description:
        "You're curious and open, telling stories of self-discovery and personal growth. You talk about your own experiences and learnings without judgement.",
      superpowers:
        'Vulnerability, authentic sharing, mapping the messy journey of growth',
      primaryPurpose: 'Self-Discovery & Growth',
      bestFor: ['Personal reflection', 'Peer learning', 'Authentic storytelling'],
      approach: 'Vulnerable, reflective, and non-judgmental',
    },
    {
      key: 'healer',
      name: 'The Healer',
      icon: Heart,
      color: 'bg-rose-100 text-rose-700 border-rose-300',
      description:
        'You focus on the power of support and recovery. You share stories of hope, resilience, and the importance of compassion.',
      superpowers:
        'Holding space, offering hope, showing the power of care and community',
      primaryPurpose: 'Healing & Support',
      bestFor: ['Support groups', 'Recovery stories', 'Compassionate care'],
      approach: 'Hopeful, compassionate, and nurturing',
    },
    {
      key: 'creator',
      name: 'The Creator',
      icon: Palette,
      color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
      description:
        'You bring creativity into your storytelling, often using art, music, or writing to share your experiences. You challenge stereotypes and offer a fresh view.',
      superpowers:
        'Innovation, making the familiar strange, helping people see differently',
      primaryPurpose: 'Creative Expression',
      bestFor: ['Arts projects', 'Creative campaigns', 'Alternative narratives'],
      approach: 'Innovative, artistic, and boundary-pushing',
    },
    {
      key: 'witness',
      name: 'The Witness',
      icon: Eye,
      color: 'bg-teal-100 text-teal-700 border-teal-300',
      description:
        'You observe and share the true realities of people who use drugs, providing an honest look at the challenges and successes without judgement.',
      superpowers:
        "Seeing clearly, speaking honestly, revealing what's often hidden",
      primaryPurpose: 'Truth-Telling & Documentation',
      bestFor: ['Research participation', 'Documentary work', 'Honest accounts'],
      approach: 'Honest, observant, and unflinching',
    },
    {
      key: 'ally',
      name: 'The Ally',
      icon: HandHeart,
      color: 'bg-green-100 text-green-700 border-green-300',
      description:
        'You want to stand beside people who use drugs and make their voices heard. You tell stories of solidarity, showing how support and understanding from others can make a difference.',
      superpowers:
        'Amplifying voices, standing alongside, building genuine solidarity',
      primaryPurpose: 'Solidarity & Amplification',
      bestFor: ['Allyship training', 'Amplifying peer voices', 'Coalition work'],
      approach: 'Supportive, respectful, and empowering',
    },
    {
      key: 'pragmatist',
      name: 'The Pragmatist',
      icon: Wrench,
      color: 'bg-slate-100 text-slate-700 border-slate-300',
      description:
        "You're all about keeping things real and straightforward. You focus on practical stories, sharing what works, what doesn't, and the day-to-day realities of harm reduction.",
      superpowers: 'Cutting through BS, practical wisdom, grounded honesty',
      primaryPurpose: 'Practical Solutions',
      bestFor: ['Service delivery', 'Training staff', 'Real-world guidance'],
      approach: 'Straightforward, practical, and no-nonsense',
    },
    {
      key: 'challenger',
      name: 'The Challenger',
      icon: Sparkles,
      color: 'bg-orange-100 text-orange-700 border-orange-300',
      description:
        "You're not afraid to confront harmful ideas and push for better understanding. You share stories that challenge stigma and shake up outdated beliefs.",
      superpowers:
        'Disrupting assumptions, asking hard questions, refusing to accept harmful norms',
      primaryPurpose: 'Disruption & Challenge',
      bestFor: ['Confronting stigma', 'Challenging systems', 'Provocative campaigns'],
      approach: 'Bold, questioning, and transformative',
    },
    {
      key: 'navigator',
      name: 'The Navigator',
      icon: Map,
      color: 'bg-cyan-100 text-cyan-700 border-cyan-300',
      description:
        'You help people find their way through the complex world of harm reduction services and support systems. You share stories that simplify confusing processes.',
      superpowers:
        'Making sense of complexity, creating pathways, practical guidance',
      primaryPurpose: 'Guidance & Wayfinding',
      bestFor: ['Service navigation', 'System guidance', 'Peer navigation'],
      approach: 'Clear, practical, and supportive',
    },
    {
      key: 'historian',
      name: 'The Historian',
      icon: Clock,
      color: 'bg-violet-100 text-violet-700 border-violet-300',
      description:
        'You bring the past into focus, telling stories of how harm reduction has grown and evolved over time. You share lessons from past successes and struggles.',
      superpowers:
        'Connecting past to present, providing context, honoring what came before',
      primaryPurpose: 'Context & Legacy',
      bestFor: ['Movement building', 'Historical context', 'Honoring pioneers'],
      approach: 'Contextual, respectful, and informed by history',
    },
  ];

  const filteredArchetypes = archetypes.filter(
    (archetype) =>
      archetype.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      archetype.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      archetype.primaryPurpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedArchetypeData = selectedArchetype
    ? archetypes.find((a) => a.key === selectedArchetype)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
              >
                <ArrowLeft size={20} />
                Back to Quiz
              </button>
            )}
            <div className="flex-1" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Storyteller Archetypes Comparison
          </h1>
          <p className="text-gray-600 mb-6">
            Explore all 12 storytelling archetypes from NUAA's SHARE & BUILD Peer Work
            Foundations Training. Each archetype represents a unique approach to sharing
            stories in harm reduction work.
          </p>

          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search archetypes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Archetype Grid */}
        {!selectedArchetype ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArchetypes.map((archetype) => {
              const Icon = archetype.icon;
              return (
                <div
                  key={archetype.key}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedArchetype(archetype.key)}
                >
                  <div className={`${archetype.color} p-6 border-b-4`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={28} />
                      <h2 className="text-xl font-bold">{archetype.name}</h2>
                    </div>
                    <p className="text-sm opacity-90">{archetype.primaryPurpose}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {archetype.description}
                    </p>
                    <div className="mb-4">
                      <p className="font-semibold text-sm text-gray-800 mb-2">
                        Superpowers:
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {archetype.superpowers}
                      </p>
                    </div>
                    <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                      Learn more →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Detailed View
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <button
              onClick={() => setSelectedArchetype(null)}
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-6"
            >
              <ArrowLeft size={20} />
              Back to all archetypes
            </button>

            {selectedArchetypeData && (
              <>
                <div
                  className={`${selectedArchetypeData.color} rounded-xl p-8 mb-6 border-l-8`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {(() => {
                      const Icon = selectedArchetypeData.icon;
                      return <Icon size={48} />;
                    })()}
                    <div>
                      <h2 className="text-3xl font-bold">
                        {selectedArchetypeData.name}
                      </h2>
                      <p className="text-lg opacity-90">
                        {selectedArchetypeData.primaryPurpose}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      About This Archetype
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedArchetypeData.description}
                    </p>
                  </div>

                  {/* Superpowers */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Storytelling Superpowers
                    </h3>
                    <p className="text-gray-700 italic">
                      {selectedArchetypeData.superpowers}
                    </p>
                  </div>

                  {/* Best For */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Best For</h3>
                    <ul className="space-y-2">
                      {selectedArchetypeData.bestFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Storytelling Approach
                    </h3>
                    <p className="text-gray-700">{selectedArchetypeData.approach}</p>
                  </div>

                  {/* Take Quiz CTA */}
                  <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200 mt-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Find Your Archetype
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Take our interactive quiz to discover your primary storytelling
                      archetype and get personalized guidance.
                    </p>
                    {onBack && (
                      <button
                        onClick={onBack}
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                      >
                        Take the Quiz
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        {!selectedArchetype && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Ready to Find Your Archetype?
            </h2>
            <p className="text-gray-600 mb-6">
              Take our comprehensive quiz to discover your unique storytelling style and
              get personalized insights and resources.
            </p>
            {onBack && (
              <button
                onClick={onBack}
                className="bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200"
              >
                Take the Quiz
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchetypeComparison;
