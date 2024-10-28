import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CheckboxWithTitle from '../Atoms/CheckboxWithTitle';
import FormGroup from '@mui/material/FormGroup';
import {useDispatch, useSelector } from 'react-redux';
import { renderComponent} from '../Features/ItemDetailsSlice';

const StyledFormGroup = styled(FormGroup)`
     height: 65px;
     padding: 0px 20px;
     display:flex !important;
     align-items:center !important;
     justify-content:center !important;
    `

    const CheckBoxComponent = styled.div`
    display:flex !important;
    align-items:center !important;
    justify-content:center !important;
   `
export default function CheckboxNav() {
   //accesing hook
   const dispatch = useDispatch();

   //const variable required for component
   const navItems = ["Item" , "Supplier"]

   //redux state
   const component = useSelector((state) => state.ItemsDetails.Component);

   //function for handle checkbox change
   const handleChange = (e) => {
      const {name} = e.target
      dispatch(renderComponent(name))
   }

  return (
    <CheckBoxComponent>
       <StyledFormGroup>
          { navItems.map(item => <CheckboxWithTitle component={component} titleText={item} handleChange={handleChange}/>)}
       </StyledFormGroup>
    </CheckBoxComponent>
  )
}
