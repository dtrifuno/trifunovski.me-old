import clsx from 'clsx'
import React from 'react'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import useProjects from '../hooks/useProjects'

const ProjectsPage: React.FC = () => {
  const projects = useProjects()
  return (
    <Layout>
      <SEO title="Projects" />
      <div className={clsx('my-3 md:my-5')}>
        <div className={clsx('max-w-4xl mx-auto')}>
          <h2
            className={clsx(
              'mb-2 lg:mb-4',
              'text-3xl lg:text-4xl',
              'font-bold'
            )}
          >
            Projects
          </h2>
          {projects.map((project, idx) => (
            <ProjectCard
              project={project}
              reversed={idx % 2 == 1}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
