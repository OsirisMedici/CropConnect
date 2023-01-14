import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Background from '../public/assests/image.jpg';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-[20rem]">
    <Image className="h-full w-full object-cover" alt="farming" src={Background}/>
      <div/>
      <div className="absolute p-5 text-[#7d4420] x=[2] md:ml-[50rem] md:mt-0 mt-[-5rem]">
        <h2 className=" text-[2.5rem] font-sans-serif">Crop<span className="font-bold">Connect</span></h2>
        <p className="py-5 text-1xl text-[#9f4a29]">A website which removes the middlemen from the entire agriculture sector. A combination of blockchain and IOT which creates a smart and secure agricultural system with full transparency. We empower all the market players by building relationship of trust between each other.</p>
        <Link href="/#login"><button className=" px-8 py-2 border-2 text-white hover:scale-105 duration-200">LogIn</button></Link>
      </div>
    </div>
  )
}

export default Home