import React, { useState } from 'react';
import { Menu, X, Github, Twitter, Mail, Moon, Sun, ChevronDown, Search, User, BookOpen, Code, Coffee } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'en' | 'zh'>('zh');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                盛世小杰
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                {lang === 'zh' ? '特色' : 'Features'}
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                {lang === 'zh' ? '项目' : 'Projects'}
              </a>
              <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                {lang === 'zh' ? '博客' : 'Blog'}
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                {lang === 'zh' ? '联系' : 'Contact'}
              </a>
              
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {lang === 'zh' ? 'EN' : '中文'}
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '特色' : 'Features'}
              </a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '项目' : 'Projects'}
              </a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '博客' : 'Blog'}
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '联系' : 'Contact'}
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Projects lang={lang} />
        <Blog lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;