import { FileText, Heart, Lightbulb, Award, MapPin } from 'lucide-react';
import { universalExperiencesApproach } from '../data/educationalContent';

interface StoryTipsProps {
  archetypeName: string;
  storyCraftingData: {
    lifeEvents: string[];
    themes: string[];
    emotionsAndFeelings: string[];
    skillsAndLessons: string[];
    relevantContexts: string[];
  };
  universalExperiences: {
    emotionsToEmphasize: string[];
    turningPoints: string[];
    avoidExplicitDetails: string[];
    focusInstead: string[];
  };
}

const StoryTips = ({ archetypeName, storyCraftingData, universalExperiences }: StoryTipsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="text-indigo-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-800">
          Story Crafting for {archetypeName}
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        Use this framework to develop powerful, authentic narratives that honor your archetype's strengths.
      </p>

      {/* Universal Experiences Principle */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 mb-6 border-l-4 border-purple-400">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {universalExperiencesApproach.title}
        </h3>
        <p className="text-gray-700 text-sm mb-3">
          {universalExperiencesApproach.description}
        </p>
        <div className="bg-white bg-opacity-60 rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-800 mb-2">Why this matters:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            {universalExperiencesApproach.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Story Building Blocks */}
      <div className="space-y-4 mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          Your Story Building Blocks
        </h3>

        {/* Life Events */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
          <div className="flex items-start gap-3">
            <MapPin className="text-blue-600 mt-1" size={20} />
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 mb-2">Life Events to Focus On</h4>
              <p className="text-sm text-gray-600 mb-3">
                Key moments in your journey that resonate with your archetype:
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                {storyCraftingData.lifeEvents.map((event, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">→</span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Themes */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-l-4 border-emerald-400">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-emerald-600 mt-1" size={20} />
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 mb-2">Themes That Resonate</h4>
              <p className="text-sm text-gray-600 mb-3">
                Big-picture themes that align with your storytelling:
              </p>
              <div className="flex flex-wrap gap-2">
                {storyCraftingData.themes.map((theme, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-60 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emotions and Feelings */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-5 border-l-4 border-rose-400">
          <div className="flex items-start gap-3">
            <Heart className="text-rose-600 mt-1" size={20} />
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 mb-2">Emotions & Feelings to Emphasize</h4>
              <p className="text-sm text-gray-600 mb-3">
                Universal emotions that create connection:
              </p>
              <div className="flex flex-wrap gap-2">
                {storyCraftingData.emotionsAndFeelings.map((emotion, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-60 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {emotion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills and Lessons */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border-l-4 border-amber-400">
          <div className="flex items-start gap-3">
            <Award className="text-amber-600 mt-1" size={20} />
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 mb-2">Skills & Lessons to Highlight</h4>
              <p className="text-sm text-gray-600 mb-3">
                Growth, wisdom, and insights gained:
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                {storyCraftingData.skillsAndLessons.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Universal Experiences for Your Archetype */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Connecting Through Universal Experiences
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Emotions to Emphasize */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-2 text-sm">Emphasize These Emotions:</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              {universalExperiences.emotionsToEmphasize.map((emotion, index) => (
                <li key={index}>• {emotion}</li>
              ))}
            </ul>
          </div>

          {/* Turning Points */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-2 text-sm">Highlight Turning Points:</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              {universalExperiences.turningPoints.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>

          {/* Avoid Explicit Details */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-2 text-sm">Avoid Explicit Details:</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              {universalExperiences.avoidExplicitDetails.map((detail, index) => (
                <li key={index}>• {detail}</li>
              ))}
            </ul>
          </div>

          {/* Focus Instead */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-2 text-sm">Focus Instead On:</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              {universalExperiences.focusInstead.map((focus, index) => (
                <li key={index}>• {focus}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Example Comparison */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-5">
        <h4 className="font-bold text-gray-800 mb-3">Example: Universal vs. Explicit</h4>

        <div className="space-y-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-red-800 mb-1">❌ Explicit version (avoid):</p>
            <p className="text-sm text-gray-700 italic">{universalExperiencesApproach.example.explicitVersion}</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-green-800 mb-1">✓ Universal version (better):</p>
            <p className="text-sm text-gray-700 italic">{universalExperiencesApproach.example.universalVersion}</p>
          </div>

          <p className="text-xs text-gray-600 italic">
            {universalExperiencesApproach.example.explanation}
          </p>
        </div>
      </div>

      {/* Relevant Contexts */}
      <div className="mt-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-5 border-l-4 border-violet-400">
        <h4 className="font-bold text-gray-800 mb-3">Best Contexts for Your Stories</h4>
        <p className="text-sm text-gray-600 mb-3">
          Your {archetypeName} storytelling works particularly well in these settings:
        </p>
        <div className="flex flex-wrap gap-2">
          {storyCraftingData.relevantContexts.map((context, index) => (
            <span
              key={index}
              className="bg-white bg-opacity-70 px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-violet-200"
            >
              {context}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryTips;
