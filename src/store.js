import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import counterReducer from './Redux/Counters/counterSlice'


/*
    Configure the store with thunk middleware to fetch the data from api's
*/

const store=configureStore({
    reducer:{
         counter:counterReducer
    },
   
});

export default store;