import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {increment, decrement,resetValue} from '../Redux/Counters/counterSlice';

function Counter() {
  const dispatch= useDispatch();
  const counterValue= useSelector((state)=>state.counter.value);
 
  return (
    <div>
        <p>Current Counter value : {counterValue}</p>
         <button onClick={()=>dispatch(increment())}>Increment</button>  
         <button onClick={()=>dispatch(decrement())}>Decrement</button>  
         <button onClick={()=>dispatch(resetValue())}>Reset</button> 
      
    </div>
  )
}

export default Counter;