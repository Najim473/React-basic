import React from 'react'

function Test() {
    const handleClick = ()=>{
        console.log("Hello World");
    }
    const handleClickAgain = (name)=>{
        console.log("Hello "+ name);
    }
  return (
<>
    <div>Test</div>
    <button onClick={handleClick}>Click</button>
    <button onClick={()=>handleClickAgain('Najim')}>Click</button>
 </>
  )
}
export default Test