import React from 'react'
import { StyledUsersBlock } from './styles'
import { AppBar, Divider, List } from '@mui/material'
import User from './User'
import { Users } from '../mockData/user'
import { Chats } from '../mockData/chats'


const UsersBlock = () => {

  return (
    <StyledUsersBlock style={{ height: '100%', overflow: 'hidden' }}>
      <AppBar position="static" sx={{ height: '10%' }}>
        <h2>Users</h2>
      </AppBar>
      <List sx={{ height: '90%', overflowY: 'auto' }}>
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
      </List>
    </StyledUsersBlock>
  );
}

export default UsersBlock