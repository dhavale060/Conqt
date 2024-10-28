import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CheckboxNav from '../Components/CheckboxNav';
import ItemDetailsComponent from '../Components/ItemDetailsComponent';
import SubmitDataComponent from '../Components/SubmitDataComponent';
import SupplierDetailsComponent from '../Components/SupplierDetailsComponent';
import { useSelector } from 'react-redux';
import ReusableButton from '../Atoms/ReusableButton';

const HomePageContainer = styled.div`
    //  border:2px solid red;
     padding:5px 0px;
    `
const FormContainer = styled.form`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
`
const SubmitButtonContainer = styled.div`
    border:2px solid green;
`
export default function HomePage() {
  //from component state
  const [isSubmited , setIsSubmited] = useState(false);
  const [submitedData , setSubmited] = useState({});


  //from redux state
  const productData = useSelector((state) => state.ItemsDetails.ProductData);
  const vandorData = useSelector((state) => state.ItemsDetails.VandorData);
  const component = useSelector((state) => state.ItemsDetails.Component);
  const errors = useSelector((state) => state.ItemsDetails.errors);
  console.log("errorObj" , errors);
  console.log("itemData" ,productData)
  console.log("vandorData" , vandorData);

  // function for rendering the component on condition base of "component" of redux state
  const showComponent = () => {
    switch(component){
      case "Item":
        return <ItemDetailsComponent formData={productData}/>

      case "Supplier":
        return <SupplierDetailsComponent formData={vandorData}/>
      default:
        return <p>Error</p>
    }

    // By using if else 
      //  if(component === "ItemDetails"){
      //   return <ItemDetailsComponent/>
      //  } else if(component === "SupplierDetails"){
      //   return <SupplierDetailsComponent/>
      //  } else{
      //   return (
      //     <>
      //       <h3>Its Error Page</h3>
      //     </>
      //   )
      //  }
  }

  // reusable function to check the object values are fullfield or not

  const areAllFieldsFilled = (obj) => {
    return Object.values(obj).every(value => value !== '' && value !== null && value !== undefined);
  };

  //reusable function to check the is anyone value are filled in object or not
  const hasErrors = (errorObj) => {
    return Object.values(errorObj).some(value => value !== null && value !== undefined && value !== '');
  };

//function to check is form ready to submit or not
 const handleIsSubmit = useCallback(() => {
   const allItemsFieldFilled = areAllFieldsFilled(productData);
   const AllVandorFieldFilled = areAllFieldsFilled(vandorData);
   const hasAnyError = hasErrors(errors);
  
   if(component === "Item"){
    if(allItemsFieldFilled && !hasAnyError){
      setIsSubmited(true);
    }else{
      setIsSubmited(false)
    }
   } 
   
   if(component === "Supplier"){
    if(AllVandorFieldFilled && !hasAnyError){
      setIsSubmited(true);
    }else{
      setIsSubmited(false)
    }
   }
},[productData,vandorData,errors,component])

 const handleSubmit = (e) => {
  e.preventDefault();
    // alert("hey i am submited")
    Object.entries(productData).forEach(([key, value]) => {
      if (value) { 
        alert(`${key} is required`);
      }
    });

  }

  useEffect(() => {
    handleIsSubmit();
  },[handleIsSubmit])
  
  return (
    <HomePageContainer>
       <CheckboxNav/>
       <FormContainer onSubmit={handleSubmit}>
       {showComponent()}
       {isSubmited && <ReusableButton type="submit" style={{margin:"20px",color:"#473e3e",borderColor: "#788b8b"}} variant="outlined">Submit</ReusableButton>}
       </FormContainer>
       <SubmitDataComponent/>
    </HomePageContainer>
  )
}
