import React from 'react';
import global from '../../imges/earth 1.png'
import Card from '../Card/Card';

const SideMenu = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-[#F4F8FF]">
    
 
  <div class="navbar bg-[#F4F8FF]">
  <div class="flex-1">
    <h2 class=" normal-case text-2xl text-[#0F141F] font-bold">Global Ship Report</h2>
  </div>
  <div class="flex-none">
  <label for="my-drawer-2" class=" text-[#2668FF] drawer-button mt-3 mr-5 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  </div>
</div>

<div>
  
   <Card></Card>
  
</div>

  </div> 
  
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-60 bg-[#0F141F] text-base-content">
      
      <li><a href='/' className='g_btn'> <img src={global} alt="" /> Global</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
</div>
            
    );
};

export default SideMenu;