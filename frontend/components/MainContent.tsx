"use client"
import React, { useState } from 'react';
import { Grid, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import UsersBlock from './users/UsersBlock';
import glassmorphismDarkTheme from '@/app/theme/darkmode';
import { IUser, ChatBound } from './types/types'; // Assuming you have a types file for IUser
import ChatBlock from './chat/ChatBlock';

function MainContent() {
  const [users, setUsers] = useState<IUser[]>(
    [
      { iconPath: '/icons/1.png', name: 'Daniel Katz', chats: [{ text: 'Hi, how are you?', timestamp: '10:00', bound: ChatBound.outgoing }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chats: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chats: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chats: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chats: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
    ]
  );

  return (
    <ThemeProvider theme={glassmorphismDarkTheme}>
      <CssBaseline />
      <Grid
        container
        spacing={1}
        height='100%'
        width='100%'
        >
          <Grid size={4} height='100%'>
            <UsersBlock users={users} />
          </Grid>

          <Grid size={8}>
            {/* <ChatBlock /> */}
          </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default MainContent