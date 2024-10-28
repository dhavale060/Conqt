import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ConqtButton = styled(Button)`
  text-transform: none !important;
`

export default function ReusableButton({variant,style,onClick,type,children}) {

  return (
   <ConqtButton onClick={onClick} type={type} sx={style} variant={variant ? variant : "outlined"}>{children}</ConqtButton>
  )
}
