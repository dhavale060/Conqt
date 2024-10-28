import React from 'react'
import styled from 'styled-components'
import TypeText from '../Atoms/TypeText'
import RegisterForm from '../Molecule/RegisterForm'
import ItemJson from '../JSON/ItemDetail.json'

const RegisterContainer = styled.div`
    //   border:2px solid black;
      padding:5px 0px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
    `

export default function ItemDetailsComponent({formData}) {

  const {title,Data} = ItemJson.ItemDetails;
    
  return (
    <RegisterContainer>
       <TypeText text={title} textVariant="h4" typographyStyle={{fontWeight:"bold"}}/>
       <RegisterForm  jsonData = {Data} formData={formData}/>
    </RegisterContainer>
  )
}
