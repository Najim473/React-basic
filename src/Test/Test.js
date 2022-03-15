import React from 'react'
import './Test.css'
function Test() {
    const handleClick = ()=>{
        console.log("Hello World");
    }
    const handleClickAgain = (name)=>{
        console.log("Hello "+ name);
    }
  const deveplopers =['Sajjad','Araafat','Anik','Amdad']; // we can also especific const using expoert  
  return (
<>
    <ul>
      {deveplopers.map(deveplopers=><li>{deveplopers}</li>)}
    </ul>
    <button onClick={handleClick}>Click</button>
    <h2>{handleClickAgain}</h2>
    <button onClick={()=>handleClickAgain('Najim')}>Click</button>
 </>
  )
}
export default Test