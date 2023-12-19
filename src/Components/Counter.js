import React,{useState} from 'react'

function Counter() {
  const [counter, setCounter]= useState(0)  
  const [initialValue, setInitialValue]= useState(0);

  const updateValue=()=>{
    setCounter(initialValue);
  }
  return (
    <div>
        <p>Current Counter value : {counter}</p>
         <button onClick={()=> setCounter(counter+1)}>Increment</button>  
         <button onClick={()=> setCounter(counter-1)}>Decrement</button>   
         <input type='text' value={initialValue} onChange={(e)=>setInitialValue(parseInt(e.target.value) || 0)} /> <button onClick={updateValue}>Update Value</button>
    </div>
  )
}

export default Counter