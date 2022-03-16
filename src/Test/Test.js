import React from 'react'
import './Test.css'
function Test() {
  // we can also especific const using expoert  
  const deveplopers =['Sajjad','Araafat','Anik','Amdad']; 
  // onClick
    const handleClick = ()=>{
        console.log("Hello World");
    }
    // onClick with name 
    const handleClickAgain = (name)=>{
        console.log("Hello "+ name);
    }
    const sum =(a,b)=>{
      return a+b;
    }
// 
//  css in jsx
 const divStyle ={
   color:'#ffffff',
   background:'blue',
   position:'relative',
   top: '20px',
   width:'200px',
   height:'200px',
 }; 
  return (
<>
    <ul>
      {deveplopers.map(deveplopers=><li>{deveplopers}</li>)}
    </ul>
    <button onClick={handleClick}>Click</button>
    <h2>{handleClickAgain}</h2>
    <button onClick={()=>handleClickAgain('Najim')}>Click</button>
    <p>{sum(22,35)}</p>
    <div style={divStyle} >Div style</div>     
 </>
  )
}
export default Test