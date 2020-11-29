import React from 'react'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
// import ProjectBox from '../components/project-box'
// import SEO from '../components/seo'
import { useProjects } from '../hooks/useProjects'

const ProjectsPage: React.FC = () => {
  const projects = useProjects()
  console.log(projects)
  return (
    <Layout>
      {/* <SEO title="Projects" /> */}
      <div className="max-w-5xl mx-auto">
        <h2>Recent Projects</h2>
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
