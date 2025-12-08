import { Users, Briefcase, Building2, Globe } from 'lucide-react';
import { audienceConsiderations } from '../data/educationalContent';

interface AudienceGuidanceProps {
  archetypeName: string;
  audienceData: {
    bestFit: string[];
    adaptationTips: {
      peers: string;
      providers: string;
      policyMakers: string;
      public: string;
    };
  };
}

const AudienceGuidance = ({ archetypeName, audienceData }: AudienceGuidanceProps) => {
  const audienceIcons = {
    peers: <Users className="text-purple-600" size={24} />,
    providers: <Briefcase className="text-blue-600" size={24} />,
    policyMakers: <Building2 className="text-emerald-600" size={24} />,
    public: <Globe className="text-amber-600" size={24} />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Understanding Your Audience
      </h2>

      <p className="text-gray-700 mb-6">
        {audienceConsiderations.introduction}
      </p>

      {/* Best Fit Audiences */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-5 mb-6 border-l-4 border-teal-400">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Your Natural Audiences as {archetypeName}
        </h3>
        <p className="text-gray-700 mb-3">
          You tend to resonate most strongly with:
        </p>
        <ul className="space-y-2">
          {audienceData.bestFit.map((audience, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-teal-600 font-bold mt-1">→</span>
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Adaptation Strategies */}
      <div className="space-y-4 mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Adapting Your Storytelling
        </h3>
        <p className="text-gray-700 mb-4">
          Here's how to tailor your approach for different audiences:
        </p>

        {/* Peers */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-400">
          <div className="flex items-start gap-3 mb-3">
            {audienceIcons.peers}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-800">{audienceConsiderations.audiences.peers.name}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {audienceConsiderations.audiences.peers.approach.focus}
              </p>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-3">
                <p className="text-sm font-semibold text-gray-800 mb-1">Your approach:</p>
                <p className="text-sm text-gray-700">{audienceData.adaptationTips.peers}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Key tips:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {audienceConsiderations.audiences.peers.approach.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Providers */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
          <div className="flex items-start gap-3 mb-3">
            {audienceIcons.providers}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-800">{audienceConsiderations.audiences.providers.name}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {audienceConsiderations.audiences.providers.approach.focus}
              </p>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-3">
                <p className="text-sm font-semibold text-gray-800 mb-1">Your approach:</p>
                <p className="text-sm text-gray-700">{audienceData.adaptationTips.providers}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Key tips:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {audienceConsiderations.audiences.providers.approach.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Makers */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-l-4 border-emerald-400">
          <div className="flex items-start gap-3 mb-3">
            {audienceIcons.policyMakers}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-800">{audienceConsiderations.audiences.policyMakers.name}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {audienceConsiderations.audiences.policyMakers.approach.focus}
              </p>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-3">
                <p className="text-sm font-semibold text-gray-800 mb-1">Your approach:</p>
                <p className="text-sm text-gray-700">{audienceData.adaptationTips.policyMakers}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Key tips:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {audienceConsiderations.audiences.policyMakers.approach.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* General Public */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border-l-4 border-amber-400">
          <div className="flex items-start gap-3 mb-3">
            {audienceIcons.public}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-800">{audienceConsiderations.audiences.public.name}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {audienceConsiderations.audiences.public.approach.focus}
              </p>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-3">
                <p className="text-sm font-semibold text-gray-800 mb-1">Your approach:</p>
                <p className="text-sm text-gray-700">{audienceData.adaptationTips.public}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Key tips:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {audienceConsiderations.audiences.public.approach.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Questions */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-5">
        <h4 className="font-bold text-gray-800 mb-3">Before Sharing, Ask Yourself:</h4>
        <ul className="space-y-2">
          {audienceConsiderations.keyQuestions.map((question, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-teal-600 font-bold mt-0.5">?</span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AudienceGuidance;
