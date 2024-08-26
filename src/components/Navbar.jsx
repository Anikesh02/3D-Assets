import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/features",
      display: "Features",
    },
    {
      path: "/plan",
      display: "Subscriptions",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];

const Navbar = () => {
  return (
    <nav>
        <ul className='flex flex-row gap-[80px]  items-center justify-center text-[16px] ml-3 mt-0 mb-9 text-white '>
        {navLinks.map((link) => ( 
          <li key={link.path} className='hover:cursor-pointer'>
            <Link to={link.path}>{link.display}</Link> 
          </li>
        ))}
        </ul>
    </nav>
  )
}

export default Navbar