import { useEffect, useState } from 'react'

function Home(){
    const[data,setData]= useState([])
    const [newData,setNewData]= useState({title:"",descriptions:""})

    useEffect(( )=>{
        getTodosData()
     },[])

    function getTodosData(){
        fetch('http://localhost:3000/todos')
        .then(response=> response.json())
        .then(json => setData(json))
    }
    
    function handleData(id,statusData){
           fetch(`http://localhost:3000/todos/${id}`,{method:"PATCH",
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify({status: !statusData})
           })
           .then(response=>response.json())
           .then(()=> getTodosData())
    }
   function addTodo(){
    fetch(`http://localhost:3000/todos`,{method:"POST",
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify({status: false,descriptions:newData.descriptions, title:newData.title})
           })
           .then(response=>response.json())
           .then(()=> {setNewData({title:"",descriptions:""})
           getTodosData()
            
           })


   }
    
        
    return(

        <>
        {data.map((item,index)=>(<div key={index}>
            <h4>{item.title}</h4>
            <span className={item.status ? 'complete-item' : ' '} >{item.descriptions}</span>
            <input type="checkbox" checked={item.status} onChange={()=>handleData(item.id,item.status)}  />

        </div>))}
        <form> 
            <input value={newData.title} type="text" placeholder='Add title' onChange={(e)=>setNewData({...newData,title: e.target.value})} />
            <input value={newData.descriptions} type="text" placeholder='Add description' onChange={(e)=>setNewData({...newData,descriptions: e.target.value})} />
            <button type='button' onClick={()=>addTodo()}>Add todo</button>

        </form>
        </>

    )
}
 export default Home