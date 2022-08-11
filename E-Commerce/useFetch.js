import React from 'react'
import Reac, {useState, useEffect} from 'react'
import Items from './Items'

function useFetch(url) {
    const [Data, setData] = useState([])
    const [pending, setpending] = useState(true)
    const [error, seterror] = useState(false)

    function onAddCart() {
        //  return {Data}
       return console.log('cool')
    }
    <Items ele={onAddCart} />
    useEffect(() => {
        return () => {
            fetch(url)
                .then((res) => {
                if (res.OK) {
                    throw Error('Sorrry! 🤔could not fetch item')
                }
               return res.json()
                }).then((data) => {
                    // console.log(data)
                setData(data)
                    setpending(false)
                    seterror(false)
                
            }).catch(err => {
                // console.log(err.message)
                seterror(err.message)
                seterror(true)
                setpending(false)
            })
        };
    }, [url])
   
    return {Data,pending,error}
}

export default useFetch