import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useFetch from './useFetch'

function LoginUser() {
    // function ExitPop() {
    //     setpopAlert(false)
    // }
  let AdminId =false
  let holdID
  
  const [loginUser, setloginUser] = useState()
  let userIdPost
 
  // 
  
    let history = useNavigate()
    const [popAlert, setpopAlert] = useState(false)
    let saved=JSON.parse(localStorage.getItem('UserFormData'))

    const [loginEmail, setloginEmail] = useState()
    const [loginPassword, setloginPassword] = useState()
    let loginVarify = { loginEmail, loginPassword }
    let { Data, pending, error } = useFetch('http://localhost:8000/posts')
    // console.log(Data)
  function SubmitLogin(e) {
      // console.log(sav)
        e.preventDefault()
    //    alert()
        // console.log(Data)
        saved.map(elem => {
            // console.log(elem.UserEmail, elem.password)
            if (loginEmail===elem.UserEmail && loginPassword===elem.password ) {
                history(`/home`)/* / page/${elem.id}*/
              console.log('aliamduli')
              let getting = elem;
              console.log(getting)
              localStorage.setItem('Login-Id-Save', JSON.stringify(getting))

              holdID = elem
              if (elem.Admin === true) {
                AdminId = true
                history(`/AdminDashBoard/${elem.id}`)
              }
            } else {
                setpopAlert(true)
            }
      })
      
        // console.log(holdID )
      localStorage.setItem('IdLogin', JSON.stringify(holdID))
  }
  

  // console.log(loginUser)
  
    // if (loginEmail.includes) {
        
    // }
  return (
      <div className='SignContainer'>
            <div id="alertBox" className={popAlert ? 'block' : 'none'}>
            <h2 style={{ fontWeigh: '100' }}>This Acccout Doesnt Exit</h2>
            <p>Go To SignUp page</p>
              <div className="loginButton">
                <Link to='/home'><button className='btn btn-success'>Sign Up</button></Link>
              <button onClick={()=> setpopAlert(false)}>Exit</button>
            </div>
              
            </div>
          <div className='signupBox'>
              <h1>Log<span style={{ padding: '20px' }}>in</span></h1>
        <form className="row">
        <div className="col-md-4">
        <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
        <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="email" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required value={loginEmail} onChange={(e)=> setloginEmail(e.target.value)} />
        </div>
        <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">Password</label>
        <input type="password" className="form-control" id="validationDefault02" value={loginPassword} onChange={(e)=> setloginPassword(e.target.value)}/>
        <Link to='*'><p style={{color:'red'}}>Forgoten Password</p></Link>
      </div>
    </div>
    <button onClick={SubmitLogin}>Login</button>
</form>
      </div>   
   
    </div>
  )
}

export default LoginUser