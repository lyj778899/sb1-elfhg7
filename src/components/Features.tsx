import React from 'react';
import { Code, Coffee, BookOpen, User } from 'lucide-react';

interface FeaturesProps {
  lang: 'en' | 'zh';
}

function Features({ lang }: FeaturesProps) {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: lang === 'zh' ? '技术创新' : 'Technical Innovation',
      description: lang === 'zh' 
        ? '采用最新技术栈，提供卓越的解决方案'
        : 'Adopting cutting-edge technology stack for excellent solutions'
    },
    {
      icon: <Coffee className="h-6 w-6 text-indigo-600" />,
      title: lang === 'zh' ? '专业服务' : 'Professional Service',
      description: lang === 'zh'
        ? '专业团队提供全方位技术支持'
        : 'Comprehensive technical support from professional team'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: lang === 'zh' ? '持续学习' : 'Continuous Learning',
      description: lang === 'zh'
        ? '保持学习，不断进步，追求卓越'
        : 'Keep learning, keep improving, pursue excellence'
    },
    {
      icon: <User className="h-6 w-6 text-indigo-600" />,
      title: lang === 'zh' ? '用户至上' : 'User First',
      description: lang === 'zh'
        ? '以用户需求为中心，提供最佳体验'
        : 'User-centric approach for the best experience'
    }
  ];

  return (
    <div id="features" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {lang === 'zh' ? '核心特色' : 'Core Features'}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'zh' ? '更好的解决方案' : 'Better Solutions'}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            {lang === 'zh'
              ? '我们提供全方位的技术服务，助力您的业务发展'
              : 'We provide comprehensive technical services to help your business grow'}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </p>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;