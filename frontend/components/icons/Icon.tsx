"use client"
import React, {useEffect, useState} from 'react'
import { Avatar } from '@mui/material';

interface IconProps {
  iconPath: string;
}

export const Icon: React.FC<IconProps> = ({ iconPath }) => {
  const [blobUrl, setBlobUrl] = useState<string>('');
  
  useEffect(() => {
    let isMounted = true;
    let currentBlobUrl: string | null = null;

    fetch(iconPath)
      .then(response => response.blob())
      .then(blob => {
        if (isMounted) {
          currentBlobUrl = URL.createObjectURL(blob);
          setBlobUrl(currentBlobUrl);
        }
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });

    return () => {
      isMounted = false;
      if (currentBlobUrl) {
        URL.revokeObjectURL(currentBlobUrl);
      }
    }
  }, [iconPath]);

  return (
    <Avatar
      src={blobUrl}
      alt="User Icon"
      sx={{ width: '5vw', height: '5vw' }} 
    />
  )
}
