import React from 'react'
import { StyledUsersBlock } from './styles'
import { AppBar, Divider, List } from '@mui/material'
import { IUser } from '../types/types' // Assuming you have a types file for IUser
import User from './User'

const UsersBlock = ({ users }: {users: IUser[]}) => {

  return (
    <>
      <StyledUsersBlock>
        <AppBar position="static">
          <h2>Users</h2>
        </AppBar>
        <List>
          {users.map((user, index) => (
            <>
              <User
                key={index}
                iconPath={user.iconPath}
                name={user.name}
                previewComment={user.comments.length > 0 ? user.comments[0].text : ''}
              />
              <Divider variant="inset" component="li" />            
            </>
          ))}
        </List>
      </StyledUsersBlock>
    </>
  )
}

export default UsersBlock