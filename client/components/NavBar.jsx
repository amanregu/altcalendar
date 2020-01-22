import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Button } from 'antd';


const NavBar = () => (
  <>
    <nav className="nav-bar">

      <Link to="/intergration">
        <Button type="primary">Intergration</Button>
      </Link>
      <Link to="/signup"><Button className="btn" type="primary">SignUp</Button></Link>
      <Link to="/login"><Button type="primary">Login</Button></Link>


    </nav>
  </>
);

export default NavBar;
