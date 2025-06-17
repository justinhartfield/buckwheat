import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailPage from './pages/BrandDetailPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import GuidesPage from './pages/GuidesPage';
import GuideDetailPage from './pages/GuideDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:slug" element={<BrandDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryDetailPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:slug" element={<GuideDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

