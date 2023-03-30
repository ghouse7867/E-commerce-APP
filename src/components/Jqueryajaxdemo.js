import {useState, useEffect} from 'react';
import $ from 'jquery';
import {useFormik} from 'formik';
import axios from 'axios';

export default function Jqueryajaxdemo(){
  const [users, setUsers] = useState([]);
  const [username, setusername] = useState("");

  const formik = useFormik({
           initialValues : {
              UserId: "",
              UserName: "",
              Password: "",
              Age: "",
              Mobile: "",
              Subscribed: false
           },
          //  onSubmit: values => {
          //   alert(JSON.stringify(values))
          //   $.ajax({
          //     url: 'http://localhost:8009/senduser',
          //     method: 'POST',
          //     dataType: 'json',
          //     data: values,
            
          //  });
          //  alert("Registered Sucessfully");
          //  alert(JSON.stringify(values))
          // }
          // validationSchema,
          onSubmit: async (values) => {
            try {
              // Use axios to send the form data
              const response = await axios.post('http://localhost:4011/adduser', values);
              console.log(response.data); // Log the response data to the console
              formik.resetForm(); // Reset the form
              alert('Registered Successfully');
            } catch (error) {
              console.error(error);
              alert('Registration Failed'); // Display an error message
            }
          },
  })

  useEffect(()=>{
      // $.ajax({
      //   method:"POST",
      //   url:"http://localhost:8001/senduser",
      //   data: values,
      //   success: function(response){
      //     setUsers(response)
      //   }
      // })
      axios.get('http://localhost:4011/getusers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },[users])

  function VerifyUser(e){
     for(var user of users){
      if(user.UserName==e.target.value){
           setusername("user name taken")
           break;
      }else{
        setusername("user name available")
      }
     }
  }

   return(
    <div className="container-fluid d-flex justify-content-center bg-info" >
      <form onSubmit={formik.handleSubmit} style={{ width: '400px'}}>
      <h2>Register User</h2>
        <dl>
          <dt>User Id</dt>
          <dd><input className="form-control" type="text" value={formik.values.UserId} onChange={formik.handleChange} name="UserId"/></dd>
          <dt>User Name</dt>
          <dd className="text-danger">{username}</dd>
          <dd><input className="form-control" onKeyUp={VerifyUser} type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName"/></dd>
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
      </form>
      <div className="container-fluid" style={{ height: '600px', overflowY: 'scroll' }}>
      <h2>User List</h2>
      <ul className='text-success'>
        
         <table className="table table-striped table-hover table-info table-bordered border-primary">
         <thead>
           <tr>
             <th scope="col">User Name</th>
             <th scope="col">User Id</th>
             <th scope="col">Mobile</th>
             <th scope="col">Password</th>
             <th scope="col">Subscribed</th>
             <th scope="col">Age</th>
           </tr>
         </thead>
         
         <tbody>
         {users.map(user => (
           <tr>
             <td>{user.UserName}</td>
             <td>{user.UserId}</td>
             <td>{user.Mobile}</td>
             <td>{user.Password}</td>
             <td>{user.Subscribed ? 'Yes' : 'No'}</td>
             <td>{user.Age}</td>
           </tr>
         
         ))}
         </tbody>
       </table>
          
        
      </ul>
    </div>
    </div>
  );
}