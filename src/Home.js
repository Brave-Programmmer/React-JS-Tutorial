import {useState} from 'react'
const Home = ()=> {
  const [count, setCount] = useState(1);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>+</button>
      <button onClick={()=>{
        if(count == 1){
        }
        else{
          setCount(count - 1);
        }
      }}>-</button>
    </div>
  )
}

export default Home;