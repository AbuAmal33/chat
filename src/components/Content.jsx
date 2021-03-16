import React from 'react'
import Contacts from './Contacts'
import Messages from './Messages'
import Profile from './Profile'

function Content () {
  return (
    <div className="container">
      <div className="row">
        <Contacts />
        <Messages />
        <Profile />
      </div>
    </div>
  )
}

export default Content