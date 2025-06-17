import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Star, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { brandsData, categoryData, marketStats } from './data/brands.js'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           brand.category.some(cat => cat === selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Buckwheat.com</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-white hover:text-amber-400">Home</Button>
              <Button variant="ghost" className="text-white hover:text-amber-400">Brands</Button>
              <Button variant="ghost" className="text-white hover:text-amber-400">Categories</Button>
              <Button variant="ghost" className="text-white hover:text-amber-400">About</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
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
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 text-lg">
            Explore Brands
          </Button>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 px-4">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryData.map((category) => (
              <Card 
                key={category.id} 
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
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

      {/* Search and Filter */}
      <section className="py-16 px-4">
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
            </div>
          )}
        </div>
      </section>

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
          <p className="text-gray-500 text-sm">
            © 2024 Buckwheat.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

