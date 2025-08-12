"use client"
import React, { useContext } from 'react'
import { ListItem, ListItemAvatar, ListItemText, Typography, Box } from '@mui/material';
import { Icon } from '../icons/Icon';
import { SelectedUserContext } from '../MainContent';
import { IUser } from '../types/types';

const User = ({user}: {user: IUser}) => {
  const {selectedUser, setSelectedUser} = useContext(SelectedUserContext);
  return (
      <ListItem
        sx={{
          alignItems: 'stretch'
        }}
        onClick={() => {}}
      >
        <ListItemAvatar sx={{ marginRight: 1 }}>
          <Icon iconPath={user.iconPath} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', justifyContent: 'flex-start' }}>
              {user.name}
            </Typography>
          }
          secondary={
            <Typography
              variant="body2"
              color="text.disabled"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitLineClamp: 2,         // limit to 2 lines
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                flex: 1,
                marginRight: 1
              }}
              >
              {user.chat.length > 0 ? user.chat[user.chat.length-1].text : ''}
              
              {user.chat.length > 0 ? user.chat[user.chat.length-1].timestamp : ''}

            </Typography>
          }
        />
      </ListItem>
  )
}

export default User