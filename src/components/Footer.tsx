import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'zh';
}

function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">
              {lang === 'zh' ? '关于我们' : 'About Us'}
            </h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              {lang === 'zh'
                ? '盛世小杰致力于为客户提供最优质的技术解决方案'
                : 'Shengshi Xiaojie is committed to providing the best technical solutions for our clients'}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">
              {lang === 'zh' ? '快速链接' : 'Quick Links'}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  {lang === 'zh' ? '特色' : 'Features'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  {lang === 'zh' ? '项目' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="#blog" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  {lang === 'zh' ? '博客' : 'Blog'}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">
              {lang === 'zh' ? '关注我们' : 'Follow Us'}
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Github</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-base text-gray-400 dark:text-gray-300">
              {lang === 'zh' ? '联系我们：' : 'Contact us: '} contact@shengshixiaojie.com
            </p>
          </div>
          <p className="mt-8 text-base text-gray-400 dark:text-gray-300 md:mt-0 md:order-1">
            &copy; 2024 {lang === 'zh' ? '盛世小杰. 保留所有权利。' : 'Shengshi Xiaojie. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;