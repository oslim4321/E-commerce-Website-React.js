import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

function SignUpUser() {
  let history=useNavigate()
      // count++
      
    // console.log(count)
    // console.log(USerID, 'me')
    // let stored=(localStorage.getItem('User-SignUp-Data'))
    let holding=true
    let passwor = /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/;
    let UserDetails=[]
    const [useNAme, setuseNAme] = useState()
    const [UserLastName, setUserLastName] = useState()
    const [UserEmail, setUserEmail] = useState()
    const [password, setpassword] = useState()
    const [USerID, setUSerID] = useState()
   const [pop, setpop] = useState(false)
   const [signUP, setsignUP] = useState('SignUp')
   const [popAlert, setpopAlert] = useState(false)
   const [ErrMess, setErrMess] = useState()
  
  
  let { Data, pending, error } = useFetch('http://localhost:8000/posts')

  let savedData=localStorage.getItem('UserFormData')
  if(savedData){
    UserDetails=JSON.parse(savedData)
  }
  function submitForm(e) {
    let randomming = Math.floor(Math.random() * 2000)
    setsignUP('signingUp...')
    e.preventDefault()
    let SignUP = {useNAme, UserLastName, UserEmail, password, Admin: true, ClientCart: [], Id: randomming}
    UserDetails.push(SignUP)

    UserDetails.map(elem => {
      // console.log(elem.UserEmail)
         if (elem.UserEmail === UserEmail) {
           setpopAlert(true)
           setpopAlert(<> <h1>This Email Already Have An Account </h1> <p>SignUp with a valid Email</p>  <button onClick={()=>  setpopAlert(false)} className='btn btn-success'>Exit</button></>)
           setsignUP('signUp')
          // holding=false
      }else{
        holding=true
      }
       })
    
   
    if (useNAme && UserLastName && UserEmail && password !=0 && password.length>=7 &&  holding===true && UserEmail.includes("@")) {

    localStorage.setItem('UserFormData',JSON.stringify(UserDetails))
    console.log('Data sent')
          setpopAlert(true)
          setpopAlert(<> <h1>Account Created Successfully</h1><h2>Welcome {useNAme} {UserLastName}</h2><Link to='/login'><button className='btn btn-success'>Go To login Page</button></Link></>)
  } else {
      // alert('pls Check your Email And Password')
      // setpop(true)
      // setpopAlert(true)
      alert('check detail')
      setsignUP('signUp')
      setpopAlert(<> <h1>Pls Check your Email And Password </h1> <p>Your Email must include (@) and Your password must be greater than 7</p>  <button onClick={()=>  setpopAlert(false)} className='btn btn-success'>Exit</button></>)

  }
    
    
   
   }
   let saved=localStorage.getItem('User-SignUp-Data')

    return (
      <>
            <div className="alert">
                {/* <div id="alertBox" className={pop ? 'block' : 'none'}>
                    <h1 style={{fontWeigh:'100'}}>Account Created Successfully</h1>
                    <h2>Welcome {useNAme} {UserLastName}</h2>
                    <Link to='/login'><button className='btn btn-success'>Go To login Page</button></Link>
                </div> */}
                <div id="alertBox" className={popAlert ? 'block' : 'none'}>
                     {popAlert}
                    {/* <h1>Welcome {useNAme} {UserLastName}</h1> */}
                 
                </div>

       
                
            
      <div className='SignContainer'>
          <div className='signupBox'>
          <h1>Sign<span style={{padding: '20px'}}>UP</span></h1>
        <form className="row">
            <div className="col-md-4">
        <label htmlFor="validationDefault01" className="form-label">First name</label>
        <input type="text" className="form-control" id="validationDefault01" value={useNAme} onChange={(e)=> setuseNAme(e.target.value.trim())} />
      </div>
        <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="validationDefault02" value={UserLastName} onChange={(e)=> setUserLastName(e.target.value.trim())}/>
      </div>
        <div className="col-md-4">
        <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
        <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="email" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required value={UserEmail} onChange={(e)=> setUserEmail(e.target.value.trim())} />
        </div>
        <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">Password</label>
        <input type="password" className="form-control" id="validationDefault025" value={password} onChange={(e)=> setpassword(e.target.value.trim())}/>
        <p style={{color:'red'}}>Password Must be greater than 7letters</p>
       <Link to='/login'> <p>Already Have An account</p></Link>
      </div>
    </div>
    <button onClick={submitForm}>{signUP}</button>
</form>
</div>   
 </div>
</div>
    </>
  )
}

export default SignUpUser
