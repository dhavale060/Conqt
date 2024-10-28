import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export default function TypeText({text, textVariant, typographyStyle, width}) {
   const TypoContainer = styled(Box)`
    width: ${(width ? width : 'fit-content')};
    padding: 10px;
    color: #473e3e;
   `
  return (
    <TypoContainer>
      <Typography sx={typographyStyle} variant={textVariant} gutterBottom>{text}</Typography>
    </TypoContainer>
  )
}
