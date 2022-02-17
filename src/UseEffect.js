import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [first, setfirst] = useState(1);
  useEffect(() => {
    console.log("first state updated!!!");
  }, [first]);
  return (
    <>
      <div>UseEffect</div>
      <button onClick={()=>{
          setfirst(first + 1)
      }}>click me</button>
    </>
  );
};

export default UseEffect;
