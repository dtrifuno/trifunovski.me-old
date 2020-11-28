import React from 'react'

import Header from '../components/Header'

import './scss/index.scss'

const Home: React.FC = () => {
  return (
    <>
      <Header
        links={[
          { title: 'About', to: '/' },
          { title: 'Projects', to: '/projects' },
          { title: 'Blogs', to: '/blog' },
        ]}
      />
      <div className="pl-3 pt-4">Hello world!</div>
    </>
  )
}

export default Home
