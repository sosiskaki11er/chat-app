import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('63fc90b6-dde6-40c0-8b82-7c55d23c3324', props.user.username, props.user.secret)
  return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
  )
}

export default ChatsPage