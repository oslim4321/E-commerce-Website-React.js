import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div className='error'>
       
          <h1>Error 404</h1>
         <Link to='/home'> <button className='btn btn-danger'>Go Back To HomePAge</button></Link>
    </div>
  )
}

export default Errorpage