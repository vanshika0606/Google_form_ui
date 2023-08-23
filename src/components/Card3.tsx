import React from 'react';

type propType = {
    type: string,
    cls?: string
}
const Card3 = ({type, cls}: propType) => {
  return (
    <div className='card3'>
      <p>{type} <span style={{color:'red'}}>*</span></p>

      <input type='text' placeholder='Your answer' className={cls}/>

    </div>
  )
}

export default Card3
