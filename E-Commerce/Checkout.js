import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    let UserInfo=[]
    const [USerFirstName, setUSerFirstName] = useState()
    const [UserLastName, setUserLastName] = useState()
    const [USerEmail, setUSerEmail] = useState()
    const [USerZip, setUSerZip] = useState()
    const [userCountry, setuserCountry] = useState()
    const [userCity, setuserCity] = useState()
    console.log()
    let UserData = { USerFirstName, UserLastName, USerEmail, USerZip, userCountry, userCity }

    function SendUSerDAta(e) {
        e.preventDefault()
        UserInfo.push(UserData)
        if (USerFirstName && UserLastName && USerEmail && USerZip && userCountry && userCity !=0) {
            localStorage.setItem('UserData',JSON.stringify(UserInfo))
        } else {
            alert('pls fill all the form')
        }

    }
    

  return (
      <>
          <div className="body">
     <div className="bodyBox">
        <form className="row g-3">
         <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" onChange={(e)=> setUSerFirstName(e.target.value)} value={USerFirstName}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" onChange={(e)=> setUserLastName(e.target.value)} value={UserLastName}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required onChange={(e)=> setUSerEmail(e.target.value)} value={USerEmail}/>
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Zip/Portal Code</label>
    <input type="text" className="form-control" id="validationDefault02" onChange={(e)=> setUSerZip(e.target.value)} value={USerZip} />
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Shipping Country</label>
    <input type="text" className="form-control" id="validationDefault02" onChange={(e)=> setuserCountry(e.target.value)} value={userCountry} />
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=> setuserCity(e.target.value)} value={userCity}/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label">Shipping Subdivision</label>
    <select className="form-select" id="validationDefault04" required>
      {/* <option selected disabled value="">Choose...</option> */}

      {/* <option>...</option> */}
    </select>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      {/* <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/> */}
      {/* <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label> */}
    </div>
  </div>
  <div className="butt">
    <Link to="/product"><button className="btn btn-primary" type="submit">Back to cart</button></Link>
    <button className="btn btn-primary" type="submit" onClick={SendUSerDAta}>Next</button>
  </div>
</form>
</div>
</div>
</>
  )
}

export default Checkout