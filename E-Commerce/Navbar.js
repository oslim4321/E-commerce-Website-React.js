import React, {useEffect, useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { useParams } from 'react-router-dom'

// import pic from '../IMAGES'

function Navbar({handleBuyItem}) {

  let {id}=useParams()
  let navigate=useNavigate()
  const [UploadState, setUploadState] = useState(false)
  const [GetUserState, setGetUserState] = useState(false)
  const [VarifiyButton, setVarifiyButton] = useState(false)
  const [cartLength, setcartLength] = useState()
  let getUserData = JSON.parse(localStorage.getItem('IdLogin'))
  let { Data, pending, error } = useFetch('http://localhost:8000/posts/' +id)
  
  let getUser = JSON.parse(localStorage.getItem('Login-Id-Save'))
  setTimeout(() => {
     // useEffect(() => {
     
      // console.log(getUser)
      if (getUser.Admin === true) {
        setGetUserState(true)
      }
      else {
        setGetUserState(false)
      }
    // }, [])
  }, 100);
 useEffect(() => {
  if (!getUser) {
    // console.log('it empty')
    setVarifiyButton(true)
  } else {
  }
 }, [])
  let cart=JSON.stringify(localStorage.getItem('cart'))
    useEffect(() => {
      setcartLength(getUserData.ClientCart.length)
    }, [cart])

  return (
      <>
          <div className='container-fluid p-0 navhead'>
          <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">E-Commerce</a>
            <button style={{background:'red'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <h1>{id} {Data.useNAme }</h1><p>ok</p> */}
            <div className="collapse navbar-collapse" id="navbarNav">
                  <div className='mr-auto'></div>
                  {/* <h1 className='greetUser'>Welcome Selim</h1> */}
              <div className="upload">
              <Link className="nav-link active" aria-current="page" to='/home'><button className='btn btn'>Home</button></Link>
              <Link id='VarifiyButton' aria-current="page" to='/' className={VarifiyButton ? 'block': 'none'}>SignUp</Link>
              <Link id='VarifiyButton' aria-current="page" to='/login' className={VarifiyButton ? 'block': 'none'}>Login</Link>
                {/* <Link to='/upload' id='Upload' className={UploadState ? 'block' : 'none'}>  <p>Upload Items</p></Link> */}
                <Link className={GetUserState ? 'block': 'none'} id='AdminDash' to='/AdminDashboard/:id'><button className='btn btn'>Go to Dashboaard</button></Link>
                <Link to='/upload'><h5 className={GetUserState ? 'block btn btn-primary': 'none'}>Upload Blogs</h5></Link>

              </div>
              
            <ul className="navbar-nav">
                {/* <li className="nav-item">DashBoard</li> */}
                
              <li className="nav-item">
                  <div className='amoutPick'>{cartLength}</div>
                  <Link to='/product' className="nav-link cart">Carts</Link>
             </li>
        </ul>
        </div>
    </div>
    </nav>
          </div>

      </>
  )
}

export default Navbar