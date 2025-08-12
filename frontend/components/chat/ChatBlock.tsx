"use client"
import React, {useState} from 'react'
import { StyledChatBlock } from './styles'
import { Box } from '@mui/material'
import { IMsg } from '../types/types'

const ChatBlock = ({ chat }: {chat: IMsg[] | undefined }) => {
  return (
    <StyledChatBlock>
      
    </StyledChatBlock>
  )
}

export default ChatBlock