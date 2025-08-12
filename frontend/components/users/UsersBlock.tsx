import React from 'react'
import { StyledUsersBlock } from './styles'
import { AppBar, Divider, List } from '@mui/material'
import { IUser } from '../types/types' // Assuming you have a types file for IUser
import User from './User'
import { v4 as uuidv4 } from 'uuid';
import { log } from 'console'


// Assign a random UUID to each user once
const getUsersWithIds = (users: IUser[]) => {
  return users.map(user => ({ ...user, _uuid: uuidv4() }));
};

const UsersBlock = ({ users }: { users: IUser[] }) => {
  const usersWithIds = React.useMemo(() => getUsersWithIds(users), [users]);

  return (
    <StyledUsersBlock style={{ height: '100%', overflow: 'hidden' }}>
      <AppBar position="static" sx={{ height: '10%' }}>
        <h2>Users</h2>
      </AppBar>
      <List sx={{ height: '90%', overflowY: 'auto' }}>
        {
          usersWithIds.map((user) => (
            <React.Fragment key={user._uuid}>
              <User                
                user={user}
              />
              <Divider variant="inset" component="li" />
            </React.Fragment>
        ))}
      </List>
    </StyledUsersBlock>
  );
}

export default UsersBlock