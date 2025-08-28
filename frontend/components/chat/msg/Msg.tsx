import React from 'react'
import { IMsg } from '../../types/types'
import { ListItemText, Paper, Typography } from '@mui/material'

const Msg = ({ msg }: { msg: IMsg }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 1 }}>
      <ListItemText
        primary={
          <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
            {msg.text}
          </Typography>
        }
        secondary={
          <Typography variant="caption" color="textSecondary" sx={{ display: 'block', textAlign: 'right' }}>
            {msg.timestamp}
          </Typography>
        }
      />
    </Paper>
  )
}

export default Msg