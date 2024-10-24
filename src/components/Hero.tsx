import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'zh';
}

function Hero({ lang }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  {lang === 'zh' ? '盛世小杰' : 'Shengshi Xiaojie'}
                </span>
                <span className="block text-indigo-600 xl:inline">
                  {lang === 'zh' ? '创新科技' : 'Innovation & Technology'}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {lang === 'zh'
                  ? '探索科技前沿，引领创新未来。我们致力于打造卓越的技术解决方案，为您的业务赋能。'
                  : 'Exploring the frontiers of technology, leading innovation into the future. We are committed to creating excellent technical solutions to empower your business.'}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {lang === 'zh' ? '开始探索' : 'Get Started'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Technology"
        />
      </div>
    </div>
  );
}

export default Hero;