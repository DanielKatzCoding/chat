"use client"
import React, { useState, useContext } from 'react'
import { StyledChatBlock } from './styles'
import { SelectedUserContext } from '../MainContent'
import { List, ListItem, Typography } from '@mui/material'
import { Chats } from '../mockData/chats'
import Msg from './msg/Msg'

const ChatBlock = () => {
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);
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
                msgs.map((msg, idx) => (
                  <ListItem key={idx} component="div" disableGutters sx={{ display: 'flex', justifyContent: msg.bound === 'outgoing' ? 'flex-end' : 'flex-start' }}>
                    <Msg msg={msg} />
                  </ListItem>
                ))
              )
            : (
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <img src="/static/defaultChat.svg" alt="No user selected" width={400} style={{ marginTop: '10vw' }} />
                  <Typography variant="h4" color="text.disabled">No user selected</Typography>
                </ListItem>
              )
        }
      </List>
    </StyledChatBlock>
  )
}

export default ChatBlock