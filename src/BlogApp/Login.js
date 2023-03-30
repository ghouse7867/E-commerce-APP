import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { auth, provider } from './firebase';

function Login(props) {
  const navigate = useNavigate();
  function signIn() {

     signInWithPopup(auth, provider)
     .then( function(output){
      props.data(true)
       const userName = output.user.displayName
       const emailID = output.user.email
       console.log(userName, emailID)

         //Navigate to HomePage
         navigate("/home")

     })
     .catch(function(e){
        alert(e)
     })

  }

  return (
    <div>
      <button onClick = {signIn}>Sign In With Google</button>
    </div>
  )
}

export default Login