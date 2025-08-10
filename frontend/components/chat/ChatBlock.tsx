"use client"
import React, {useState} from 'react'
import { StyledChatBlock } from './styles'
import { Box } from '@mui/material'
import { IChat } from '../types/types'

const ChatBlock = ({ chats }: {chats: IChat }) => {
  const [onChat, setOnChat] = useState(false);
  const getChatMessages = () => {
    if (!onChat) {
      setOnChat(true);
      return fetch('/static/defaultChat.svg')
        .then(response => response.text())
        .then(svgContent => (
          <Box
            component="svg"
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}  
          >
            {svgContent}
          </Box>
        ))
    }
  }
  return (
    <StyledChatBlock>
      {getChatMessages()}
    </StyledChatBlock>
  )
}

export default ChatBlock