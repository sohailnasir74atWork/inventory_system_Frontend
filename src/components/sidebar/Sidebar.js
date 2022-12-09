import React from 'react'

const Sidebar = (children) => {
  return (
    <div className='layout'>
        <div className='sidebar'>Sidebar</div>
    <main>{children}</main>
    </div>
  )
}

export default Sidebar