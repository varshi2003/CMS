import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";


import "./sidenav.css";
const SideNav = () => {
  return (
          // <Nav className="flex-column py-3 sidenav">
          <div className='navitems'>
            {/* <Nav.Link className='navlinks'><Link className='navlink' to='/' >DASHBOARD</Link></Nav.Link> */}
           <Link className='navlink' to='/operator_profile'>OPERATOR PROFILE</Link>
            {/* <Nav.Link className='navlinks'><Link className='navlink' to='/clientDetails'>CLIENT DETAILS</Link> </Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/driverstransaction'> DRIVERS TRANSACTION</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/clientTransaction'>CLIENT TRANSACTION</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/fishermenTransaction'> FISHERMEN TRANSACTION</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/orderFishTransaction'> ORDER FISH TRANSACTION</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/fishStocks'>FISH STOCKS</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/fishRate'>FISH RATE</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/credits'>CREDITS</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/debits'>DEBITS</Link></Nav.Link>
            <Nav.Link className='navlinks'><Link className='navlink' to='/roleupdation'>UPDATION FORM</Link></Nav.Link> */}
          </div>
//         </Nav>
  )
}

export default SideNav