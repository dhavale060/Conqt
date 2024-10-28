  import { addErrors } from "../Features/ItemDetailsSlice";


  const validateField = async (fieldName, value, validationSchema,dispatch) => {
    
    if(value == ""){
        dispatch(addErrors(""));
        // setErrors("");
    } else{
        try {
            await validationSchema.validateAt(fieldName, { [fieldName]: value });
            return ''; // No error
          } catch (error) {
            return error.message; // Return error message
          }
    }
  };

  export default validateField;