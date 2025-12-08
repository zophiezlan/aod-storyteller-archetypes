import { useState, useRef, useEffect } from 'react';
import { Share2, Download, ArrowUp } from 'lucide-react';
import { archetypeEnhancements } from '../data/archetypeEnhancements';
import { sharePrinciples, purposeCategories } from '../data/educationalContent';
import BoundariesSection from './BoundariesSection';
import AudienceGuidance from './AudienceGuidance';
import StoryTips from './StoryTips';
import ReflectivePractice from './ReflectivePractice';
import ResourcesSection from './ResourcesSection';

interface EnhancedResultsProps {
  primaryArchetype: {
    key: string;
    name: string;
    icon: any;
    color: string;
    description: string;
    superpowers: string;
    score: number;
  };
  secondaryArchetypes: Array<{
    key: string;
    name: string;
    icon: any;
    color: string;
    description: string;
    score: number;
  }>;
  allScores: Array<{
    key: string;
    name: string;
    color: string;
    score: number;
  }>;
}

const EnhancedResults = ({ primaryArchetype, secondaryArchetypes, allScores }: EnhancedResultsProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const Icon = primaryArchetype.icon;
  const enhancement = archetypeEnhancements[primaryArchetype.key];

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when changing tabs
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeTab]);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareText = `I discovered my storytelling archetype: ${primaryArchetype.name}! Find yours at ${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Storytelling Archetype',
          text: shareText,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert('Link copied to clipboard!');
    }
  };

  if (!enhancement) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700">Loading archetype details...</p>
          </div>
        </div>
      </div>
    );
  }

  const primaryPurpose = purposeCategories[enhancement.primaryPurpose];
  const secondaryPurpose = enhancement.secondaryPurpose ? purposeCategories[enhancement.secondaryPurpose] : null;

  const tabs = [
    { id: 'overview', label: 'Your Archetype', icon: '🎭' },
    { id: 'boundaries', label: 'Boundaries', icon: '🛡️' },
    { id: 'audiences', label: 'Audiences', icon: '👥' },
    { id: 'story-tips', label: 'Story Tips', icon: '✍️' },
    { id: 'reflection', label: 'Reflection', icon: '💭' },
    { id: 'resources', label: 'Resources', icon: '📚' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div ref={topRef} />

        {/* Header with Primary Archetype */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Your Storyteller Archetype
              </h1>
              <p className="text-gray-600">
                Based on your responses, here's your comprehensive storytelling profile
              </p>
            </div>
            <div className="flex gap-2 no-print">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors"
                title="Share your results"
              >
                <Share2 size={18} />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                title="Print or save as PDF"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>

          {/* Primary Archetype */}
          <div className={`${primaryArchetype.color} rounded-xl p-6 mb-6`}>
            <div className="flex items-center gap-3 mb-4">
              <Icon size={32} />
              <div>
                <h2 className="text-2xl font-bold">{primaryArchetype.name}</h2>
                <p className="text-sm opacity-75">Your primary archetype</p>
              </div>
            </div>
            <p className="mb-4">{primaryArchetype.description}</p>
            <div className="bg-white bg-opacity-50 rounded-lg p-4">
              <p className="font-semibold mb-2">Your storytelling superpowers:</p>
              <p className="italic">{primaryArchetype.superpowers}</p>
            </div>
          </div>

          {/* Secondary Archetypes */}
          {secondaryArchetypes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                You also bring strong elements of:
              </h3>
              <div className="space-y-3">
                {secondaryArchetypes.map((arch) => {
                  const SecIcon = arch.icon;
                  return (
                    <div key={arch.key} className={`${arch.color} rounded-lg p-4`}>
                      <div className="flex items-center gap-2 mb-2">
                        <SecIcon size={20} />
                        <h4 className="font-bold">{arch.name}</h4>
                      </div>
                      <p className="text-sm">{arch.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Score breakdown */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Your full profile</h3>
            <div className="space-y-2">
              {allScores.slice(0, 6).map((arch) => (
                <div key={arch.key} className="flex items-center gap-3">
                  <div className="w-32 text-sm text-gray-600 font-medium">
                    {arch.name}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className={`${arch.color.split(' ')[0]} h-3 rounded-full transition-all`}
                      style={{
                        width: `${((arch.score as number) / (allScores[0].score as number)) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="w-12 text-sm text-gray-600 text-right">
                    {arch.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden no-print">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[120px] px-4 py-4 text-center font-semibold transition-colors border-b-3 ${
                  activeTab === tab.id
                    ? 'bg-teal-50 text-teal-700 border-teal-500'
                    : 'text-gray-600 hover:bg-gray-50 border-transparent'
                }`}
                style={{ borderBottomWidth: '3px' }}
              >
                <span className="block text-xl mb-1">{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* SHARE Principles */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 avoid-break">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Storytelling Principles
              </h2>
              <p className="text-gray-700 mb-6">
                Here's how you embody the three core principles of effective storytelling in harm reduction:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {sharePrinciples.intentional.title}
                  </h3>
                  <p className="text-gray-700">{enhancement.sharePrinciples.intentional}</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-5 border-l-4 border-emerald-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {sharePrinciples.purposeful.title}
                  </h3>
                  <p className="text-gray-700">{enhancement.sharePrinciples.purposeful}</p>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border-l-4 border-purple-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {sharePrinciples.meaningful.title}
                  </h3>
                  <p className="text-gray-700">{enhancement.sharePrinciples.meaningful}</p>
                </div>
              </div>
            </div>

            {/* Storytelling Purposes */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 avoid-break">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Storytelling Purposes
              </h2>
              <p className="text-gray-700 mb-6">
                As {primaryArchetype.name}, your stories naturally serve these purposes:
              </p>

              {/* Primary Purpose */}
              <div className="bg-indigo-50 rounded-xl p-5 mb-4 border-l-4 border-indigo-400">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-3xl">{primaryPurpose.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Primary Purpose: {primaryPurpose.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{primaryPurpose.description}</p>
                    <p className="text-sm text-gray-700 italic">
                      <strong>When to use:</strong> {primaryPurpose.when}
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Purpose */}
              {secondaryPurpose && (
                <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-400">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-3xl">{secondaryPurpose.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Secondary Purpose: {secondaryPurpose.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{secondaryPurpose.description}</p>
                      <p className="text-sm text-gray-700 italic">
                        <strong>When to use:</strong> {secondaryPurpose.when}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Boundaries & Self-Care Tab */}
        {activeTab === 'boundaries' && (
          <BoundariesSection
            archetypeKey={primaryArchetype.key}
            archetypeName={primaryArchetype.name}
            boundariesGuidance={enhancement.boundaries}
          />
        )}

        {/* Audience Guidance Tab */}
        {activeTab === 'audiences' && (
          <AudienceGuidance
            archetypeName={primaryArchetype.name}
            audienceData={enhancement.audiences}
          />
        )}

        {/* Story Crafting Tips Tab */}
        {activeTab === 'story-tips' && (
          <StoryTips
            archetypeName={primaryArchetype.name}
            storyCraftingData={enhancement.storyCrafting}
            universalExperiences={enhancement.universalExperiences}
          />
        )}

        {/* Reflective Practice Tab */}
        {activeTab === 'reflection' && (
          <ReflectivePractice
            archetypeName={primaryArchetype.name}
            reflectivePrompts={enhancement.reflectivePractice}
          />
        )}

        {/* Resources & Next Steps Tab */}
        {activeTab === 'resources' && <ResourcesSection />}

        {/* Retake Quiz Button */}
        <div className="text-center mt-8 mb-6 no-print">
          <button
            onClick={() => window.location.reload()}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200"
          >
            Retake Quiz
          </button>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-200 no-print z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default EnhancedResults;
