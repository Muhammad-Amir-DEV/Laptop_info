import React, { useState } from 'react';
import {
  MdOutlineEmail, MdKeyboardArrowLeft, MdKeyboardArrowRight
} from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaXTwitter, FaGithub, FaHandPointRight } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

import Laptop from '../assets/card (dextop view).png';
import lap from '../assets/lap.png';
import ram from '../assets/ram2.png';
import ssd from '../assets/ssd.png';
import key from '../assets/key.png';
import gpu from '../assets/gpu.png';
import port from '../assets/port.png';
import pro from '../assets/pro.png';
import dis from '../assets/dis.png';
import hero from '../assets/hero-img.png';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.4 } }
};

const Intro = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handlePrevClick = () => {
    if (activeCard > 0) setActiveCard(prev => prev - 1);
  };

  const handleNextClick = () => {
    if (activeCard < 8) setActiveCard(prev => prev + 1);
  };

  return (
    <div className="bg-[#020a07] h-screen bg">
      <div className="w-full h-full bg-[#1d03031c] relative text-gray-300">
        <div className="flex justify-center items-center h-full w-full">

          {/* Left Arrow */}
          <div className="w-[10%] flex justify-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className={`${activeCard === 0 ? "invisible" : "block text-3xl text-white"}`}
              onClick={handlePrevClick}
            >
              <MdKeyboardArrowLeft />
            </motion.button>
          </div>

          {/* Card Container */}
          <div className="relative w-[80%] md:w-[65%] h-[90vh] ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 h-full flex flex-col-reverse md:flex-row md:items-center justify-center w-full"
              >
                {/* Text Block */}
                <div className='bg-[#031d14b9] px-4 py-12 rounded-b-xl md:rounded-b-none h-[60%] md:h-[60%] md:w-[50%] md:rounded-l-xl shadow-2xl shadow-[#12752b]'>
                  <h2 className="md:font-semibold text-[16px] font-medium md:text-[20px] mb-4">
                    {activeCard === 0 ? "" :
                      activeCard === 1 ? "GENERAL DETAILS" :
                        activeCard === 2 ? "PROCESSOR DETAILS" :
                          activeCard === 3 ? "RAM DETAILS" :
                            activeCard === 4 ? "SSD DETAILS" :
                              activeCard === 5 ? "DISPLAY DETAILS" :
                                activeCard === 6 ? "KEYBOARD DETAILS" :
                                  activeCard === 7 ? "PORTS DETAILS" :
                                    "GPU DETAILS"}
                  </h2>

                  {/* Card Content */}
                  <div className="md:text-[17px] text-[15px] h-full  font-light text-md font-sans flex flex-col gap-3">
                    {activeCard === 0 && (
                      <>
                        <div className='  text-center flex flex-col items-center justify-center h-full gap-4 py-8'>
                          <div>
                            <h2 className="md:font-semibold text-[15px] font-medium md:text-[25px]">MUHAMMAD AMIR</h2>
                            <p className='md:text-[13px] text-[#929292] text-[14px] pt-3 font-light text-md font-sans'>" A Next Js Developer and Working On Web3 Technologies."</p>
                          </div>

                          <div> <h2 className=" md:text-[15px] text-[#929292] text-[14px] font-medium text-md font-sans pt-10">MY CONTACTS</h2>
                            <div className="text-[14px] flex pt-6  text-xl font-semibold gap-10">
                              <a href="mailto:muhammadelia1514@gmail.com" target='_blank'><MdOutlineEmail className='hover:text-green-500 hover:scale-125 transition-all' /></a>
                              <a href="https://x.com/@MAmir369" target='_blank'><FaXTwitter className='hover:text-green-500 hover:scale-125 transition-all' /></a>
                              <a href="https://wa.me//+923554763375" target='_blank'><SiWhatsapp className='hover:text-green-500 hover:scale-125 transition-all' /></a>
                              <a href="https://github.com/mElia-pro1514" target='_blank'><FaGithub className='hover:text-green-500 hover:scale-125 transition-all' /></a>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeCard === 1 && (
                      <>
                        <div className='flex justify-start gap-3 flex-col ' >
                          <p className=' flex_c'><FaHandPointRight /> Metal body.</p>
                          <p className=' flex_c'><FaHandPointRight /> Dark blue or silver theme <span className='p-2 bg-color border border-[#eeeeee52]'></span></p>
                          <p className=' flex_c'><FaHandPointRight /> Rotate: 360</p>
                          <p className=' flex_c'><FaHandPointRight /><span className='text-red-600 font-semibold'>+8 </span>hour Battery life</p>
                          <p className=' flex_c'><FaHandPointRight /> Easily portable.</p>
                          <p className='text-gray-500 md:text-[14px] text-[10px] mt-6 text-center'>Note: I required a laptop for programming.</p>
                        </div>
                      </>
                    )}

                    {activeCard === 2 && (
                      <>
                        <div className='flex justify-start gap-3 flex-col'>
                          <p className='flex_c'><FaHandPointRight /> Must be i5 or greater, or AMD Ryzen 5+</p>
                          <p className='flex_c'><FaHandPointRight /> Category: <span className='text-red-600 font-semibold'>P, S, H, HX</span></p>
                          <p className='flex_c'><FaHandPointRight /> Clock Speed: <span className='text-red-600 font-semibold'>2.5GHz+</span></p>
                          <p className='flex_c'><FaHandPointRight /> 10th Gen or newer</p>
                        </div>
                      </>
                    )}

                    {activeCard === 3 && (
                      <>
                        <div className='flex justify-start gap-3 flex-col'>
                          <p className='flex_c'><FaHandPointRight /> RAM is <span className='text-red-600 font-semibold'>DDR5</span>or higher.</p>
                          <p className='flex_c'><FaHandPointRight /><span className='text-red-600 font-semibold'>16 GB</span> memory</p>
                          <p className='flex_c'><FaHandPointRight /> Speed: <span className='text-red-600 font-semibold'>2400 MHz+</span></p>
                          <p className='flex_c'><FaHandPointRight /> Dual-channel supported</p>
                        </div>
                      </>
                    )}

                    {activeCard === 4 && (
                      <>
                        <div className="flex justify-start gap-3 flex-col">
                          <p className='flex_c'><FaHandPointRight />Minium storage<span className='text-red-600 font-semibold'>512 GB</span></p>
                          <p className='flex_c'><FaHandPointRight /> Read/Write speed : <span className='text-red-600 font-semibold'>3000-3500 MB/s</span></p>
                          <p className='flex_c'><FaHandPointRight /> Type: <span className='text-red-600 font-semibold'>PCLe or NVMe</span></p>
                          <p className='flex_c'><FaHandPointRight /> Power efficient</p>
                        </div>
                      </>
                    )}

                    {activeCard === 5 && (
                      <>
                        <div className="flex justify-start gap-3 flex-col">
                          <p className='flex_c'><FaHandPointRight /> Resolution: <span className='text-red-600 font-semibold'>(1920x1080)</span></p>
                          <p className='flex_c'><FaHandPointRight /> Size: <span className='text-red-600 font-semibold'>13 to 14 inches</span></p>
                          <p className='flex_c'><FaHandPointRight /> Panel: <span className='text-red-600 font-semibold'>IPS</span></p>
                          <p className='flex_c'><FaHandPointRight /> Refresh Rate: <span className='text-red-600 font-semibold'>60 Hz</span></p>
                        </div>

                      </>
                    )}

                    {activeCard === 6 && (
                      <>
                        <div className="flex justify-start gap-3 flex-col">
                          <p className='flex_c'><FaHandPointRight /> <span className='text-red-600 font-semibold'>Smooth touch</span></p>
                          <p className='flex_c'><FaHandPointRight />Enabled<span className='text-red-600 font-semibold'>Keyboard Light</span> </p>
                          <p className='flex_c'><FaHandPointRight /> Layout same as shown in Image</p>
                        </div>
                      </>
                    )}

                    {activeCard === 7 && (
                      <>
                        <div className="flex justify-start gap-3 flex-col">
                          <p className='flex_c'><FaHandPointRight /> All required ports</p>
                           <div className='flex flex-col gap-1 pl-10 w-full'>
                            <p className='text-red-600 font-semibold'> HDMI</p>
                           <p className='text-red-600 font-semibold'> USB</p>
                           <p className='text-red-600 font-semibold'> SD CARD</p>
                          <p className='text-red-600 font-semibold'> Headphone jack</p></div>
                        </div>
                      </>
                    )}

                    {activeCard === 8 && (
                      <>
                        <div className='flex justify-start gap-3 flex-col'>
                          <p className='flex_c'> Integrated<span className='text-red-600 font-semibold'>GPU ( Iris Xe or UHD )</span>is sufficient.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Image Block */}
                <div className='bg-[#031d14] py-6 px-8 rounded-t-xl h-[35%] md:h-[65%] md:w-[50%] md:rounded-xl shadow-2xl shadow-[#12752b] flex items-center justify-center'>
                  <img
                    src={
                      activeCard === 0 ? hero :
                        activeCard === 1 ? lap :
                          activeCard === 2 ? pro :
                            activeCard === 3 ? ram :
                              activeCard === 4 ? ssd :
                                activeCard === 5 ? dis :
                                  activeCard === 6 ? key :
                                    activeCard === 7 ? port :
                                      gpu
                    }
                    className='max-h-full max-w-full object-contain'
                    alt="card-img"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <div className='w-[10%] flex items-end justify-center'>
            <motion.button
              whileHover={{ scale: 1.2 }}
              className={`${activeCard === 8 ? "invisible" : "block text-3xl text-white ml-1 md:ml-5"}`}
              onClick={handleNextClick}
            >
              <MdKeyboardArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
