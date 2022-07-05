import Feed from './Feed/Feed'
import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Widget from './Widget/Widget'
import './Quora.css'

const Quora = () => {
  return (
    <div className='quora'>
     <Header /> 
  <div className="quora__contents">
    <div className="quora__content">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  </div>
     
  
    </div>
  )
}

export default Quora