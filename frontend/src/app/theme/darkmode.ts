import { createTheme, alpha, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    glass: {
      primary: string;
      secondary: string;
      surface: string;
    };
  }

  interface PaletteOptions {
    glass?: {
      primary?: string;
      secondary?: string;
      surface?: string;
    };
  }
}

const glassmorphismDarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(266, 85%, 76%)', // Purple primary
      light: 'hsl(266, 85%, 85%)',
      dark: 'hsl(266, 85%, 67%)',
      contrastText: 'hsl(0, 0%, 0%)',
    },
    secondary: {
      main: 'hsl(174, 100%, 41%)', // Cyan secondary
      light: 'hsl(174, 100%, 70%)',
      dark: 'hsl(174, 100%, 33%)',
      contrastText: 'hsl(0, 0%, 0%)',
    },
    background: {
      default: 'hsl(220, 26%, 6%)', // Very dark blue-gray
      paper: 'hsla(220, 15%, 8%, 0.8)', // Dark semi-transparent
    },
    text: {
      primary: 'hsla(0, 0%, 100%, 0.95)',
      secondary: 'hsla(0, 0%, 100%, 0.75)',
      disabled: 'hsla(0, 0%, 100%, 0.38)',
    },
    error: {
      main: 'hsl(353, 100%, 70%)',
    },
    warning: {
      main: 'hsl(45, 100%, 65%)',
    },
    info: {
      main: 'hsl(134, 41%, 66%)',
    },
    success: {
      main: 'hsl(134, 41%, 71%)',
    },
    glass: {
      primary: 'hsla(220, 15%, 8%, 0.7)',     // Dark glass
      secondary: 'hsla(220, 15%, 10%, 0.8)',  // Slightly lighter dark glass
      surface: 'hsla(220, 15%, 15%, 0.7)',    // Surface glass
    },
  },
  components: {
    // Global glassmorphism background
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'url(/static/background.jpg)', // Replace with your background image
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh',
          overflow: 'auto',
          backgroundColor: 'hsl(220, 26%, 6%)', // Fallback dark background
        },
      },
    },
    
    // Paper - Core dark glassmorphism component
    MuiPaper: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          backgroundColor: 'hsla(220, 15%, 8%, 0.75)', // Dark glass background
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid hsla(0, 0%, 100%, 0.08)', // Subtle light border
          borderRadius: 16,
          boxShadow: '0 8px 32px hsla(220, 30%, 2%, 0.6)', // Dark shadow with hue
          ...(ownerState?.elevation && ownerState.elevation > 0 && {
            backgroundColor: `hsla(220, 15%, ${8 + ownerState.elevation}%, ${Math.min(0.75 + ownerState.elevation * 0.05, 0.9)})`,
            backdropFilter: `blur(${20 + ownerState.elevation * 2}px) saturate(180%)`,
            WebkitBackdropFilter: `blur(${20 + ownerState.elevation * 2}px) saturate(180%)`,
          }),
        }),
      },
    },

    // Card - Enhanced dark glassmorphism
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'hsla(220, 15%, 12%, 0.8)', // Dark card background
          backdropFilter: 'blur(25px) saturate(200%)',
          WebkitBackdropFilter: 'blur(25px) saturate(200%)',
          border: '1px solid hsla(0, 0%, 100%, 0.1)',
          borderRadius: 20,
          boxShadow: '0 12px 40px hsla(220, 30%, 2%, 0.7)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'hsla(220, 15%, 16%, 0.85)', // Lighter on hover
            backdropFilter: 'blur(30px) saturate(220%)',
            WebkitBackdropFilter: 'blur(30px) saturate(220%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 16px 50px hsla(220, 30%, 2%, 0.8)',
            border: '1px solid hsla(0, 0%, 100%, 0.15)',
          },
        },
      },
    },

    // AppBar - Dark floating glass header
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'none',          // Remove glass blur if any
          WebkitBackdropFilter: 'none',   // For Safari
          borderRadius: '16px 16px 0 0',  // Keep rounded corners as you want
          boxShadow: 'none',               // Remove any shadow to avoid background effect
          border: 'none', // No border to maintain the glass effect
          padding: '0 1rem', // Add some padding for content
        },
      },
    },

    // Dialog - Dark premium glass modal
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'hsla(220, 15%, 10%, 0.9)', // Dark dialog background
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid hsla(0, 0%, 100%, 0.12)',
          borderRadius: 24,
          boxShadow: '0 20px 60px hsla(220, 30%, 2%, 0.9)',
        },
      },
    },

    // Drawer - Dark side glass panel
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'hsla(220, 18%, 8%, 0.85)', // Dark drawer background
          backdropFilter: 'blur(35px) saturate(160%)',
          WebkitBackdropFilter: 'blur(35px) saturate(160%)',
          border: 'none',
          borderRight: '1px solid hsla(0, 0%, 100%, 0.08)',
          boxShadow: '4px 0 24px hsla(220, 30%, 2%, 0.7)',
        },
      },
    },

    // Button - Dark glass button effects
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid hsla(0, 0%, 100%, 0.1)',
          transition: 'all 0.3s ease-in-out',
          ...(ownerState.variant === 'contained' && {
            backgroundColor: alpha(theme.palette.primary.main, 0.8),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              transform: 'translateY(-1px)',
              boxShadow: '0 8px 25px hsla(266, 85%, 76%, 0.4)',
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            backgroundColor: 'hsla(220, 15%, 12%, 0.6)', // Dark button background
            borderColor: 'hsla(0, 0%, 100%, 0.2)',
            '&:hover': {
              backgroundColor: 'hsla(220, 15%, 16%, 0.7)', // Lighter dark on hover
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'hsla(0, 0%, 100%, 0.3)',
            },
          }),
          ...(ownerState.variant === 'text' && {
            backgroundColor: 'hsla(220, 15%, 12%, 0.3)', // Very subtle dark background
            '&:hover': {
              backgroundColor: 'hsla(220, 15%, 16%, 0.5)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            },
          }),
        }),
      },
    },

    // Chip - Small dark glass elements
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'hsla(220, 15%, 12%, 0.7)', // Dark chip background
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid hsla(0, 0%, 100%, 0.1)',
          color: 'hsla(0, 0%, 100%, 0.9)',
          '&:hover': {
            backgroundColor: 'hsla(220, 15%, 16%, 0.8)',
          },
        },
      },
    },

    // TextField - Dark glass input fields
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'hsla(220, 15%, 10%, 0.6)', // Dark input background
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            '& fieldset': {
              borderColor: 'hsla(0, 0%, 100%, 0.15)',
            },
            '&:hover fieldset': {
              borderColor: 'hsla(0, 0%, 100%, 0.25)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'hsl(266, 85%, 76%)',
              backgroundColor: 'hsla(220, 15%, 12%, 0.7)',
            },
          },
        },
      },
    },

    // Menu - Dark glass dropdown
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: 'hsla(220, 15%, 10%, 0.85)', // Dark menu background
          backdropFilter: 'blur(25px) saturate(180%)',
          WebkitBackdropFilter: 'blur(25px) saturate(180%)',
          border: '1px solid hsla(0, 0%, 100%, 0.12)',
          borderRadius: 12,
          boxShadow: '0 12px 40px hsla(220, 30%, 2%, 0.8)',
        },
      },
    },

    // Backdrop - Enhanced dark modal background blur
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          backgroundColor: 'hsla(220, 30%, 2%, 0.7)', // Darker backdrop
        },
      },
    },

    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'hsla(220, 15%, 13%, 0.7)',
          borderRadius: '50%',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          border: '1px solid hsla(0, 0%, 100%, 0.12)',
          boxShadow: '0 2px 8px hsla(220, 30%, 2%, 0.5)',
          minWidth: 40,
          minHeight: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'hsla(0, 0%, 100%, 0.95)',
      textShadow: '0 2px 4px hsla(220, 30%, 2%, 0.5)',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'hsla(0, 0%, 100%, 0.95)',
      textShadow: '0 2px 4px hsla(220, 30%, 2%, 0.5)',
    },
    h3: {
      fontWeight: 600,
      color: 'hsla(0, 0%, 100%, 0.92)',
    },
    h4: {
      fontWeight: 500,
      color: 'hsla(0, 0%, 100%, 0.92)',
    },
    h5: {
      fontWeight: 500,
      color: 'hsla(0, 0%, 100%, 0.9)',
    },
    h6: {
      fontWeight: 500,
      color: 'hsla(0, 0%, 100%, 0.9)',
    },
    body1: {
      color: 'hsla(0, 0%, 100%, 0.87)',
      lineHeight: 1.6,
    },
    body2: {
      color: 'hsla(0, 0%, 100%, 0.75)',
      lineHeight: 1.5,
    },
  },
  
  shape: {
    borderRadius: 16,
  },
});

export default glassmorphismDarkTheme;
