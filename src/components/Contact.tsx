import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'zh';
}

function Contact({ lang }: ContactProps) {
  return (
    <div id="contact" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'zh' ? '联系我们' : 'Contact Us'}
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {lang === 'zh'
              ? '随时与我们联系，我们期待为您服务'
              : 'Get in touch with us, we\'re here to help'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg">
            <div className="absolute top-8 left-8">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {lang === 'zh' ? '电子邮件' : 'Email'}
              </h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                zhouyinde1010@gmail.com
              </p>
            </div>
          </div>

          <div className="relative rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg">
            <div className="absolute top-8 left-8">
              <Phone className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {lang === 'zh' ? '电话' : 'Phone'}
              </h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                +86  184 8809 4201
              </p>
            </div>
          </div>

          <div className="relative rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="absolute top-8 left-8">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {lang === 'zh' ? '地址' : 'Address'}
              </h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                {lang === 'zh'
                  ? '缅甸瓦邦孟波盛世集团'
                  : 'Tech Park, Chaoyang District, Beijing, China'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
          <form className="p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '姓名' : 'Name'}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '电子邮件' : 'Email'}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {lang === 'zh' ? '消息' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {lang === 'zh' ? '发送消息' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;