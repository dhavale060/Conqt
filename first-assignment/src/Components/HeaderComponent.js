import React from 'react';
import {styled} from 'styled-components';
import Typography from '../Atoms/Typography';

const Header = styled.div`
      height:54px;
      background-color:#304FFE;

    `
const CircleLogo = styled.div`
      border:1px soild dark;
      background-color:white;
      position: absolute;
      margin-left: 27px;
      margin-top: 9px;
      border-radius: 22px;
      height: 35px;
      width: 35px;
  `

export default function HeaderComponent() {

  return (
    <Header>
        <CircleLogo/>
        <Typography fontFamily="" color="white"  text="Inventory Management System" size="21px"/>
        
    </Header>
  )
}
