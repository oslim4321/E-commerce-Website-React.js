import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../ContextApi'
import useFetch from './useFetch'

function DashBoard() {
  const { } = useGlobalContext()
  let history=useNavigate()
  let i=1
  let { id } = useParams()
    
   
  let DataUser = useFetch('http://localhost:8000/posts')

  let saved = JSON.parse(localStorage.getItem('UserFormData'))
  let IdLogin = JSON.parse(localStorage.getItem('IdLogin'))

  return (
    <div>
      DashBoard
      <h1>Hi this is the dashboard</h1>
      <div className="adminDashBoard">
        <h1>Hi {IdLogin.useNAme} this is the dashboard?? your id is {IdLogin.Id} </h1>
       <h3>You are one of our App Admin GO through our users</h3>
      
       
       <table  className="table table-striped ">
        <thead>
          
        <tr>
        <th>List</th>
        <th>First Name</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Password</th>
        <th>id</th>
        <th>Details</th>
      </tr>
         {
         DataUser &&
         saved.map(ele => {
       return(
        <tr key={ele.Id}>
        <td>({i++})</td>
        <td>{ele.useNAme}</td>
        <td>{ele.UserLastName}</td>
        <td>{ele.UserEmail}</td>
        <td>{ele.password}</td>
        <td>{ele.Id}</td>
        {/* <td><Link to={`/AllClientDetails`}>Check</Link></td> */}
        {/* <td onClick={()=>navigate(ele,history)}>Check</td> */}
        <td> <Link to={`/AllClientDetails/${ele.Id}`}>Check</Link></td>
     </tr>
       )
        })
      }
     
    </thead>
    <tbody>
      
      {/* <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr> */}
    </tbody>
        </table>
        </div>
    </div>
  )
}

export default DashBoard