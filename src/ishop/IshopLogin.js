import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

export default function IshopLogin() {
  let navigate = useNavigate();
  const [users, setusers] = useState("");
  const [cookies, setCookies, removecookie] = useCookies("");

  const formik = useFormik({
          initialValues:{
            UserId: "",
            Password: ""
          },

          onSubmit : values => {
             for(var user of users){
              if(user.UserId==values.UserId && user.Password==values.Password){
                setCookies("UserId", user.UserId)
                navigate("/dashboard")
              }else{
                navigate("/errorpage")
              }
             }
          }

  })

  useEffect(()=>{
    axios.get("http://localhost:4011/getusers")
    .then(response=>{
      setusers(response.data)
    })
  },[])

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Id</dt>
          <dd><input name='UserId' value={formik.values.UserId} onChange={formik.handleChange} type="text" /></dd>
          <dt>Password</dt>
          <dd><input name='Password' value={formik.values.Password}  onChange={formik.handleChange} type="password" /></dd>
        </dl>
        <button className="btn btn-primary" type='submit'>Login</button>
       <hr />
       <Link to="/register">New User?</Link>
       </form>
    </div>
  )
}
