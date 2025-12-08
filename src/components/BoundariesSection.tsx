import { trafficLightSystem } from '../data/educationalContent';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';

interface BoundariesSectionProps {
  archetypeKey: string;
  archetypeName: string;
  boundariesGuidance: {
    strengths: string[];
    watchFor: string[];
    trafficLightGuidance: {
      red: string[];
      yellow: string[];
      green: string[];
    };
    selfCareTips: string[];
  };
}

const BoundariesSection = ({ archetypeName, boundariesGuidance }: BoundariesSectionProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="text-teal-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-800">
          Boundaries & Self-Care for {archetypeName}
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        {trafficLightSystem.description} Protecting your wellbeing while sharing stories is essential for sustainable storytelling.
      </p>

      {/* Boundary Strengths */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 mb-6 border-l-4 border-emerald-400">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <CheckCircle className="text-emerald-600" size={20} />
          Your Boundary Strengths
        </h3>
        <ul className="space-y-2">
          {boundariesGuidance.strengths.map((strength, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-emerald-600 font-bold mt-1">✓</span>
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Watch For */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 mb-6 border-l-4 border-amber-400">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <AlertCircle className="text-amber-600" size={20} />
          Watch For
        </h3>
        <ul className="space-y-2">
          {boundariesGuidance.watchFor.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-600 font-bold mt-1">⚠</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Traffic Light System */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {trafficLightSystem.title}
        </h3>
        <p className="text-gray-700 mb-6 italic">
          {trafficLightSystem.introduction}
        </p>

        <div className="space-y-4">
          {/* Red Light */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-5 border-l-4 border-red-400">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{trafficLightSystem.red.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-gray-800">{trafficLightSystem.red.name}</h4>
                <p className="text-sm text-gray-600">{trafficLightSystem.red.description}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-800 text-sm mb-2">For {archetypeName}:</p>
              <ul className="space-y-1">
                {boundariesGuidance.trafficLightGuidance.red.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 ml-4">• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-60 rounded-lg p-3">
              <p className="text-sm text-gray-700 italic">
                {trafficLightSystem.red.guidance}
              </p>
            </div>
          </div>

          {/* Yellow Light */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-5 border-l-4 border-yellow-400">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{trafficLightSystem.yellow.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-gray-800">{trafficLightSystem.yellow.name}</h4>
                <p className="text-sm text-gray-600">{trafficLightSystem.yellow.description}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-800 text-sm mb-2">For {archetypeName}:</p>
              <ul className="space-y-1">
                {boundariesGuidance.trafficLightGuidance.yellow.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 ml-4">• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-60 rounded-lg p-3">
              <p className="text-sm text-gray-700 italic">
                {trafficLightSystem.yellow.guidance}
              </p>
            </div>
          </div>

          {/* Green Light */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-l-4 border-green-400">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{trafficLightSystem.green.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-gray-800">{trafficLightSystem.green.name}</h4>
                <p className="text-sm text-gray-600">{trafficLightSystem.green.description}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-gray-800 text-sm mb-2">For {archetypeName}:</p>
              <ul className="space-y-1">
                {boundariesGuidance.trafficLightGuidance.green.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 ml-4">• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-60 rounded-lg p-3">
              <p className="text-sm text-gray-700 italic">
                {trafficLightSystem.green.guidance}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5">
        <h4 className="font-bold text-gray-800 mb-3">Remember:</h4>
        <ul className="space-y-2">
          {trafficLightSystem.reminders.map((reminder, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-purple-600 font-bold mt-0.5">💡</span>
              <span>{reminder}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Self-Care Tips */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Self-Care Tips for {archetypeName}
        </h3>
        <ul className="space-y-2">
          {boundariesGuidance.selfCareTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold mt-1">♥</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoundariesSection;
