import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useSelector} from  'react-redux'
function Navbar() {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className='bg-black p-4'>
      <nav className='flex justify-between items-center'>
        <ul className='text-white flex font-bold gap-5 mx-auto'>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        {/* Cart icon */}
        <div className='w-12'>
          <FaCartArrowDown
            className='text-white font-bold text-2xl cursor-pointer'
            onClick={() => navigate('/cartPage')} // Wrap navigate in an arrow function
          />
        </div>
        {/* Cart item count */}
        <span className="relative top--1 bg-green-400 right-6 text-white rounded-full px-3 py-2 text-xs">{totalQuantity}</span>
      </nav>
    </div>
  );
}

export default Navbar;
