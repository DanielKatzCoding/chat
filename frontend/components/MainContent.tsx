"use client"
import React, { useState } from 'react';
import { Grid, Paper, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import UsersBlock from './users/UsersBlock';
import glassmorphismDarkTheme from '@/app/theme/darkmode';
import { IUser } from './types/types'; // Assuming you have a types file for IUser

function MainContent() {
  const [users, setUsers] = useState<IUser[]>(
    [
      { iconPath: '/icons/1.png', name: 'Daniel Katz', comments: [{ text: 'Hi, how are you?', timestamp: '10:00' }] },
      { iconPath: '/icons/2.png', name: 'Lior Sorin', comments: [{ text: 'I am tiktoker, instegramer, matimaticer, youtuber', timestamp: '10:05' }] }
    ]
  );

  return (
    <ThemeProvider theme={glassmorphismDarkTheme}>
      <CssBaseline />
      <Grid
        container
        spacing={1}
        sx={{ height: '100%', width: '100%' }}
        >
          <Grid size={4}>
            <UsersBlock users={users} />
          </Grid>

          <Grid size={8}>
            <Paper variant="outlined">
              Another Hello World
            </Paper>
          </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default MainContent