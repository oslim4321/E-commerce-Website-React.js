import React from 'react'
import Ecommerce from './Ecommerce'
import useFetch from './useFetch'
import {useParams} from 'react-router-dom'
import Items from './Items'

function USerHomePage() {
    let {id}= useParams()
    let { Data, pending, error } = useFetch('http://localhost:8000/posts/' + id)
    // console.log(Data)
  return (
      <div>
         
          <Ecommerce />
          <h1>Hi {Data.useNAme}</h1>
          {/* <Items/> */}
    </div>
  )
}

export default USerHomePage