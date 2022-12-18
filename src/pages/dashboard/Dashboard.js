import React from 'react'
import useRecirectOnLogOut from '../../customHook/useRecirectOnLogOut'

const Dashboard = () => {
  useRecirectOnLogOut("/login")
  return (
    
    <div>Dashboard</div>
  )
}

export default Dashboard