import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Ishophome from './Ishophome';
import IshopLogin from './IshopLogin';
import IshopRegister from './IshopRegister';
import IshopDashboard from './IshopDashboard';


export default function IshopIndex() 
{
  return (
    <div className='container-fluid'>
      <header className='bg-danger text-white p-2 mt-2'>
        <h1>Ishop-Onile Store</h1>
      </header>
      <section className='mt-2 row'>
      <BrowserRouter>
        <nav className='col-3'>
          
          <div className="mb-2">
            <Link className="btn btn-danger w-100" to="home">Home</Link>
          </div>
          <div className="mb-2">
            <Link className="btn btn-danger w-100 my-2" to="register">Register</Link>
          </div>
          <div className="mb-2">
            <Link className="btn btn-danger w-100" to="login">Login</Link>
          </div>
          <div className="mb-2">
            <Link className="btn btn-danger w-100 my-2" to="dashboard">Dashboard</Link>
          </div>
          
        </nav>
        <main className='col-9'>
        <Routes>
          <Route path="/" element={<Ishophome/>} />
          <Route path="home" element={<Ishophome/>} />
          <Route path="login" element={<IshopLogin/>} />
          <Route path="register" element={<IshopRegister/>} />
          <Route path="dashboard" element={<IshopDashboard/>} />
          <Route path="errorpage" element={<main>
            <div>
              <h2>Invalid Credentials</h2>
            </div>
            <Link to="/login">Try Again</Link>
          </main>} />

        </Routes>
        </main>
        </BrowserRouter>
      </section>
    </div>
    

  )
}
