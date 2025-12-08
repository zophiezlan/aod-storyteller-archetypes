import { Heart, Lightbulb, Target } from 'lucide-react';
import { sharePrinciples } from '../data/educationalContent';

interface IntroductionScreenProps {
  onStart: () => void;
}

const IntroductionScreen = ({ onStart }: IntroductionScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Discover Your Storytelling Archetype
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find your voice in harm reduction and peer work storytelling
          </p>

          {/* Acknowledgment of Country */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 mb-6 border-l-4 border-amber-400">
            <p className="text-sm text-gray-700 italic">
              <strong>Acknowledgment of Country:</strong> NUAA acknowledges the Traditional Custodians of the land on which we work and live and pays respect to their Elders both past and present. Always was, and always will be Aboriginal land.
            </p>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg mb-4">
              This quiz helps you understand your natural approach to sharing stories about alcohol and other drugs (AOD) in meaningful, effective, and safe ways.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you have lived experience, work in the sector, or are simply curious about harm reduction storytelling, you'll discover your unique archetype and learn how to share stories that create real impact while protecting your wellbeing.
            </p>
          </div>
        </div>

        {/* SHARE Principles */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            The Power of Storytelling in Harm Reduction
          </h2>
          <p className="text-gray-700 mb-6">
            Effective storytelling in AOD work is built on three core principles:
          </p>

          <div className="space-y-4">
            {/* Intentional */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {sharePrinciples.intentional.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {sharePrinciples.intentional.description}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {sharePrinciples.intentional.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Purposeful */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-l-4 border-emerald-400">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Lightbulb className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {sharePrinciples.purposeful.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {sharePrinciples.purposeful.description}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {sharePrinciples.purposeful.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Meaningful */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-400">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {sharePrinciples.meaningful.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {sharePrinciples.meaningful.description}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {sharePrinciples.meaningful.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What to Expect
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <p className="font-semibold">18 Questions</p>
                <p className="text-sm text-gray-600">Exploring your storytelling approaches and preferences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎭</span>
              <div>
                <p className="font-semibold">12 Unique Archetypes</p>
                <p className="text-sm text-gray-600">From The Advocate to The Historian—discover your natural style</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <p className="font-semibold">Comprehensive Results</p>
                <p className="text-sm text-gray-600">Your archetype profile, boundaries guidance, audience tips, and storytelling resources</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <p className="font-semibold">Connection to NUAA</p>
                <p className="text-sm text-gray-600">Learn about SHARE & BUILD training and other NUAA programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-6 mb-6 border border-yellow-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Before You Begin
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>This quiz is for <strong>everyone</strong>—you don't need lived experience to participate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>There are no wrong answers—be honest about what resonates with you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Your results will include guidance on boundaries and self-care</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>This is an introduction, not a replacement for SHARE & BUILD training</span>
            </li>
          </ul>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-teal-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200"
          >
            Discover Your Archetype
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Takes approximately 5-7 minutes
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            Developed for NUAA (NSW Users and AIDS Association) based on{' '}
            <span className="font-semibold">SHARE & BUILD</span> Peer Work Foundations Training
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionScreen;
