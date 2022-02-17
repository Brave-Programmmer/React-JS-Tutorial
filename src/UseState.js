import {useState} from 'react'
export default function UseState() {
  const [count,setCount] = useState(1);
  return(
      <>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={()=>{
        if(count == 0){
          console.log("cannot decrease");
        }
        else{
        setCount(count - 1)
        }
      }}>Decrease</button>
      </>
  )
}

