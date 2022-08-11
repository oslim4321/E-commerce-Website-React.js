import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

function Pop({ cart, setcart }) {
  // function toor() {
  //   setcart('kkjewjk')
  //   console.log(cart)
  // }

    let { id } = useParams()
    let {Data,pending,error}=useFetch('http://localhost:3000/blog/'+id )
  return (
      
      <div className='pop'>
          {pending && <h1 className='pend'>Fetching Data...</h1>}
          {error && <h1 className='pend'>Error Cant Fetch Data</h1>}
          {
              Data && (
                  <>
                     <img src={Data.img} />
                    <h1>Name: {Data.name}</h1>
                    <h1>Price: {Data.price}</h1>
                    <h1>Comment: {Data.comment}</h1>
                  </>
              )
        }
    </div>
  )
}

export default Pop