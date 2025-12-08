import { Sparkles, Clock, TrendingUp } from 'lucide-react';
import { reflectivePracticeFramework } from '../data/educationalContent';

interface ReflectivePracticeProps {
  archetypeName: string;
  reflectivePrompts: {
    beforeSharing: string[];
    afterSharing: string[];
    ongoing: string[];
  };
}

const ReflectivePractice = ({ archetypeName, reflectivePrompts }: ReflectivePracticeProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-amber-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-800">
          Reflective Practice for {archetypeName}
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        {reflectivePracticeFramework.description} {reflectivePracticeFramework.why}
      </p>

      {/* Before Sharing */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
          <div className="flex items-start gap-3 mb-3">
            <Clock className="text-blue-600 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {reflectivePracticeFramework.beforeSharing.title}
              </h3>
              <p className="text-sm text-gray-600 italic mb-4">
                {reflectivePracticeFramework.beforeSharing.purpose}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    General questions to consider:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {reflectivePracticeFramework.beforeSharing.questions.slice(0, 4).map((question, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">?</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white bg-opacity-60 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    For {archetypeName}, also ask yourself:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {reflectivePrompts.beforeSharing.map((question, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After Sharing */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-l-4 border-emerald-400">
          <div className="flex items-start gap-3 mb-3">
            <Sparkles className="text-emerald-600 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {reflectivePracticeFramework.afterSharing.title}
              </h3>
              <p className="text-sm text-gray-600 italic mb-4">
                {reflectivePracticeFramework.afterSharing.purpose}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    General questions to consider:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {reflectivePracticeFramework.afterSharing.questions.slice(0, 4).map((question, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold mt-0.5">?</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white bg-opacity-60 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    For {archetypeName}, also reflect on:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {reflectivePrompts.afterSharing.map((question, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold mt-0.5">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Reflection */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-400">
          <div className="flex items-start gap-3 mb-3">
            <TrendingUp className="text-purple-600 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {reflectivePracticeFramework.ongoing.title}
              </h3>
              <p className="text-sm text-gray-600 italic mb-4">
                {reflectivePracticeFramework.ongoing.purpose}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    General questions to consider:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {reflectivePracticeFramework.ongoing.questions.slice(0, 4).map((question, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-0.5">?</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white bg-opacity-60 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    For {archetypeName}, keep exploring:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {reflectivePrompts.ongoing.map((question, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-0.5">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200">
        <h4 className="font-bold text-gray-800 mb-3">Remember:</h4>
        <ul className="space-y-2">
          {reflectivePracticeFramework.reminders.map((reminder, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-amber-600 font-bold mt-0.5">💡</span>
              <span>{reminder}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReflectivePractice;
