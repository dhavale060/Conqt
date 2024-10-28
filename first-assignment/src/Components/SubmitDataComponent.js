import React from 'react'
import styled from 'styled-components';
import TypeText from '../Atoms/TypeText';
import Label from '../Common/Label';
import ReusableButton from '../Atoms/ReusableButton';

const SubmitDataContainer = styled.div`
//  border:2px solid green;
 height:200px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-items:center;
 padding-top: 25px;
`
const LabelContainer = styled.div`

`
const ButtonContainer = styled.div`
 margin:30px;
`
export default function SubmitDataComponent() {
  return (
    <SubmitDataContainer>
      <TypeText text="Submitted Data" width="253px" textVariant="h4" typographyStyle={{fontWeight:"bold"}}/>
      <LabelContainer>
        <Label>The data submitted by user will be displayed by belowed</Label>
      </LabelContainer>
      <ButtonContainer>
       <ReusableButton variant="contained">Save Changes</ReusableButton>
      </ButtonContainer>
    </SubmitDataContainer>
  )
}
