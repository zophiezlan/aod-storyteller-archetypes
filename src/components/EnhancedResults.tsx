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
  const Icon = primaryArchetype.icon;
  const enhancement = archetypeEnhancements[primaryArchetype.key];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header with Primary Archetype */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Storyteller Archetype
          </h1>
          <p className="text-gray-600 mb-8">
            Based on your responses, here's your comprehensive storytelling profile
          </p>

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

        {/* SHARE Principles */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Storytelling Principles
          </h2>
          <p className="text-gray-700 mb-6">
            Here's how you embody the three core principles of effective storytelling in harm reduction:
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {sharePrinciples.intentional.title}
              </h3>
              <p className="text-gray-700">{enhancement.sharePrinciples.intentional}</p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-l-4 border-emerald-400">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {sharePrinciples.purposeful.title}
              </h3>
              <p className="text-gray-700">{enhancement.sharePrinciples.purposeful}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-400">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {sharePrinciples.meaningful.title}
              </h3>
              <p className="text-gray-700">{enhancement.sharePrinciples.meaningful}</p>
            </div>
          </div>
        </div>

        {/* Storytelling Purposes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Storytelling Purposes
          </h2>
          <p className="text-gray-700 mb-6">
            As {primaryArchetype.name}, your stories naturally serve these purposes:
          </p>

          {/* Primary Purpose */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 mb-4 border-l-4 border-indigo-400">
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
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border-l-4 border-amber-400">
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

        {/* Boundaries & Self-Care */}
        <BoundariesSection
          archetypeKey={primaryArchetype.key}
          archetypeName={primaryArchetype.name}
          boundariesGuidance={enhancement.boundaries}
        />

        {/* Audience Guidance */}
        <AudienceGuidance
          archetypeName={primaryArchetype.name}
          audienceData={enhancement.audiences}
        />

        {/* Story Crafting Tips */}
        <StoryTips
          archetypeName={primaryArchetype.name}
          storyCraftingData={enhancement.storyCrafting}
          universalExperiences={enhancement.universalExperiences}
        />

        {/* Reflective Practice */}
        <ReflectivePractice
          archetypeName={primaryArchetype.name}
          reflectivePrompts={enhancement.reflectivePractice}
        />

        {/* Resources & Next Steps */}
        <ResourcesSection />

        {/* Retake Quiz Button */}
        <div className="text-center mt-8 mb-6">
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-teal-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedResults;
