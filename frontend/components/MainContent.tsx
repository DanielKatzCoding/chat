"use client";
import React, { useState, createContext } from 'react';
import { Grid, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import UsersBlock from './users/UsersBlock';
import glassmorphismDarkTheme from '@/app/theme/darkmode';
import { IUser, ChatBound } from './types/types';
import ChatBlock from './chat/ChatBlock';


interface ISelectedUserContext {
  selectedUser?: IUser;
  setSelectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const SelectedUserContext = createContext<ISelectedUserContext>(null!);


function MainContent() {
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const users: IUser[] = [
      { iconPath: '/icons/1.png', name: 'Daniel Katz', chat: [{ text: 'Hi, how are you?', timestamp: '10:00', bound: ChatBound.outgoing }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chat: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chat: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chat: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', chat: [{ text: 'I am tiktoker, instagramer, matimaticer, youtuber', timestamp: '10:05', bound: ChatBound.incoming }] },
      { iconPath: '/icons/3.png', name: 'Aba Karir', chat: []}
    ];


  return (
    <ThemeProvider theme={glassmorphismDarkTheme}>
      <CssBaseline />
      <Grid
        container
        spacing={1}
        height='100%'
        width='100%'
        >
          <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>  
            <Grid size={4} height='100%'>
              <UsersBlock users={users} />
            </Grid>

            <Grid size={8}>
              <ChatBlock chat={selectedUser?.chat} />
            </Grid>
          </SelectedUserContext.Provider>
        </Grid>
    </ThemeProvider>
  )
}

export default MainContent