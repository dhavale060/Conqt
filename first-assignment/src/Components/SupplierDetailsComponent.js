import React from 'react'
import styled from 'styled-components'
import TypeText from '../Atoms/TypeText'
import RegisterForm from '../Molecule/RegisterForm'
import SupplierDetailsJson from '../JSON/SupplierDetails.json'

const RegisterContainer = styled.div`
    //   border:2px solid black;
      padding:5px 0px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
    `

export default function SupplierDetailsComponent({formData}) {

  const {title,Data} = SupplierDetailsJson.SupplierDetails;
    
  return (
    <RegisterContainer>
       <TypeText text={title} textVariant="h4" typographyStyle={{fontWeight:"bold"}}/>
       <RegisterForm  jsonData = {Data} formData={formData}/>
    </RegisterContainer>
  )
}
