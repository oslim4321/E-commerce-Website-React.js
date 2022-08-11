import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function AdminUpload() {
    const [img, setimg] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [comment, setcomment] = useState('')
    const [FormALert, setFormALert] = useState('')
    const [Pending, setPending] = useState(false)
    let navigate=useNavigate()
    function PostProducts(e) {
        setPending(true)
        e.preventDefault()
        if (name && price && comment != 0) {
            let postItem = { img, name, comment, price }
            console.log(postItem)
            fetch('http://localhost:3000/blog',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postItem)
            }).then(() => {
                setPending(false)
                console.log('Data sent')
                navigate('/home')
            })
        } else {
            setFormALert('Fill all the product')
        }
    }

  return (
      <div className='adminUpload'>
          <h4>Post New Items for clients</h4>
          <form  onSubmit={PostProducts} className='Create'>
             <label htmlFor="file">Upload a pic</label>
              <input className='file' type='file' accept='image/*' value={img} onChange={(e) => setimg(e.target.files[0].name)} />
          
          <label>Product Name</label>
          <input value={name} onChange={(e)=> setname(e.target.value)} required type="text" placeholder='Product Name' />
          
          <label>Product price</label>
              <input value={price} onChange={(e)=> setprice(e.target.value)} type="text" placeholder='Product price' />
              
          <label>Your comment about the product</label>
              <input type="text" value={comment} onChange={(e) => setcomment(e.target.value)} placeholder='Product comment' />
              <p>{FormALert}</p>
              {!Pending && <button>Post</button>}
              {Pending &&  <button disabled>Posting...</button>}
          </form>
      </div>
      
  )
}

export default AdminUpload