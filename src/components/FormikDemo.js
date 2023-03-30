import {Formik, useFormik} from 'formik';

export default function FormikDemo()
{


  const formik = useFormik({
    initialValues : {
      UserName: '',
      Password: '',
      Age: '',
      Mobile: '',
      Subscribed: '',
    },
    onSubmit: values =>{
    
    }
  })

  return(
    <div className="container-fluid">
      <form>
        <h2>Register User</h2>
        <dl>
          <dt>User Name</dt>
          <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text" /></dd>
          <dt>Password</dt>
          <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password}type="password" /></dd>
          <dt>city</dt>
          <dd>
            <select name="City">
              <option>Delhi</option>
              <option>Hyd</option>
              <option>Goa</option>
            </select>
          </dd>
        </dl> 
        <button>Register</button>
      </form>
      <h2>User Details</h2>
      {formik.values.UserName} <br/>
      {formik.values.Password}
    </div>
  )
}