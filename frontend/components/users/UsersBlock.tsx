import React from 'react'
import { StyledUsersBlock, StyledList } from './styles'
import { AppBar, Divider, List, Typography } from '@mui/material'
import User from './User'
import { Users } from '../mockData/user'
import { Chats } from '../mockData/chats'


const UsersBlock = () => {

  return (
    <StyledUsersBlock style={{ height: '100%', overflow: 'hidden' }}>
      <AppBar position="static" sx={{ height: '10%', justifyContent: 'center' }}>
        <Typography variant="h2" color="textPrimary" sx={{ padding: 1 }}>
          Users
        </Typography>
      </AppBar>
      <StyledList sx={{ height: '90%', overflowY: 'auto' }}>
        {
          Users.map((user) => (
            <React.Fragment key={user.id}>
              <User
                user={user}
                msgs={
                  Chats.filter(chat => chat.id === user.id)[0]?.msgs || []
                }
              />
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
      </StyledList>
    </StyledUsersBlock>
  );
}

export default UsersBlock