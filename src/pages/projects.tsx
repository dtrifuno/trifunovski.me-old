import React from 'react'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../hooks/useProjects'

const ProjectsPage: React.FC = () => {
  const projects = useProjects()
  return (
    <Layout>
      {/* <SEO title="Projects" /> */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">
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
    </Layout>
  )
}

export default ProjectsPage
