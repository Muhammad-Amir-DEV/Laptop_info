import React, { useState, useRef } from 'react';
import Laptop from '../assets/card (dextop view).png';
import lap from '../assets/lap.png'
import ram from '../assets/ram2.png'
import ssd from '../assets/ssd.png'
import key from '../assets/key.png'
import gpu from '../assets/gpu.png'
import port from '../assets/port.png'
import pro from '../assets/pro.png'
import dis from '../assets/dis.png'
import hero from '../assets/hero-img.png'
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa6";

const Intro = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cardContainerRef = useRef(null);

  const handlePrevClick = () => {
    if (activeCard > 0) {
      setActiveCard(activeCard - 1);
    }
  };

  const handleNextClick = () => {
    if (activeCard < arr.length) {
      setActiveCard(activeCard + 1);
    }
  };
  const arr = ['gen', 'pro', 'ram', 'ssd', 'dip', 'grap', 'pot', 'info']
  return (
    <div className=" bg-[#020a07] bg h-svh m-0 p-0">


      <div className=" w-full h-[100vh] bg-[#1d03031c] relative overflow-y-hidden text-gray-300">
        <div className="flex justify-center items-center h-[100vh] w-full ">
          <div className=' w-[10%] flex items-start justify-center'>
            <button className={`${activeCard === 0 ? "no" : " block text-2xl text-white mr-1 md:mr-5"}`} onClick={handlePrevClick}>

              < MdKeyboardArrowLeft />
            </button>
          </div>
          <div ref={cardContainerRef} className="flex items-center justify-between w-[80%] md:w-[65%]  h-[90vh] "

          >
            {/* cards */}
            <div className={`${activeCard === 0 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full  `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b] relative'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">GENERAL DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight /> Metal body.</p>
                  <p className='flex items-center gap-4'><FaHandPointRight /> Color or Theme (dark blue or silver) <span className='p-2 bg-color border-[1px] border-[#eeeeee52]'></span></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /> Rotate: 360</p>
                  <p className='flex items-center gap-4 '><FaHandPointRight /><p><span className=' text-red-600 font-semibold'>+8 </span>hour Battery life</p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight />Easily portable.</p>

                </p>
                <p className=' text-gray-500 md:text-[14px] text-[10px] mt-6 text-center'>Note: I required a laptop for programming.</p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={lap} className=' w-full md:absolute right-[-2rem]' alt="" />
              </div>
            </div>

            <div className={`${activeCard === 1 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">PROCESSOR DETAILS:</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight />Must be  i5 or greater if AMD ryzen 5 or greater.</p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Processor must be fall in categories of
                    <span className=' text-red-600 font-semibold'> P, S, H, HX</span>.</p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Clock Speed:<span className=' text-red-600 font-semibold'> 2.5GHz </span>or higher.</p> </p>
                  <p className='flex items-center gap-4'><FaHandPointRight />10th & greater Gen.</p>
                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={pro} className=' w-full  md:pl-3 pt-10' alt="" />
              </div>
            </div>

            <div className={`${activeCard === 2 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">RAM DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Ram is <span className=' text-red-600 font-semibold'>DDR 5</span> or higher.</p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p><span className=' text-red-600 font-semibold'>16 GB </span>storage.</p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Speed : <span className=' text-red-600 font-semibold' >2400 MHz</span> or higher.</p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Dual-channel RAM.</p></p>
                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={ram} className=' md:w-[80%] pl-5 md:pl-[4.5rem] md:pt-[2.5rem]' alt="" />
              </div>
            </div>

            <div className={`${activeCard === 3 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">SSD DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight /><p><span className=' text-red-600 font-semibold'>512 GB </span>storage.</p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Read/Write speed :<span className=' text-red-600 font-semibold'> 3000-3500 MBs.</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Type : <span className=' text-red-600 font-semibold'>PCLe or NVMe.</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Low power comsumption.</p></p>
                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={ssd} className=' w-full md:absolute pt-12 ' alt="" />
              </div>
            </div>

            <div className={`${activeCard === 4 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">DISPALY DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Full HD resolution:<span className=' text-red-600 font-semibold'>(1920x1080)</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Size : <span className=' text-red-600 font-semibold'>13 to 14 inch.</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Panel Type :<span className=' text-red-600 font-semibold'> IPS.</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p><span className=' text-red-600 font-semibold'>60 Hz</span> refresh rate.</p></p>
                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={dis} className='pl-4 md:pl-14 w-fit ' alt="" />
              </div>
            </div>
            
            <div className={`${activeCard === 5 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">KEYBOARD DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight /><p><span className=' text-red-600 font-semibold'>Smooth touch.</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Best Part is <span className=' text-red-600 font-semibold'>Keyboard Light.</span></p></p>
                  <p className='flex items-center gap-4'><FaHandPointRight /><p>Layout is as in Picture.</p></p>

                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={key} className='pl-3 md:pl-14 w-fit ' alt="" />
              </div>
            </div>

            <div className={`${activeCard === 6 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">PORTS DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                  <p className='flex items-center gap-4'><FaHandPointRight />Have all required ports:</p>
                  <p className=' pl-10 text-red-600 font-semibold'>
                  <p>USB</p>
                  <p>HDMI</p>
                  <p>SD CARD</p>
                  <p>Headphone Juck.</p>
                  </p>
                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={port} className=' w-full ' alt="" />
              </div>
            </div>

            <div className={`${activeCard === 7 ? 'block' : 'hidden'} h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-12 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[55%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px]">GPU DETAILS :</h2>
                <p className="md:text-[17px] text-[15px] pt-4 font-light text-md font-sans flex justify-center gap-4  flex-col">
                 <p>Integrated <span className=' text-red-600 font-semibold'>GPU ( Iris Xe or UHD ) </span> is sufficient.</p>
                </p>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] border-[.1px] border-[#3b3b3b]'>
                <img src={gpu} className='' alt="" />
              </div>
            </div>


            <div className={`${activeCard === 8 ? 'block' : 'hidden'}  h-full relative  flex flex-col-reverse md:flex-row md:items-center justify-center w-full `}  >

              <div className=' bg-[#031d14b9] px-4 py-6 overflow-y-hidden rounded-b-xl md:rounded-b-none h-[65%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b]'>
                <div className=' text-center flex flex-col items-center justify-center h-full'>
                  <h2 className="md:font-semibold text-[15px] font-medium md:text-[25px]">MUHAMMAD AMIR</h2>
                  <p className=' md:text-[13px] text-[#929292] text-[14px] pt-3 font-light text-md font-sans'>" A Next Js Developer and Working On Web3 Technologies." </p>
                  <p className=' md:text-[15px] text-[#929292] text-[14px] font-medium text-md font-sans pt-10'>MY CONTACTS</p>
                  <h2 className=" text-[14px] flex pt-6  text-xl font-semibold gap-10">

                    <a href="mailto:muhammadelia1514@gmail.com" className=' hover:text-green-700 hover:scale-125 ease-in-out  transition-all' target='_blank'><MdOutlineEmail /></a>
                    <a href="https://x.com/@MAmir369" className=' hover:text-green-700 hover:scale-125 ease-in-out  transition-all' target='_blank'><FaXTwitter /></a>
                    <a href="https://wa.me//03554763375" className=' hover:text-green-700 hover:scale-125 ease-in-out  transition-all' target='_blank'><SiWhatsapp /></a>
                    <a href="https://github.com/mElia-pro1514" className=' hover:text-green-700 hover:scale-125 ease-in-out  transition-all' target='_blank'><FaGithub /></a>
                  </h2>

                </div>
              </div>
              <div className='bg-[#031d14] relative py-3 px-4 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] '>
                <img src={hero} className=' h-full p-5 md:p-12 w-fit mx-auto' alt="" />
              </div>
            </div>
          </div>


          <div className=' w-[10%] flex items-end justify-center'>
            <button className={`${activeCard === 8 ? "no" : " block text-2xl text-white ml-1 md:ml-5"}`} onClick={handleNextClick}>

              < MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;