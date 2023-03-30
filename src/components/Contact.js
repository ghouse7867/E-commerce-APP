import React from 'react';
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
     <div className="ui raised very padded text constainer segment"
    style={{marginTop:"80px"}}
    >
     <Link to='/alex'className = "ui header">Alex</Link>
     <p>Lorem Ipsum Text This is contact page</p>
    </div>
    <div className="ui raised very padded text constainer segment"
    style={{marginTop:"80px"}}
    >
     <Link to='/tom'className = "ui header">Tom</Link>
     <p>Lorem Ipsum Text This is contact page</p>
    </div>
    </div>
    
  )
}

export default Contact;