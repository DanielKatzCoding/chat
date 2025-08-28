"use client"
import React, { useState, useContext } from 'react'
import { StyledChatBlock } from './styles'
import { IMsg } from '../types/types'
import { SelectedUserContext } from '../MainContent'

const ChatBlock = () => {
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);
  return (
    <StyledChatBlock>
      {
        selectedUser ? (
          <div>
            Chat with user ID: {selectedUser}
          </div>
        ) : (
          <div>
            No user selected.
          </div>
        )
      }
    </StyledChatBlock>
  )
}

export default ChatBlock