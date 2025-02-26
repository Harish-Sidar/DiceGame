// import React, { useState } from 'react'

// const NumberSelector = ({selectedNumber,setSelectedNumber}) => { 

//  const arrayNumber = [1,2,3,4,5,6];

//   return ( 
//     <div className='end'>
//     <div className='flex'> 
//     {arrayNumber.map((value, i)=>(
//         <div className='box'
//         isSelected = {value === selectedNumber}
//           key = {i} onClick={()=>setSelectedNumber(value)}>
//           {value}
//           </div>
//     )
//     )}

//     </div>
//     <p>Select Number</p>

//     </div>
    
//   )
// }

// export default NumberSelector

import React from 'react';

const NumberSelector = ({error,setError, selectedNumber, setSelectedNumber}) => { 
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }

  return ( 
    <div className='end'>
      <p className='error'>{error}</p>
      <div className='flex'> 
        {arrayNumber.map((value, i) => (
          <div 
            className={`box ${value === selectedNumber ? "selected" : ""}`} 
            key={i} 
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
