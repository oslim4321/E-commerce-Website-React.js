import React, { useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import useFetch from './useFetch'



function Items({ element, onclickButt }) {
 

  let ClientCartGet=[]
  let { id } = useParams()
  let {Data}=useFetch('http://localhost:8000/posts')
 
  let getUserData = JSON.parse(localStorage.getItem('IdLogin'))
  console.log()
  //  ClientCartGet== getUserData.ClientCart

  function BuyItem(elem) {
    //  localStorage.setItem('IdLogin', JSON.stringify(holdID))
     
  }


  return (  
      element.map(elem => ( 
   <div key={elem.id}>
      <div className="col">
              <div className="card h-100">
                <div className="imgHOld">
                  <Link to={`/pop/${elem.id}`}><img src={elem.img} className="card-img-top"/></Link>
                </div>
           <div className="card-body">
             <h5 className="card-title">{elem.name}</h5>
             <p className="card-right">{elem.price}</p>
           </div>
          <div className="card-text">
             <p>{ elem.comment}</p>
                  {/* <Link to={`/product/${elem.id}`}></Link> */}
                <button onClick={()=>onclickButt(elem)}>buy</button>
                {/* <button onClick={()=>onclickButt(ClientCart.push(elem))}>Buy</button> */}
              
           </div>
          </div>
        </div>
   
      </div>
      
        ))
     
  )
}

export default Items