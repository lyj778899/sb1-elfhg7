import React from 'react';

interface ProjectsProps {
  lang: 'en' | 'zh';
}

function Projects({ lang }: ProjectsProps) {
  const projects = [
    {
      title: lang === 'zh' ? '智能助手系统' : 'AI Assistant System',
      description: lang === 'zh'
        ? '基于人工智能的智能对话系统，提供24/7全天候服务'
        : 'AI-based intelligent dialogue system providing 24/7 service',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: lang === 'zh' ? '数据分析平台' : 'Data Analytics Platform',
      description: lang === 'zh'
        ? '强大的数据分析工具，助力企业决策'
        : 'Powerful data analytics tools for business decision making',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: lang === 'zh' ? '云端协作工具' : 'Cloud Collaboration Tool',
      description: lang === 'zh'
        ? '高效的团队协作平台，提升工作效率'
        : 'Efficient team collaboration platform to improve productivity',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div id="projects" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'zh' ? '精选项目' : 'Featured Projects'}
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {lang === 'zh'
              ? '探索我们的最新项目成果'
              : 'Explore our latest project achievements'}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;