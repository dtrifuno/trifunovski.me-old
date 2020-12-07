import React from 'react'
import clsx from 'clsx'

import Footer from './Footer/'
import Header from './Header/'

import '../scss/index.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={clsx('flex', 'flex-col', 'h-screen', 'justify-between')}>
      <Header
        className={clsx('border-b-2', 'border-orange-600')}
        links={[
          { title: 'About', to: '/' },
          { title: 'Projects', to: '/projects' },
          { title: 'Blog', to: '/blog' },
        ]}
      />
      <main className={clsx('mb-auto')}>
        <div className={clsx('px-6')}>{children}</div>
      </main>
      <Footer className={clsx('border-t-2', 'border-orange-600')} />
    </div>
  )
}

export default Layout
