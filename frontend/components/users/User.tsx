"use client"
import React, { useContext } from 'react'
import { ListItemAvatar, Typography } from '@mui/material';
import { StyledListItem, StyledListItemText } from './styles';
import { Icon } from '../icons/Icon';
import { SelectedUserContext } from '../MainContent';
import { IMsg, IUser } from '../types/types';

const User = ({ user, msgs }: { user: IUser, msgs: IMsg[] }) => {
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);
  return (
    <StyledListItem
      sx={{
        alignItems: 'stretch'
      }}
      onClick={() => { setSelectedUser(user.id) }}
    >
      <ListItemAvatar sx={{ marginRight: 1 }}>
        <Icon iconPath={user.iconPath} />
      </ListItemAvatar>
      <StyledListItemText
        primary={
          <Typography variant="h5" sx={{ fontWeight: 'bold', justifyContent: 'flex-start' }}>
            {user.name}
          </Typography>
        }
        secondary={
          <Typography
            variant="body1"
            color="text.disabled"
            sx={{
              position: 'relative',
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
              flex: 1,
              marginRight: 1
            }}
          >
            {msgs.length > 0 ? msgs[msgs.length - 1].text : ''}
            <span
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                fontSize: '0.75rem',
                color: '#888',
                background: 'rgba(255,255,255,0.7)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}
            >
              {msgs.length > 0 ? msgs[msgs.length - 1].timestamp : ''}
            </span>
          </Typography>
        }
      />
    </StyledListItem>
  )
}

export default User