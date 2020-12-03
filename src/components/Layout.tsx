import React from 'react'

import Footer from './Footer'
import Header from './Header'

import '../scss/index.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header
        links={[
          { title: 'About', to: '/' },
          { title: 'Projects', to: '/projects' },
          { title: 'Blog', to: '/blog' },
        ]}
      />
      <main className="mb-auto">
        {/* <div className="container mx-auto py-4 lg:py-8 px-6">{children}</div> */}
        <div className="px-6">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
