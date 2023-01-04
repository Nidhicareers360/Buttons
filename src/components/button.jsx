import React from 'react'

function Button(props) {

  const handleChange = (val) =>{
  props.text2(val)
  }


  return (
    <div className='box'>
    <button onClick={()=>handleChange("You clicked on A")}>A</button> 
    <button onClick={()=>handleChange("You clicked on B")}>B</button>
    <button onClick={()=>handleChange("You clicked on C")}>C</button>
    <button onClick={()=>handleChange("Press any key")}>Reset</button>
    </div>
    
  )
}

export default Button;