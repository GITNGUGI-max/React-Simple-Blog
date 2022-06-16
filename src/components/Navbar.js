import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/create'>New Blog</Link>
    </div>

    <Outlet/>
    </>
  )
}

export default Navbar