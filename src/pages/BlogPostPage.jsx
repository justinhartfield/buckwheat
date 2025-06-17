import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-orange-400 hover:text-orange-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="text-orange-400 hover:text-orange-300 mb-6 inline-block">
            ← Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-white">{post.author}</div>
                <div className="text-sm text-gray-400">{post.authorBio}</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="text-sm text-gray-400">
              {post.readTime} min read
            </div>
          </div>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiPkJsb2cgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
            }}
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-gray-200 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover rounded-xl mb-4"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDMwMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTI4IiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iNjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+QmxvZyBJbWFnZTwvdGV4dD4KPHN2Zz4K';
                    }}
                  />
                  <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium mb-2">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>{relatedPost.author}</span>
                    <span>{relatedPost.readTime} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;

