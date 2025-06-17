import { Link } from 'react-router-dom';
import { categoryData, brandsData } from '../data/brands';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Buckwheat Product Categories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the diverse range of buckwheat products across different food categories
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-gray-200 leading-relaxed mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Comprehensive Guide to Buckwheat Product Categories
            </h2>
            <p className="mb-6">
              The buckwheat product landscape encompasses a remarkable diversity of food categories, each leveraging the pseudocereal's unique nutritional and culinary properties to serve specific consumer needs. From traditional applications rooted in centuries-old culinary traditions to innovative modern formulations that push the boundaries of food technology, buckwheat has proven its versatility across virtually every segment of the food industry.
            </p>
            <p className="mb-6">
              The flour and baking category represents the foundation of buckwheat's commercial success, with stone-ground flours and specialty baking mixes enabling both professional bakers and home cooks to incorporate buckwheat's nutritional benefits into their favorite recipes. Leading brands in this category have perfected milling techniques that preserve buckwheat's delicate flavor profile while ensuring consistent performance in baking applications.
            </p>
            <p className="mb-6">
              Breakfast and cereal products have emerged as a significant growth category, with manufacturers developing innovative formulations that combine buckwheat's complete protein profile with appealing flavors and textures. These products serve the growing market of health-conscious consumers seeking nutritious alternatives to conventional breakfast options while maintaining the convenience and taste appeal that drive morning meal choices.
            </p>
            <p className="mb-6">
              The pasta and noodles category showcases buckwheat's cultural significance, particularly in Asian cuisine where soba noodles represent centuries of culinary tradition. Modern manufacturers have expanded this category to include fusion products that combine traditional buckwheat noodle-making techniques with contemporary flavors and dietary requirements, creating products that serve both cultural authenticity and modern nutritional needs.
            </p>
            <p>
              Snacks and specialty products represent the newest frontier in buckwheat product development, with innovative brands creating everything from artisanal crackers to protein-enhanced functional foods. These categories demonstrate buckwheat's potential to serve emerging consumer trends while maintaining the nutritional integrity and clean label appeal that define premium health food products.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.map((category) => {
              const categoryBrands = brandsData.filter(brand => 
                category.brands.includes(brand.id)
              );
              
              return (
                <Link
                  key={category.id}
                  to={`/categories/${category.slug}`}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-xl"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkNhdGVnb3J5PC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 text-sm font-medium">
                      {categoryBrands.length} brands
                    </span>
                    <span className="text-gray-400 text-sm">Explore →</span>
                  </div>
                  
                  {/* Brand Preview */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-400 mb-2">Featured brands:</div>
                    <div className="flex flex-wrap gap-1">
                      {categoryBrands.slice(0, 3).map((brand) => (
                        <span key={brand.id} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {brand.name}
                        </span>
                      ))}
                      {categoryBrands.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{categoryBrands.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;

