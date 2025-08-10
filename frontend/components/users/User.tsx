import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Icon } from '../icons/Icon';

interface UserProps {
  iconPath: string;
  name: string;
  previewComment: string;
}

const User: React.FC<UserProps> = ({ iconPath, name, previewComment }) => {
  return (
      <ListItem>
        <ListItemAvatar sx={{ marginRight: 1 }}>
          <Icon iconPath={iconPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography variant='body2' color="text.disabled">
              {previewComment}
            </Typography>
          }
        />
      </ListItem>
  )
}

export default User