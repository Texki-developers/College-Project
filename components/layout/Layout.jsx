import React from 'react'
import TopBar from '../topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <TopBar/>
        <Sidebar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout