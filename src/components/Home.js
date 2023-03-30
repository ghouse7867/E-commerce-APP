// import React from 'react';

// const Home = () => {
//   return (
//     <div className="ui raised very padded text constainer segment"
//     style={{marginTop:"80px"}}
//     >
//      <h3 className = "ui header">Home</h3>
//      <p style={{color:"grey"}}>Lorem Ipsum Text This is home page</p>
//     </div>
//   )
// }

// export default Home;

import { useEffect, useState } from "react";
import UserCard from "./UserCard";
export default function Homes(){

const [users,setUsers] = useState([]);

const apiURL = "https://jsonplaceholder.typicode.com/users";



var req = new Request(apiURL)

async function fetchData(){
  try {
    fetch(req).then((res)=>res.json()).then((data)=>setUsers(data));
    console.log(users)
  }
  catch(error){
    console.log(error)
  }
}
useEffect(()=>{
  fetchData();
},[]);

// export default function Homes() {
//   const [myName, setmyName] = useState("md")
  

//   function changeName(){
//     setmyName("moid => the name is changed")
//   }
 
    // <div className="container-fluid">
    //    <h2>name:{myName}</h2>
    // <button className="btn btn-success" onClick={changeName}>Change Name</button>
    // Api key: 33bbca0e4a7947fa9ad47d53f662ce55
    return (
      <div className="users">
         {users.map((user)=>{
            return(
              
              <UserCard user={user}/>
            )
         })}
      </div>
    );
  }
    
