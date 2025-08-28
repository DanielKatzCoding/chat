"use client";
import React, { useState, createContext } from 'react';
import { Grid, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import UsersBlock from './users/UsersBlock';
import glassmorphismDarkTheme from '@/app/theme/darkmode';
import ChatBlock from './chat/ChatBlock';


interface ISelectedUserContext {
  selectedUser?: string;
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedUserContext = createContext<ISelectedUserContext>(null!);


function MainContent() {
  // ID of user.
  const [selectedUser, setSelectedUser] = useState<string>('');

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
              <UsersBlock />
            </Grid>

          <Grid size={8} height="100%">
            <ChatBlock />
          </Grid>
          </SelectedUserContext.Provider>
        </Grid>
    </ThemeProvider>
  )
}

export default MainContent