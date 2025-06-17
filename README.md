# Buckwheat.com - Enhanced CPG Brand Directory

A comprehensive, SEO-optimized website showcasing major CPG brands that feature buckwheat as a key ingredient. Built with cutting-edge design principles, real product photography, detailed brand pages, and advanced SEO features.

## 🌐 Live Demo

**Enhanced Website:** [https://qmftcsya.manus.space](https://qmftcsya.manus.space)

## ✨ Enhanced Features

### 🎨 Modern Design & UX
- **Glassmorphism Effects**: Beautiful translucent cards and navigation with backdrop blur
- **Dark Mode Theme**: Sophisticated dark color scheme with vibrant accent colors
- **Gradient Backgrounds**: Stunning amber-to-orange gradients throughout
- **Animated Particles**: Floating particles in the hero section for dynamic visual appeal
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Real Product Photography**: High-quality images of actual buckwheat products

### 🔍 Advanced Functionality
- **React Router**: Full routing with dedicated pages for brands and categories
- **Real-time Search**: Find specific brands instantly across all pages
- **Category Filtering**: Filter by product categories with dedicated category pages
- **Brand Detail Pages**: Comprehensive brand information with company stories, key facts, and product catalogs
- **Category Detail Pages**: Dedicated pages for each product category with detailed descriptions
- **Product Modals**: Interactive product detail overlays with nutrition information
- **Smooth Animations**: Hover effects, transitions, and micro-interactions

### 🔍 SEO Optimization
- **React Helmet Async**: Dynamic meta tags and structured data
- **Schema.org Markup**: Rich snippets for brands, products, and categories
- **Open Graph Tags**: Social media optimization
- **Twitter Cards**: Enhanced social sharing
- **Canonical URLs**: Proper URL structure for search engines
- **Sitemap Ready**: SEO-friendly routing structure
- **Page-Specific SEO**: Unique meta tags for every page

### 📊 Comprehensive Content
- **6 Major Brands**: Detailed information on leading buckwheat CPG companies
- **Real Product Data**: Actual product information, pricing, and nutrition facts
- **Market Insights**: Current market size, growth rates, and industry statistics
- **Product Categories**: Well-organized categorization system with dedicated pages
- **Brand Profiles**: Company history, product lines, distribution channels, and key facts
- **High-Quality Images**: Real product photography from major retailers

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with Vite
- **Routing**: React Router DOM for SPA navigation
- **SEO**: React Helmet Async for dynamic meta tags
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Animations**: Framer Motion and custom CSS animations
- **Build Tool**: Vite for fast development and optimized production builds

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd buckwheat-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Enhanced Project Structure

```
buckwheat-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   │   └── products/      # Real product photography
│   ├── components/        # React components
│   │   ├── ui/           # UI component library
│   │   ├── SEO.jsx       # SEO components with schema markup
│   │   ├── BrandDetailPage.jsx    # Brand detail pages
│   │   └── CategoryDetailPage.jsx # Category detail pages
│   ├── data/             # Enhanced brand data with SEO
│   │   └── brands.js     # Comprehensive brand and category data
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application with routing
│   ├── App.css           # Global styles and animations
│   └── main.jsx          # Application entry point
├── docs/                  # Documentation files
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🏢 Featured Brands with Real Products

### Emerging Brands
- **Better with Buckwheat** - Maine-grown buckwheat snacks (tripled sales in 2023)
  - Sea Salt Crackers, Everything Crackers, Rosemary & Herbs
- **King Soba** - Specialist buckwheat noodles with gluten-free focus
  - 100% Buckwheat Noodles
- **Great River Organic Milling** - Artisanal stone-ground flours
  - Organic Buckwheat Flour

### Established Brands
- **Bob's Red Mill** - Leading whole grain company (founded 1978)
  - Organic Buckwheat Flour, Buckwheat Pancake Mix, Creamy Buckwheat Cereal
- **Eden Foods** - Authentic Japanese soba noodles (founded 1968)
  - 100% Buckwheat Soba, Organic Buckwheat Soba
- **Arrowhead Mills** - Organic buckwheat cereals (founded 1960)
  - Maple Buckwheat Flakes

## 📊 Market Data

- **Market Size**: $621.9M global buckwheat market value (2024)
- **Growth Rate**: 3.1% expected CAGR (2025-2034)
- **Major Brands**: 25+ leading CPG companies using buckwheat

## 🎯 Product Categories with Dedicated Pages

- 🍪 **Snacks & Crackers** - Premium buckwheat-based snacks and crackers
- 🌾 **Flours & Baking** - Stone-ground buckwheat flours for baking
- 🥣 **Cereals & Breakfast** - Nutritious buckwheat breakfast cereals
- 🍜 **Pasta & Noodles** - Traditional and modern buckwheat noodles
- 🥞 **Pancake Mixes** - Hearty buckwheat pancake and waffle mixes

## 🔧 SEO Features

### Schema.org Structured Data
- **Organization Schema**: For each brand with founding date, location, products
- **Product Schema**: For individual products with pricing and nutrition
- **WebSite Schema**: For the main site with search functionality
- **CollectionPage Schema**: For category pages

### Meta Tags & Social Sharing
- **Dynamic Titles**: Unique, SEO-optimized titles for every page
- **Meta Descriptions**: Compelling descriptions for search results
- **Open Graph**: Optimized for Facebook, LinkedIn sharing
- **Twitter Cards**: Enhanced Twitter sharing experience
- **Canonical URLs**: Proper URL structure for search engines

### Technical SEO
- **React Router**: Clean URLs for all pages
- **React Helmet Async**: Dynamic meta tag management
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Optimized images and code splitting
- **Semantic HTML**: Proper heading structure and accessibility

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `pnpm run build`
3. Publish directory: `dist`

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Best Practices Implemented

- **Page Speed**: Optimized images and code splitting
- **Mobile-First**: Responsive design with touch support
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive alt text for all images
- **Internal Linking**: Strategic linking between related pages
- **Schema Markup**: Rich snippets for enhanced search results
- **Meta Tags**: Unique, compelling meta descriptions
- **URL Structure**: Clean, descriptive URLs for all pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

## 🙏 Acknowledgments

- Real product images sourced from official brand websites and authorized retailers
- Brand research and market data compiled from various industry sources
- SEO optimization following Google's latest guidelines
- Design inspiration from modern web design trends and glassmorphism principles

---

**Built with ❤️ for the buckwheat revolution - Now with enhanced SEO, real products, and comprehensive brand pages**

