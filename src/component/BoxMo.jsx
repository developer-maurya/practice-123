  import React from 'react'
  import ME from '../assets/ME.jpg'
  import './BoxMo.css'
  const BoxMo = (props) => {
    return (
      <div className='box-container'>
      <p>{props.name}</p>
      <img src={props.image} id='user-img'></img>
      <p>{props.desc}</p>
        
      </div>
    )
  }

  export default BoxMo
