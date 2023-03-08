import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='63fc90b6-dde6-40c0-8b82-7c55d23c3324'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
  )
}

export default ChatsPage