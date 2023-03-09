import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-[#0F141F] h-20">
  <div class="navbar-start w-60">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
      <li><a href='/' className='h_btn active'>Dashboard</a></li>
      <li><a href='/' className='h_btn'>Cargo Gear</a></li>
      <li><a href='/' className='h_btn'>Breakdown</a></li>
      <li><a href='/' className='h_btn'>Cargo Operation</a></li>
      <li><a href='/' className='h_btn'>Bunkar</a></li>
      <li><a href='/' className='h_btn'>Time Loss</a></li>
      <li><a href='/' className='h_btn'>Port turn Out</a></li>
      <li><a href='/' className='h_btn'>Ballast Tank</a></li>
      <li><a href='/' className='h_btn'>Demarrage & Despatch</a></li>
      <li><a href='/' className='h_btn'>Voyage Summary</a></li>
      <li><a href='/' className='h_btn'>Ballast Tank</a></li>
      </ul>
    </div>
    <span class="ml-5 text-white text-sm">SMK LTD.</span>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-white">
      <li><a href='/' className='h_btn active'>Dashboard</a></li>
      <li><a href='/' className='h_btn'>Cargo Gear</a></li>
      <li><a href='/' className='h_btn'>Breakdown</a></li>
      <li><a href='/' className='h_btn'>Cargo Operation</a></li>
      <li><a href='/' className='h_btn'>Bunkar</a></li>
      <li><a href='/' className='h_btn'>Time Loss</a></li>
      <li><a href='/' className='h_btn'>Port turn Out</a></li>
      <li><a href='/' className='h_btn'>Ballast Tank</a></li>
      <li><a href='/' className='h_btn'>Demarrage & Despatch</a></li>
      <li><a href='/' className='h_btn'>Voyage Summary</a></li>
      <li><a href='/' className='h_btn'>Ballast Tank</a></li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;