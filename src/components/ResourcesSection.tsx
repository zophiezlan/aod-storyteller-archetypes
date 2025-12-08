import { ExternalLink, Phone, Download, Heart, GraduationCap } from 'lucide-react';
import {
  nuaaInfo,
  shareAndBuildTraining,
  nuaaServices,
  downloadableResources,
  externalResources,
  nextSteps
} from '../data/resources';

const ResourcesSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Resources & Next Steps
      </h2>

      {/* About NUAA */}
      <div className="mb-8">
        <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{nuaaInfo.title}</h3>
          <p className="text-gray-700 mb-3">{nuaaInfo.description}</p>
          <p className="text-gray-700 mb-4 font-medium">{nuaaInfo.mission}</p>
          <a
            href={nuaaInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
          >
            Visit NUAA Website <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* SHARE & BUILD Training */}
      <div className="mb-8">
        <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-3 mb-3">
            <GraduationCap className="text-purple-600" size={28} />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{shareAndBuildTraining.title}</h3>
              <p className="text-sm text-purple-600 font-semibold italic">{shareAndBuildTraining.tagline}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{shareAndBuildTraining.description}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white bg-opacity-60 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-2 text-sm">What You'll Learn:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {shareAndBuildTraining.whatYouLearn.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-60 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-2 text-sm">Who It's For:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {shareAndBuildTraining.whoItsFor.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-70 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-2">
              <strong>For inquiries:</strong> Contact {shareAndBuildTraining.inquiries.program} via the NUAA website
            </p>
            <p className="text-sm text-gray-600 italic">{shareAndBuildTraining.inquiries.description}</p>
          </div>
        </div>
      </div>

      {/* NUAA Services */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">NUAA Services & Programs</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {nuaaServices.services.slice(0, 4).map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
              <p className="text-xs text-gray-700 mb-2">{service.details}</p>
              <p className="text-xs text-teal-600 font-medium">{service.contact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Downloadable Resources */}
      <div className="mb-8">
        <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-3 mb-4">
            <Download className="text-blue-600" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{downloadableResources.title}</h3>
              <p className="text-sm text-gray-600">{downloadableResources.description}</p>
            </div>
          </div>

          <div className="space-y-3">
            {downloadableResources.resources.map((resource, index) => (
              <div key={index} className="bg-white bg-opacity-70 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{resource.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm">{resource.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                    <p className="text-xs text-gray-500 italic mb-2">
                      <strong>Use case:</strong> {resource.useCase}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        disabled
                        className="text-xs bg-gray-100 text-gray-400 px-3 py-1 rounded-full cursor-not-allowed"
                        title="Template coming soon"
                      >
                        Download {resource.format.toUpperCase()}
                      </button>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600 italic mt-4 bg-white bg-opacity-60 rounded-lg p-3">
            {downloadableResources.note}
          </p>
        </div>
      </div>

      {/* Your Journey: Next Steps */}
      <div className="mb-8">
        <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{nextSteps.title}</h3>

          <div className="space-y-4">
            {nextSteps.steps.map((step, index) => (
              <div key={index} className="bg-white bg-opacity-60 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                    <ul className="space-y-1">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-amber-600">→</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white bg-opacity-70 rounded-lg p-4">
            <h4 className="font-bold text-gray-800 mb-3 text-sm">Remember:</h4>
            <ul className="space-y-2">
              {nextSteps.remember.map((reminder, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <Heart className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{reminder}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Support Resources */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Support & Information</h3>

        {externalResources.resources.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">{category.category}</h4>
            <div className="space-y-2">
              {category.links.map((link, linkIndex) => (
                <div key={linkIndex} className="bg-gray-50 rounded-lg p-3 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{link.name}</p>
                      {'phone' in link && link.phone && (
                        <p className="text-teal-600 font-mono text-xs flex items-center gap-1 mt-1">
                          <Phone size={12} /> {link.phone}
                        </p>
                      )}
                      <p className="text-xs text-gray-600 mt-1">{link.description}</p>
                    </div>
                    {link.url && (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 flex-shrink-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 text-center border border-gray-200">
        <p className="text-sm text-gray-700">
          <strong>{nuaaInfo.acknowledgment}</strong>
        </p>
        <p className="text-xs text-gray-600 mt-3">
          This tool is based on NUAA's SHARE & BUILD Peer Work Foundations Training
        </p>
      </div>
    </div>
  );
};

export default ResourcesSection;
