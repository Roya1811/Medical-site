import {useEffect, useState } from 'react'
function Counter(){
    const [count,setCount] =useState(0)
    useEffect(()=>console.log(count),[count])
    return(
        <div>
            <p>Counter</p>
            <button onClick={()=> setCount(count+1)}> + </button>
            <span>{count}</span>
            <button onClick={()=> setCount(count <= 0 ? 0 : count - 1)}> - </button>
        </div>
    )
}
export default Counter