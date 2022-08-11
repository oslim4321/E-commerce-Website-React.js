import React from 'react'
import useFetch from './useFetch'
import {useParams} from 'react-router-dom'

function ItemBrought({ holdID }) {
    let GetUserId = JSON.parse(localStorage.getItem('IdLogin'))
    console.log(GetUserId.id)
  return (
      <div>ItemBrought
          <h1>etrytuyiuoipo</h1>
          
             <h1>HI {GetUserId.useNAme} ID ({GetUserId.id}) this are your items and there price</h1>
             <h2>how will you like to pay</h2>
         
    </div>
  )
}

export default ItemBrought