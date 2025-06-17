import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Star, MapPin, Calendar, ExternalLink, Clock, User, ArrowRight } from 'lucide-react'
import { brandsData, categoryData, marketStats } from './data/brands.js'
import { blogPosts, seoContent } from './data/blog.js'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState('home')

  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           brand.category.some(cat => cat === selectedCategory)
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Discover the
            </span>
            <br />
            <span className="text-white">Buckwheat Revolution</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your comprehensive guide to CPG brands featuring buckwheat as a key ingredient
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection('brands')}
          >
            Explore Brands
          </Button>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-black/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              The Complete Guide to Buckwheat CPG Brands
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
              {seoContent.homepage.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section id="insights" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketStats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-300">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryData.map((category) => (
              <Card 
                key={category.id} 
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setCurrentPage('categories')
                  setSelectedCategory(category.id)
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <CardTitle className="text-white">{category.name}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {category.brandCount} brands
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 px-4 bg-black/10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Insights</h2>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => setCurrentPage('blog')}
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-white text-xl leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  const renderBrandsPage = () => (
    <>
      {/* Brands Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Leading Buckwheat <span className="text-amber-400">CPG Brands</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the companies driving innovation in the $621.9M buckwheat market
          </p>
        </div>
      </section>

      {/* SEO Content for Brands */}
      <section className="py-16 px-4 bg-black/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Complete Directory of Buckwheat Brands
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
              {seoContent.brands.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section id="brands" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Brands</h2>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="mb-2"
            >
              All Categories
            </Button>
            {categoryData.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <Card key={brand.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{brand.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>Founded {brand.founded}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{brand.headquarters}</span>
                      </div>
                    </div>
                    {brand.isOrganic && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Organic
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{brand.description}</p>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {brand.category.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  {/* Products */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Featured Products:</h4>
                    {brand.products.slice(0, 2).map((product) => (
                      <div key={product.id} className="text-sm text-gray-300 mb-1">
                        • {product.name} - {product.price}
                      </div>
                    ))}
                  </div>

                  {/* Website Link */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => window.open(brand.website, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No brands found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )

  const renderCategoriesPage = () => (
    <>
      {/* Categories Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Buckwheat Product <span className="text-amber-400">Categories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore diverse buckwheat applications across snacks, flours, cereals, pasta and more
          </p>
        </div>
      </section>

      {/* SEO Content for Categories */}
      <section className="py-16 px-4 bg-black/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Complete Guide to Buckwheat Product Categories
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
              {seoContent.categories.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.map((category) => (
              <Card 
                key={category.id} 
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentPage('brands')
                  setTimeout(() => scrollToSection('brands'), 100)
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <CardTitle className="text-white text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {category.brandCount} brands available
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  const renderBlogPage = () => (
    <>
      {/* Blog Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Buckwheat <span className="text-amber-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Expert insights, market analysis, and trends in the buckwheat CPG industry
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-white text-xl leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white mb-12">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-white text-lg leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Buckwheat.com</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant="ghost" 
                className={`text-white hover:text-amber-400 ${currentPage === 'home' ? 'text-amber-400' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:text-amber-400 ${currentPage === 'brands' ? 'text-amber-400' : ''}`}
                onClick={() => setCurrentPage('brands')}
              >
                Brands
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:text-amber-400 ${currentPage === 'categories' ? 'text-amber-400' : ''}`}
                onClick={() => setCurrentPage('categories')}
              >
                Categories
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:text-amber-400 ${currentPage === 'blog' ? 'text-amber-400' : ''}`}
                onClick={() => setCurrentPage('blog')}
              >
                Blog
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'brands' && renderBrandsPage()}
      {currentPage === 'categories' && renderCategoriesPage()}
      {currentPage === 'blog' && renderBlogPage()}

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌾</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Buckwheat.com</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Your comprehensive guide to buckwheat CPG brands and products
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white"
              onClick={() => setCurrentPage('home')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white"
              onClick={() => setCurrentPage('brands')}
            >
              Brands
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white"
              onClick={() => setCurrentPage('categories')}
            >
              Categories
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white"
              onClick={() => setCurrentPage('blog')}
            >
              Blog
            </Button>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Buckwheat.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

