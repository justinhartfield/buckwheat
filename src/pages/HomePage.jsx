import { useState } from 'react';
import { Link } from 'react-router-dom';
import { brandsData, categoryData, blogPosts } from '../data/brands';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(brandsData.map(brand => brand.category))];
  const featuredBlogPosts = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-20 rounded-3xl mx-4"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Buckwheat Revolution
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to CPG brands featuring buckwheat as a key ingredient
          </p>
          <Link 
            to="/brands"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Brands
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            The Complete Guide to Buckwheat CPG Brands
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-gray-200 leading-relaxed">
            <p className="mb-6">
              Welcome to the definitive resource for buckwheat in the consumer packaged goods industry. As the global buckwheat market reaches $621.9 million in 2024 with a projected 3.1% annual growth rate through 2034, understanding this versatile pseudocereal's role in modern food production has never been more important.
            </p>
            <p className="mb-6">
              Buckwheat has emerged as a cornerstone ingredient for health-conscious consumers and innovative CPG brands alike. This naturally gluten-free pseudocereal offers exceptional nutritional value, containing all nine essential amino acids, making it a complete protein source that rivals traditional grains. Major brands like Bob's Red Mill, Better with Buckwheat, and Eden Foods have recognized buckwheat's potential, incorporating it into diverse product lines that span breakfast cereals, artisanal snacks, stone-ground flours, and authentic Japanese soba noodles.
            </p>
            <p className="mb-6">
              The buckwheat revolution extends beyond nutrition to sustainability. Unlike traditional grains, buckwheat requires minimal water, no synthetic fertilizers, and naturally resists pests, making it an environmentally responsible choice for conscious consumers and forward-thinking brands. Its rapid 70-90 day growth cycle and ability to thrive in poor soils make it an ideal crop for sustainable agriculture practices.
            </p>
            <p className="mb-6">
              Consumer demand for gluten-free alternatives has positioned buckwheat as a premium ingredient in the health food sector. With over 3 million Americans following gluten-free diets and millions more seeking healthier alternatives, buckwheat-based products offer both dietary inclusivity and superior nutrition. The ingredient's nutty flavor profile and versatile applications have enabled brands to create everything from crispy crackers and hearty cereals to protein-rich pancake mixes and gourmet pasta alternatives.
            </p>
            <p>
              Our comprehensive database features detailed profiles of leading buckwheat brands, including company histories, product lines, nutritional information, and availability. Whether you're a health-conscious consumer seeking gluten-free alternatives, a food industry professional researching market trends, or a retailer looking to understand the buckwheat category, our platform provides the insights you need to navigate this growing market segment.
            </p>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Market Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">$621.9M</div>
              <div className="text-gray-300">Global Market Size (2024)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">3.1%</div>
              <div className="text-gray-300">Annual Growth Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">{brandsData.length}</div>
              <div className="text-gray-300">Featured Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="text-orange-400 text-sm font-medium">
                  {category.brands.length} brands →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Discover Brands</h2>
          
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

          {/* Brand Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="mb-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
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
                <div className="flex justify-between items-center">
                  <span className="text-orange-400 text-sm font-medium">{brand.category}</span>
                  <span className="text-gray-400 text-sm">Founded {brand.founded}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="mb-4">
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

