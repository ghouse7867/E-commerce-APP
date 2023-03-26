import React from 'react'

import "./Style.css";

function Header() {
  return (
    <div className='all'>
    <div className="myimage">
       <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V9ycLxcoikE3W2u6UI3ZCjuEbnVuxFud1AGrpFqL&s"/>
    </div>
    <div className="mylinks">
      <a href='#'>Home</a>
      <a href='#'>TV Shows</a>
      <a href='#'>Movies</a>
      <a href='#'>News & Popular</a>
      <a href='#'>My Lists</a>
      </div>
      </div>
  )
}

export default Header