
// "use client"
// import {useState,useEffect} from "react"
// export default function FetchData(){
//     const [second,setSecond]=useState(0)
//    useEffect(() =>{
//     console.log("counter value",count)
// },[count]);

// useEffect(()=>{
//     const timer=setInterval (()=>{
//         setSecond((prev)=>prev+1)
//     },1000)
//     return()=>clearInterval(timer);
// },[])
   
//     return (
//       <div>
//        <p> Time:{second}</p>
      
//       </div>
//     )
// }
// "use client"
// import {useState, useEffect}from "react"
// export default function FetchData(){
//     return(
//         <div>
//             hello
//         </div>
//     )
// }
"use client"
import { useState,useEffect } from "react"

export default function Home(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    async function fetchUsers(){
      try{
const response=await fetch("https://jsonplaceholder.typicode.com/users")
const data=await response.json()
setUsers(data)
       
      }
      catch(error){
        console.log(error);
      }
    }
    fetchUsers()
  },[])
  console.log(users) 
  return(<>
      {users.map((user)=>{
        return(
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
  
  
  </>)
}
