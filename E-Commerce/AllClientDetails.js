import React from 'react'
import useFetch from './useFetch'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../ContextApi'


function AllClientDetails() {
  const { navigate, hold } = useGlobalContext()
  let { id } = useParams()
  let Data = JSON.parse(localStorage.getItem('UserFormData'))
  
  let collect = Data.filter(elem => {
    return elem.Id == id
  });

  // let { Data, pending, error } = useFetch('http://localhost:8000/posts/' + id)
  let itemBrought = JSON.parse(localStorage.getItem('IdLogin'))
  let testing=false

  if (itemBrought.Id == id) {
    testing=true
  } else {
    testing=false
  }
  return (
    <div className='AllClientDetails'>
                 <>
                 {
                  collect.map(elem=>{
                    return <h1 key={elem.Id}>Helloe {elem.useNAme} {elem.UserLastName}</h1>
                  })
                 }
                 
                      <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                            <th>List of Item Brought</th>
                            <th>Price</th>
                            {/* <th>last bought Date</th> */}
                            <th>trasaction</th>
                            <th>country</th>
                            <th>cp</th>
                        </tr>
                    
                    {testing &&
                          itemBrought.ClientCart.map(elem=>{
                            return(
                              <tr key={elem.id}>
                                <td>{elem.name}</td>
                                <td>{elem.price}</td>
                             </tr>
                            )
                          })
                        }
                        
                          </thead>
                    </table>
                  </>
        
    </div>
  )
}

export default AllClientDetails