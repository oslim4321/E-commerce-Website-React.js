import React, {useState, useRef} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Hold from './Hold'
import useFetch from './useFetch'
// import { useParams } from 'react-router-dom'
// import useFetch from './useFetch'
// import { useParams } from 'react-router-dom'
// import cake from './img/wrist.png'
// import useFetch from './useFetch'



function BuyCart({ }) {

  let { Data, pending, error } = useFetch('http://localhost:8000/posts')
  let Navigate=useNavigate()
  let num = 2
  let get = useRef()
  const [quantity, setquantity] = useState(1)

  function plus(id) {
    setquantity(quantity + 1)
    // get.current.innerHTML*num  
      
  }
  function minus() {
    setquantity(quantity - 1)
  }
  function Delete(e) {
    // e.target.parentElement.parentElement.parentElement.remove()
    // stored.slice(1)
  }
  // function gotoItemBrought() {
  //   Data.map(elem => {
  //    Navigate('/itemsbought')
  //   })
  // }

  // let stored = [{name: "qqq"},{name: "333"},{name: "333"},{name: "ppp"} ]
  let stored = JSON.parse(localStorage.getItem('cart'))
  let getUserData = JSON.parse(localStorage.getItem('IdLogin'))
  // console.log(getUserData.ClientCart)
  //  console.log(stored.length)
  let pasing = JSON.parse(localStorage.getItem('UserFormData'))
  // localStorage.setItem('UserFormData',JSON.stringify())
  function checkinout() {
    let get = JSON.parse(localStorage.getItem('IdLogin'))
    pasing.map(elem => {
      if (get.Id === elem.Id) {
        elem.ClientCart.push(get.ClientCart)
      }
      
    })
   
    // console.log(get)
      // get.ClientCart.push
  }

  return (
    <>
      
       <h1  className='head'>Your Shopping Cart</h1>
      <div className='show'>
        <div className="box">
         
       <div className="carBox">
        {getUserData.ClientCart.map((el, index) => {
          return (<div key={index}>
                <div className="cardItem">
                  <div className="halveTop">
                    <img src={el.img} />
                  </div>
                  <div className="seconHalve">
                    <div className="cartText">
                      <h3 className='name'>{el.name}</h3>
                      <div  className="price">{el.price}</div>
                    </div>
                                
                    <div className='lastHold'>
                      <div className="secTExt"> <span onClick={minus}>-</span><p>{quantity}</p><span onClick={()=>plus(el.id)}>+</span></div>
                     
                </div>
                <button className='cartDelete' onClick={Delete}>Delete</button>
                  </div>
            </div>
          </div>)
          
        })}
 </div>
        </div>
        <button className='cartFinal'>Empty Cart</button>
        
      
        {/* // console.log(elem.id) */}
        {/* checout */}
       {/*  <Link to='/checout'> */}<button onClick={checkinout} style={{background: 'blue'}} className='cartFinal'>Checkout</button>{/* </Link> */}
         
        
       
    </div>
  </>
  )
}

export default BuyCart