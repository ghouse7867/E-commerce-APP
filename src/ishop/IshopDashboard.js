import React from 'react';
import { useCookies } from 'react-cookie';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';



export default function IshopDashboard() {
  let navigate = useNavigate();
  const [UserId, setUserId] = useState();
  const [cookies, setCookies, removeCookie] = useCookies();
  
  useEffect(()=>{
   
    if(cookies["UserId"]==undefined){
      navigate("/login")
    }else{
      setUserId(cookies["UserId"]);
    }
    
  },[]);

  function HandleSignout(){
    removeCookie("UserId")
    navigate("/login")
  }
  console.log(UserId)
  return (
    <div>
      <h2>User Dashboard <span className="text-success">{UserId}</span>- <button onClick={HandleSignout} className = "btn btn-info">Sign Out</button></h2>
    </div>
  )
}
