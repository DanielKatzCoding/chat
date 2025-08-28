import { styled, Paper, List, ListItem, ListItemText } from "@mui/material";

export const StyledUsersBlock = styled(Paper)(() => ({
  width: '100%',
  height: '100%'
}));

export const StyledList = styled(List)(() => ({
  backdropFilter: 'blur(15px) saturate(180%)',
  WebkitBackdropFilter: 'blur(15px) saturate(180%)',
  padding: 0,
}));

export const StyledListItem = styled(ListItem)(() => ({
  backgroundColor: 'hsla(220, 15%, 10%, 0.5)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'hsla(220, 15%, 14%, 0.8)',
    boxShadow: '0 4px 20px hsla(220, 30%, 2%, 0.7)',
    cursor: 'pointer',
  },
}));

export const StyledListItemText = styled(ListItemText)(() => ({
  '& .MuiListItemText-primary': {
    color: 'hsla(0, 0%, 100%, 0.9)',
    fontWeight: 600,
  },
  '& .MuiListItemText-secondary': {
    color: 'hsla(0, 0%, 100%, 0.6)',
  },
}));