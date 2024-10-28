import {configureStore} from '@reduxjs/toolkit';
import ItemDetailsReducers from '../Features/ItemDetailsSlice';

export const store = configureStore({
    reducer:{
        ItemsDetails:ItemDetailsReducers,
    }
})