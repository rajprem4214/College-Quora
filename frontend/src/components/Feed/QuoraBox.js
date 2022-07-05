import { Avatar } from '@mui/material'
import React from 'react'
import './QuoraBox.css'

const QuoraBox = () => {
  return (
    <div className="quoraBox">
    <div className="quoraBox__info">
      <Avatar/>
    </div>
    <div className="quoraBox__quora">
      <p>What do you want to ask or share ?</p>
    </div>
  </div>
  )
}

export default QuoraBox