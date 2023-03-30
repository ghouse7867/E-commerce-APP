import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Ecommerce from './Ecommerce'
import Jqueryajaxdemo from './Jqueryajaxdemo'

export default function SpaComponent() {
  return (
   <div className="container-fluid">
         <BrowserRouter>
         <nav>
          <ul className="d-flex my-2 mx-2 list-inline">
            <li className="my-2 mx-2"><Link to="/Html">HTML</Link></li>
            <li className="my-2 mx-2"><Link to="/Css">CSS</Link></li>
            <li className="my-2 mx-2"><Link to="/Javascript">Javascript</Link></li>
            <li className="my-2 mx-2"><Link to="/Form">Form</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes>
           <Route path="Html" element={
            <main>
              <h2>Html</h2>
              <p>It is a markup language</p>
            </main>
           }/>
           <Route path="Css" element={
            <main>
              <h2>Css</h2>
              <p>It defines styles</p>
            </main>
           }/>
           <Route path="Javascript" element={
            <main>
              <h2>JavaScript</h2>
              <p>It is a programming language</p>
              <Ecommerce />
            </main>
           }/>
            <Route path="Form" element={
            <main>
              <Jqueryajaxdemo />
            </main>
           
           }/>

          </Routes>
         </BrowserRouter>
   </div>
  )
}
