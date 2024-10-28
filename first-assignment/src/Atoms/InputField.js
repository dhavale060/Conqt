import React from 'react';
import styled from 'styled-components';
import Label from '../Common/Label';

const InputFieldContainer = styled.div`
    width: fit-content;
    height: 60px;
    padding: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
const TextField = styled.input`
    width: 320px;
    height:33px;
    padding: 6px;
    border: 1px solid gray;
    border-radius: 6px;
    outline: none;
    box-sizing:border-box
`
const SelectField = styled.select`
    width: 320px;
    height:33px;
    padding: 6px;
    border: 1px solid gray;
    border-radius: 6px;
    outline: none;
    background:#ffffff;
    box-sizing:border-box
}
`
const MenuItem = styled.option`

`
const ErrorMessage = styled.span`
   font-size: 10px;
   margin: 3px 0px;
   width: 310px;
   max-width: 310px;
   box-sizing: border-box;
`

const InputField = ({ label, type, name, value, onChange,options, isSelect,errors}) => {
  return (
    <InputFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      { (isSelect) ? 
      <SelectField
      name={name}
      value={value}
      onChange={onChange}
      placeholder={"Enter "+ label}
     >{
      options.map((option) => 
        <MenuItem value={option}>{option}</MenuItem>
      )
      }
     </SelectField>
      : 
      <TextField
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={"Enter "+ label}
    /> 
      }
      <ErrorMessage>{errors[name]}</ErrorMessage>
    </InputFieldContainer>
  );
};

export default InputField;
