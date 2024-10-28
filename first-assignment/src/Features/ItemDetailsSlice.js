import {createSlice} from '@reduxjs/toolkit';

const ItemDetailsSlice = createSlice({
    name:"ItemsDetails",
    initialState:{
        ProductData:{"Item Name":"", "Quantity":"", "Unit Price":"", "Date of Submission":""},
        Component:"",
        errors:{"Date of Submission":"","Item Name":"","Quantity":"","Unit Price":"",},
        VandorData:{"Supplier Name":"", "Company Name":"", "Country":"", "State":"", "City":"", "Email Address":""}
    },
    reducers:{
        addProductData(state , action){
            state.ProductData = action.payload
        },
        addVandorData(state , action){
            state.VandorData = action.payload
        },
        renderComponent(state , action){
            state.Component = action.payload
        },
        addErrors(state , action){
            state.errors = action.payload
        }
    },
    // extraReducers:{

    // }
})

export const {addProductData , renderComponent , addVandorData , addErrors} = ItemDetailsSlice.actions;
export default ItemDetailsSlice.reducer;