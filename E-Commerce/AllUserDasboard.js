import React from 'react'
import useFetch from './useFetch'


function AllUserDasboard() {
    let { DataUser } = useFetch('http://localhost:8000/posts')
    // console.log(DataUser)
    return (
      
        <>
        <div>AllUserDasboard</div>
            <h1>wowow</h1>
            <h1>wpowpwp</h1>
          
        </>
  )
}

export default AllUserDasboard