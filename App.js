
import './App.css';
import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom'
import Navbar from './E-Commerce/Navbar';
import Ecommerce from './E-Commerce/Ecommerce';
import AdminUpload from './E-Commerce/AdminUpload'
import BuyCart from './E-Commerce/BuyCart';
import Items from './E-Commerce/Items';
import Pop from './E-Commerce/Pop';
import useFetch from './E-Commerce/useFetch';
import Hold from './E-Commerce/Hold';
import Checkout from './E-Commerce/Checkout'
import SignUpUser from './E-Commerce/SignUpUser';
import LoginUser from './E-Commerce/LoginUser';
import AdminDashBoard from './E-Commerce/AdminDashBoard';
import ItemBrought from './E-Commerce/ItemBrought';
import AllUserDasboard from './E-Commerce/AllUserDasboard';
import AllClientDetails from './E-Commerce/AllClientDetails';
import USerHomePage from './E-Commerce/USerHomePage';
import Errorpage from './E-Commerce/Errorpage';

// import {Navbar,Ecommerce,AdminUpload,BuyCart,Items,Pop,useFetch,Hold,Checkout,SignUpUser,LoginUser,AdminDashBoard,ItemBrought,AllUserDasboard,AllClientDetails,USerHomePage,Errorpage } from './E-Commerce'


// import { useParams } from 'react-router-dom'
// let  id = useParams()


function App({handleBuyItem}) {
  let arr = []
  let { Data, pending, error } = useFetch('http://localhost:8000/posts')
  let saved=JSON.parse(localStorage.getItem('UserFormData'))


  let { id } = useParams()
  const [cart, setcart] = useState()

  function handleBuyItem(elem) {
    console.log(saved.Id)
    arr.push(elem)
    // localStorage.setItem('cart', JSON.stringify(arr))
    let getUserData = JSON.parse(localStorage.getItem('IdLogin'))
     getUserData.ClientCart.push(elem)
     localStorage.setItem('IdLogin', JSON.stringify(getUserData))

    
    // console.log()
    // let findMultiple = getUserData.ClientCart.find((item) =>item.id === elem.id)
    //   if (findMultiple) {
    //     alert('product exit')
    //   } else {
    //     alert('not exit')
    //   }
    // })


    let found=saved.find(ele=>{
      return ele.Id ===  getUserData.Id
      
    })
   
    found.ClientCart.push(getUserData.ClientCart)
    console.log(found)

  }
    useEffect(() => {
     
    }, [arr])

  return (
    <>
      <Router>  
        <Navbar path='navbar/:id' element={<Navbar handleBuyItem={handleBuyItem} />}/>
        {/* <button style={{background:'red'}}><h1>check</h1></button> */}
        <Routes>
          <Route path='/' element={<SignUpUser />}></Route>
          <Route path='/home' element={<Ecommerce onclickButt={handleBuyItem}  />}></Route>
          <Route path='/upload' element={<AdminUpload />}></Route>
          <Route path='/product' element={<BuyCart cart={arr} />}  ></Route>
          <Route path='/login' element={<LoginUser />}></Route>
          <Route path='/item/:id' element={<Items />}></Route>
          <Route path='/pop/:id' element={<Pop />}></Route>
          <Route path='/checout' element={<Checkout />  }></Route>
          {/* <Route path='/card' element={<Card />}></Route> */}
          <Route path='/AdminDashboard/:id' element={<AdminDashBoard />}></Route>
          <Route path='/itemsbought' element={<ItemBrought />}></Route>
          <Route path='/AllUserDasboard' element={<AllUserDasboard />}></Route>
          <Route path='/AllClientDetails/:id' element={<AllClientDetails />}></Route>
          <Route path='homepage/:id' element={<USerHomePage/>}></Route>
          {/* <Route path='info' element={<Info/>}></Route> */}
          <Route path='*' element={<Errorpage/>}></Route>
  
          </Routes>
      </Router>
    </>
  );
}

export default App;
