import { useState } from 'react';
import { Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

const BrandsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(brandsData.map(brand => brand.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Buckwheat CPG Brands
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the leading consumer packaged goods companies featuring buckwheat in their product lines
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-gray-200 leading-relaxed mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              The Complete Directory of Buckwheat CPG Brands
            </h2>
            <p className="mb-6">
              The buckwheat consumer packaged goods market has experienced remarkable growth, with established brands and innovative startups recognizing the pseudocereal's exceptional potential. Our comprehensive brand directory features companies that have made buckwheat a cornerstone of their product development strategy, from heritage mills like Bob's Red Mill to specialized producers like Better with Buckwheat.
            </p>
            <p className="mb-6">
              Each featured brand represents a unique approach to buckwheat utilization, whether through traditional stone-grinding methods that preserve nutritional integrity, innovative product formulations that expand buckwheat's culinary applications, or sustainable sourcing practices that support environmental stewardship. These companies have collectively transformed buckwheat from a niche health food ingredient into a mainstream alternative that serves diverse consumer needs.
            </p>
            <p className="mb-6">
              The brands in our directory span multiple product categories, including artisanal flours and baking mixes, breakfast cereals and hot cereals, traditional and fusion pasta products, healthy snacks and crackers, and specialty items like protein powders and functional foods. This diversity demonstrates buckwheat's remarkable versatility and the food industry's growing recognition of its commercial potential.
            </p>
            <p className="mb-6">
              Quality standards among leading buckwheat brands consistently emphasize organic certification, non-GMO verification, and gluten-free testing protocols. Many featured companies maintain direct relationships with farmers, ensuring traceability and supporting sustainable agriculture practices that benefit both environmental health and product quality. These commitments to quality and sustainability have enabled buckwheat brands to command premium pricing while building loyal customer bases.
            </p>
            <p>
              Whether you're seeking gluten-free alternatives, exploring ancient grain nutrition, or researching market trends in the health food sector, our brand profiles provide detailed insights into company histories, product lines, nutritional information, and market positioning strategies that define the buckwheat CPG landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md mx-auto block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="mb-4">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-48 object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{brand.description.substring(0, 120)}...</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-orange-400 text-sm font-medium">{brand.category}</span>
                  <span className="text-gray-400 text-sm">Founded {brand.founded}</span>
                </div>
                <div className="text-gray-400 text-xs">
                  {brand.headquarters}
                </div>
              </Link>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No brands found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;

