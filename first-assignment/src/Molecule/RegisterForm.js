import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputField from '../Atoms/InputField';
import * as Yup from 'yup';
import validateField from '../Common/ValidateFunction';
import { useDispatch, useSelector} from 'react-redux';
import { addErrors,addProductData ,addVandorData } from '../Features/ItemDetailsSlice';

const RegisterFormContainer = styled.div`
    margin: 2px;
    padding:12px;
    // width: 716px;
    // height: 254px;
    border-radius: 16px;
    background-color: #E6E9ff;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items:center;
    box-shadow: 0 4px 2px -1px rgba(0, 0, 0, 0.2);
    `

export default function RegisterForm({jsonData,formData}) {
    
    const dispatch = useDispatch();

    //component State
    const [localFormData , setLocalFormData] = useState(formData) ;
    console.log("localFormData",localFormData);

    //accesing a redux state
     const errors = useSelector((state) => state.ItemsDetails.errors);
     const component = useSelector((state) => state.ItemsDetails.Component);
    console.log("component",component);

    // to get proper current or future date we should have to get proper today date it can crash the validation at midnight
    const getToday = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to midnight
      return today;
    };

    const validationSchema = Yup.object({
      "Item Name": Yup.string().matches(/^[a-zA-Z\s]{3,50}$/ , "Invalid Item Name"),
      "Quantity": Yup.string().matches(/^[1-9][0-9]*$/ , "Invalid Quantity"),
      "Unit Price": Yup.string().matches(/^\d+(\.\d{1,2})?$/ , "Invalid Unit Price"),
      "Date of Submission":Yup.date().min(getToday(),"Date should be today or in future"),
      "Supplier Name":Yup.string().matches(/^[a-zA-Z\s]{2,50}$/ , "Invalid Supplier Name"),
      "Company Name":Yup.string().matches(/^[a-zA-Z0-9\s.&-]{2,100}$/ , "Invalid Company Name"),
      "Country":Yup.string().matches(/^[a-zA-Z\s]{2,50}$/ , "Invalid Country Name"),
      "State":Yup.string().matches(/^[a-zA-Z\s]{2,50}$/ , "Invalid State"),
      "City":Yup.string().matches(/^[a-zA-Z\s-]{2,50}$/ , "Invalid City"),
      "Email Address":Yup.string().matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/ , "Invalid Email Address")
    });

    const handleChange = async(e) => {
         const {name , value} = e.target;
         const updatedFormData = {
          ...localFormData,
          [name]: value,
        };
        setLocalFormData(updatedFormData);
         if(component == "Item"){
           dispatch(addProductData(updatedFormData))
         }

         if(component == "Supplier"){
          dispatch(addVandorData(updatedFormData))
        }

         const errorMsg = await validateField(name, value,validationSchema,dispatch);
         dispatch(addErrors({...errors , [name]:errorMsg}));
    }

  return (
    <RegisterFormContainer>
        {
            jsonData.map(data => 
              <InputField options={data.options} errors={errors} isSelect={data.isSelect} key={data.id} label={data.inputTitle} name ={data.inputTitle} type={data.type} onChange={handleChange} value={localFormData[data.inputTitle]}/> 
            )
        }
    </RegisterFormContainer>
  )
}
