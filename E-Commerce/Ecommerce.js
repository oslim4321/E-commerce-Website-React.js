import Reac, {useState, useEffect} from 'react'
import Items from './Items'
import useFetch from './useFetch'




function Ecommerce({onclickButt}) {
    let { Data, pending, error } = useFetch('http://localhost:3000/blog')
    // let { UserTargetData } = useFetch('http://localhost:8000/posts/' +id)
    // console.log(Data)
    return (
            <>
            {<h1 style={{marginTop: "100px"}}>{error}</h1>}
            {pending && <h1 style={{marginTop: "100px"}}>loading...</h1>}
            <div className="hand">
            <div className="row row-cols-1 row-cols-md-5 g-4 griding">
                {Data && <Items element={Data} onclickButt={onclickButt} />}
            </div>
            </div>
            
        </>
        )
        
            
}

export default Ecommerce