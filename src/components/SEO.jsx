import { Helmet } from 'react-helmet-async';

export const SEOHead = ({ 
  title = "Buckwheat.com - Discover the Buckwheat Revolution",
  description = "Your comprehensive guide to CPG brands featuring buckwheat as a key ingredient. Discover premium buckwheat products from leading brands.",
  keywords = "buckwheat, CPG brands, gluten-free, organic, healthy food, buckwheat flour, soba noodles, buckwheat cereal",
  image = "/og-image.jpg",
  url = "https://buckwheat.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Buckwheat.com",
    "description": description,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Buckwheat.com" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Buckwheat.com" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const BrandSEO = ({ brand }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brand.name,
    "description": brand.description,
    "url": brand.website,
    "foundingDate": brand.founded.toString(),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": brand.headquarters
    },
    "makesOffer": brand.products.map(product => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price?.replace('$', ''),
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <Helmet>
      <title>{brand.seo.title}</title>
      <meta name="description" content={brand.seo.description} />
      <meta name="keywords" content={brand.seo.keywords.join(', ')} />
      <meta property="og:title" content={brand.seo.title} />
      <meta property="og:description" content={brand.seo.description} />
      <meta property="og:image" content={brand.logo} />
      <meta property="og:type" content="article" />
      <link rel="canonical" href={`https://buckwheat.com/brands/${brand.slug}`} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const CategorySEO = ({ category }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category.name,
    "description": category.longDescription,
    "url": `https://buckwheat.com/categories/${category.slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `${category.name} Brands`,
      "description": category.description
    }
  };

  return (
    <Helmet>
      <title>{category.seo.title}</title>
      <meta name="description" content={category.seo.description} />
      <meta name="keywords" content={category.seo.keywords.join(', ')} />
      <meta property="og:title" content={category.seo.title} />
      <meta property="og:description" content={category.seo.description} />
      <meta property="og:type" content="article" />
      <link rel="canonical" href={`https://buckwheat.com/categories/${category.slug}`} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const ProductSEO = ({ product, brand }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": brand.name
    },
    "offers": {
      "@type": "Offer",
      "price": product.price?.replace('$', ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "nutrition": product.nutrition && {
      "@type": "NutritionInformation",
      "calories": product.nutrition.calories,
      "proteinContent": product.nutrition.protein,
      "carbohydrateContent": product.nutrition.carbs,
      "fiberContent": product.nutrition.fiber,
      "fatContent": product.nutrition.fat
    }
  };

  return (
    <Helmet>
      <title>{`${product.name} by ${brand.name} | Buckwheat.com`}</title>
      <meta name="description" content={product.description} />
      <meta property="og:title" content={`${product.name} by ${brand.name}`} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={product.image} />
      <meta property="og:type" content="product" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

