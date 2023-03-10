import React from 'react';
import boat from "../../imges/001-boat.png"
import splash from "../../imges/005-splash.png"
import speed from "../../imges/004-speed-test.png"
import box from "../../imges/003-open-box-1.png"
import caroill from "../../imges/006-car-oil.png"


import './Card.css'

const Card = () => {
    return (
        <div className='pl-5 grid grid-cols-4 gap-5'>
             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={boat} alt="" />
                <h2 className='text-3xl font-bold'>12</h2>
                </div>
                <p className='font-medium text-xs text-[
#757575] mt-4'>Renewal/Abnormality</p>
                <h3 className='text-base font-bold'>Cargo Gear</h3>
                
             </div>

             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={splash} alt="" />
                <h2 className='text-xs font-medium text-[#393939]'>Mon-05-02-23</h2>
                </div>
                <div className='flex justify-between items-center mt-4'>
                <h3 className='text-base font-bold'>Daily Excess <br />
                Consumption</h3>
                <h2 className='text-xs font-medium text-[#393939] text-end'>VLSFO : 10 MT <br /> LSMGO : 30 MT <br /> MDO : 12 MT</h2>
                </div>
                
                
                
             </div>
             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={speed} alt="" />
                <h2 className='text-3xl font-bold'>5</h2>
                </div>
                
                <h3 className='text-base font-bold mt-4'>Daily Speed <br /> Underperformance</h3>
                
             </div>
             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={box} alt="" />
                <h2 className='text-3xl font-bold'>5</h2>
                </div>
              
                <h3 className='text-base font-bold mt-4'>Cargo Loading <br /> Report</h3>
                 
             </div>
             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={box} alt="" />
                <h2 className='text-3xl font-bold'>4</h2>
                </div>
              
                <h3 className='text-base font-bold mt-4'>Cargo Discharge <br /> Report</h3>
                 
             </div>
             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={splash} alt="" />
                <h2 className='text-xs font-medium text-[#393939]'>15-01-23 to Present</h2>
                </div>
                <div className='flex justify-between items-center mt-4'>
                <h3 className='text-base font-bold'>Total Voyage <br />
                Excess <br /> Consumption</h3>
                <h2 className='text-xs font-medium text-[#393939] text-end'>VLSFO : 10 MT <br /> LSMGO : 30 MT <br /> MDO : 12 MT</h2>
                </div>
                
                </div>

                <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={caroill} alt="" />
                <h2 className='text-3xl font-bold'>11</h2>
                </div>
                
                <h3 className='text-base font-bold mt-4'>Upcoming Bunker <br /> Demands</h3>
                
             </div>

             <div className=' w-60 bg-white p-3 rounded-lg card_bg_img bg-cover' >
                <div className='flex justify-between items-center'>
                <img className='bg-[#2C64E4] rounded-full p-3' src={boat} alt="" />
                <h2 className='text-3xl font-bold'>7</h2>
                </div>
                <div className='flex justify-between items-center mt-4'>
                <h3 className='text-base font-bold'>Crane Breakdown <br /> Loss</h3>
                <h2 className='text-xs font-medium text-[#393939] text-end'>Total: 20 hrs <br /> 15-01-23</h2>
                </div>
                
                </div>
        </div>
    );
};

export default Card;