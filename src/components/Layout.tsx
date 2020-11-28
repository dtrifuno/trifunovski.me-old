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
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
