import React from 'react';
import { Link } from 'react-router-dom';

const GuidesPage = () => {
  const guides = [
    {
      id: 'buckwheat-vs-wheat',
      title: 'Buckwheat vs Traditional Wheat: A Comprehensive Comparison',
      excerpt: 'Discover the key differences between buckwheat and traditional wheat in nutrition, cultivation, and culinary applications.',
      readTime: '12 min read',
      category: 'Nutrition',
      slug: 'buckwheat-vs-traditional-wheat'
    },
    {
      id: 'is-buckwheat-gluten-free',
      title: 'Is Buckwheat Gluten Free? Everything You Need to Know',
      excerpt: 'A complete guide to buckwheat\'s gluten-free properties, cross-contamination risks, and safe consumption practices.',
      readTime: '8 min read',
      category: 'Health',
      slug: 'is-buckwheat-gluten-free'
    },
    {
      id: 'buckwheat-protein-lectin',
      title: 'Buckwheat Protein & Lectin Information: Complete Nutritional Analysis',
      excerpt: 'In-depth analysis of buckwheat\'s protein profile, lectin content, and implications for health and nutrition.',
      readTime: '15 min read',
      category: 'Science',
      slug: 'buckwheat-protein-lectin-information'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Buckwheat Guides
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides covering everything you need to know about buckwheat - from nutrition and health benefits to cultivation and culinary applications. Expert-backed information for informed decisions.
            </p>
          </div>

          {/* SEO Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Your Complete Buckwheat Resource Center</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Welcome to the most comprehensive collection of buckwheat guides available online. Whether you're a health-conscious consumer, culinary enthusiast, or industry professional, our expert-curated guides provide in-depth insights into every aspect of buckwheat.
                </p>
                <p>
                  Our guides are meticulously researched and regularly updated to reflect the latest scientific findings, industry trends, and consumer insights. From understanding buckwheat's unique nutritional profile to mastering its culinary applications, we cover it all with the depth and accuracy you deserve.
                </p>
                <p>
                  Each guide is written by industry experts and nutritionists, ensuring you receive accurate, actionable information that you can trust. Whether you're exploring buckwheat for the first time or deepening your existing knowledge, these guides serve as your definitive resource.
                </p>
              </div>
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`/guides/${guide.slug}`}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                    {guide.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {guide.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{guide.readTime}</span>
                  <span className="text-orange-400 group-hover:translate-x-1 transition-transform">
                    Read Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional SEO Content */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Buckwheat Guides?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Expert-Authored Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our guides are written by certified nutritionists, food scientists, and industry experts with decades of combined experience in the buckwheat and health food industries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Science-Based Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every claim is backed by peer-reviewed research and clinical studies, ensuring you receive accurate, evidence-based information about buckwheat's properties and benefits.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Practical Applications</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond theory, our guides provide practical tips, recipes, and real-world applications that you can implement immediately in your daily life or business.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Regular Updates</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The buckwheat industry evolves rapidly. Our guides are regularly updated to reflect new research findings, market trends, and emerging applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;

