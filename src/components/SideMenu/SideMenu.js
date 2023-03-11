import React, { useState } from 'react';
import global from '../../imges/earth 1.png'
import vector from '../../imges/Ellipse 19.png'
import charico from '../../imges/Frame 122.png'
import Card from '../Card/Card';
import Chart from "react-apexcharts";


const SideMenu = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      colors: ['#6AC446', '#ffffff', '#9C27B0'],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })

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

            <div class="flex flex-col w-full border-opacity-50 my-3">
              <div class="divider text-xl font-bold text-[#596B8D]">Cargo Gear</div>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-2 gap-5'>
              <div className=''>
                <div className='flex justify-between items-center px-10'>
                  <div>
                    <h3 className='text-base font-bold'>Abnormality Alerts</h3>
                  </div>
                  <div className='flex gap-3'>
                    <select class="bg-transparent">
                      <option>Mv Jawad</option>
                      <option>Mv Jawad</option>
                    </select>
                    <img className='' src={charico} alt="" />
                  </div>

                </div>

                <Chart
                  options={state.options}
                  series={state.series}
                  type="area"
                  width="500"
                />
              </div>
              <div className=''>
                <div className='flex justify-between items-center px-10'>
                  <div>
                    <h3 className='text-base font-bold'>Breakdown History</h3>
                  </div>
                  <div className='flex gap-3'>
                  <h2 className='text-xs font-medium text-[#393939]'>Total: 20hrs</h2>
                    <img className='' src={charico} alt="" />
                  </div>

                </div>

                <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
                  width="500"
                />
              </div>
            </div>


            <div>


            </div>

          </div>

        </div>

        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 w-60 bg-[#0F141F] text-base-content">

            <li><a href='/' className='g_btn'> <img src={global} alt="" /> Global</a></li>
            <li className='text-[#6D7DA0] text-sm font-semibold my-3'>
              Individual Ship
            </li>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-[#2E3A54]  rounded-xl text-primary-content peer-checked:bg-[#2E3A54] peer-checked:text-secondary-content">
                <div className='flex justify-center items-center '>
                  <img src={vector} alt="" />
                  <h1 className='ml-2 text-sm font-semibold'> Ansarul Hoque</h1>

                </div>
              </div>
              <div class="collapse-content bg-transparent  rounded-xl text-primary-content peer-checked:bg-transparent peer-checked:text-secondary-content">
                <ul class="steps steps-vertical">
                  <li class="step  ">
                    Jahan Brothers 2
                  </li>
                  <li class="step ">Jahan Brothers 2 </li>
                  <li class="step">Jahan Brothers 2 </li>
                </ul>
              </div>

            </div>
            <div class="collapse my-3">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-[#2E3A54]  rounded-xl text-primary-content peer-checked:bg-[#2E3A54] peer-checked:text-secondary-content">
                <div className='flex justify-center items-center '>
                  <img src={vector} alt="" />
                  <h1 className='ml-2 text-sm font-semibold'> Ansarul Hoque</h1>

                </div>
              </div>
              <div class="collapse-content bg-transparent  rounded-xl text-primary-content peer-checked:bg-transparent peer-checked:text-secondary-content">
                <ul class="steps steps-vertical">
                  <li class="step  ">
                    Jahan Brothers 2
                  </li>
                  <li class="step ">Jahan Brothers 2 </li>
                  <li class="step">Jahan Brothers 2 </li>
                </ul>
              </div>

            </div>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-[#2E3A54]  rounded-xl text-primary-content peer-checked:bg-[#2E3A54] peer-checked:text-secondary-content">
                <div className='flex justify-center items-center '>
                  <img src={vector} alt="" />
                  <h1 className='ml-2 text-sm font-semibold'> Ansarul Hoque</h1>

                </div>
              </div>
              <div class="collapse-content bg-transparent  rounded-xl text-primary-content peer-checked:bg-transparent peer-checked:text-secondary-content">
                <ul class="steps steps-vertical">
                  <li class="step  ">
                    Jahan Brothers 2
                  </li>
                  <li class="step ">Jahan Brothers 2 </li>
                  <li class="step">Jahan Brothers 2 </li>
                </ul>
              </div>

            </div>
          </ul>

        </div>
      </div>
    </div>

  );
};

export default SideMenu;