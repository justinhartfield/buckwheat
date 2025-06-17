import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Buckwheat Industry Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert analysis, market trends, and comprehensive guides to the buckwheat CPG industry
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
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

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkJsb2cgUG9zdDwvdGV4dD4KPHN2Zz4K';
                    }}
                  />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                  <span>{post.author}</span>
                  <span>{post.readTime} min read</span>
                </div>
                
                <div className="text-xs text-gray-500">
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

