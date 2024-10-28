import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

export default function CheckboxWithTitle({titleText, handleChange,component}){

  return (
    <FormControlLabel  control={<Checkbox checked={component === titleText} name={titleText} onChange={(e) => handleChange(e)}/>} label={titleText ? titleText : "Label"} />
  )
}
