"use client"
import React from 'react';
import { Grid, Paper, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Users from './users/UsersBlock';
import glassmorphismDarkTheme from '@/app/theme/darkmode';


function MainContent() {
  return (
    <ThemeProvider theme={glassmorphismDarkTheme}>
      <CssBaseline />
      <Grid
        container
        spacing={1}
        sx={{ height: '100%', width: '100%' }}
        >
          <Grid size={4}>
            <Users />
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