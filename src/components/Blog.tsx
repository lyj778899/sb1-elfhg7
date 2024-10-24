import React from 'react';

interface BlogProps {
  lang: 'en' | 'zh';
}

function Blog({ lang }: BlogProps) {
  const posts = [
    {
      title: lang === 'zh' ? '人工智能的未来发展' : 'The Future of AI',
      excerpt: lang === 'zh'
        ? '探讨人工智能技术的发展趋势和未来方向'
        : 'Exploring the development trends and future directions of AI technology',
      date: '2024-03-15',
      author: lang === 'zh' ? '张明' : 'Zhang Ming',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: lang === 'zh' ? '云计算技术革新' : 'Cloud Computing Innovation',
      excerpt: lang === 'zh'
        ? '解析云计算技术的最新突破和应用场景'
        : 'Analyzing the latest breakthroughs and applications in cloud computing',
      date: '2024-03-10',
      author: lang === 'zh' ? '李华' : 'Li Hua',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div id="blog" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'zh' ? '最新博客' : 'Latest Blog Posts'}
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {lang === 'zh'
              ? '了解最新的技术趋势和行业动态'
              : 'Stay updated with latest tech trends and industry news'}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;