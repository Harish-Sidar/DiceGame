import React from 'react'

const NumberSelector = () => { 

 const arrayNumber = [1,2,3,4,5,6];

  return (
    <div> 
    {arrayNumber.map((value, i)=>(
        <div className='box' key = {i}>{value}</div>
    )
    )}

      
    </div>
  )
}

export default NumberSelector
