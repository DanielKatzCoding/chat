"use client"
import React, { useContext } from 'react'
import { StyledChatBlock } from './styles'
import { SelectedUserContext } from '../MainContent'
import { List, ListItem, Typography } from '@mui/material'
import { Chats } from '../mockData/chats'
import Image from 'next/image'
import Msg from './msg/Msg'

const ChatBlock = () => {
  const { selectedUser } = useContext(SelectedUserContext);
  const msgs =
    selectedUser
      ? Chats.filter(chat => chat.id === selectedUser)[0]?.msgs || []
      : [];

  return (
    <StyledChatBlock sx={{ height: '100%', padding: 2, overflowY: 'auto'}}>
      <List>
        {
          selectedUser
            ? (
                msgs.length != 0
                  ? (
                    msgs.map((msg, idx) => (
                    <ListItem key={idx} component="div" disableGutters sx={{ display: 'flex', justifyContent: msg.bound === 'outgoing' ? 'flex-end' : 'flex-start' }}>
                      <Msg msg={msg} />
                    </ListItem>
                    )
                  ))
                : (
                  <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Image src="/static/emptyChat.svg" alt="No messages yet" width={400} height={400} style={{ marginTop: '10vh' }} />
                    <Typography variant="h4" color="text.disabled">No messages yet</Typography>
                  </ListItem>
                )                
              )
            : (
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Image src="/static/defaultChat.svg" alt="No user selected" width={500} height={500} style={{ marginTop: '10vh' }} />
                  <Typography variant="h4" color="text.disabled">No user selected</Typography>
                </ListItem>
              )
        }
      </List>
    </StyledChatBlock>
  )
}

export default ChatBlock