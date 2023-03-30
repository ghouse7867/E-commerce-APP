import React from 'react'
import {useFormik} from 'formik';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function IshopRegister() 

{
  let navigate=useNavigate()

  const formik = useFormik({
    initialValues : {
      UserId: "",
      UserName: "",
      Password: "",
      Age: "",
      Mobile: "",
      Subscribed: false
   },

  onSubmit: async (values) => {
    try {
      // Use axios to send the form data
      const response = await axios.post('http://localhost:4011/adduser', values);
      console.log(response.data); // Log the response data to the console
      formik.resetForm(); // Reset the form
      alert('Registered Successfully');
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert('Registration Failed'); // Display an error message
    }
  },
})


  return (
    <div className="container-fluid d-flex" >
      <form onSubmit={formik.handleSubmit} style={{ width: '400px'}}>
      <h2>Register User</h2>
        <dl>
          <dt>User Id</dt>
          <dd><input className="form-control" type="text" value={formik.values.UserId} onChange={formik.handleChange} name="UserId"/></dd>
          <dt>User Name</dt>
          {/* <dd className="text-danger">{username}</dd> onKeyUp={VerifyUser} */}
          <dd><input className="form-control"  type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName"/></dd>
          <dt>Password</dt>
          <dd><input className="form-control" type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password"/></dd>
          <dt>Age</dt>
          <dd><input className="form-control" type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age"/></dd>
          <dt>Mobile</dt>
          <dd><input className="form-control" type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile"/></dd>
          <dt>Subscription</dt>
          <dd className='form-switch'><input className="form-check-input" type="checkbox" value="true" checked={formik.values.Subscribed} onChange={formik.handleChange} name="Subscribed"/></dd>
        </dl>
        <button className='btn btn-primary' type='submit'>Register</button>
        <hr/>
        <Link to="/login">Already have account</Link>
      </form>
      </div>
  );

}


