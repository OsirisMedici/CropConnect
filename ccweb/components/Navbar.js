import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  useEffect(() => {
    const changeColor= () =>{
      if(window.scrollY >=200) {
        setColor('#ffffff')
        setTextColor('#642b08')
      }
      else{
        setColor('transparent')
        setTextColor('#ffffff')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-500">
      <div className="max-w-[1100px] m-auto flex justify-between items-center p-4 text-white">
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className="text-2xl">|OiO|</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex uppercase font-sans text-sm ease-in-out duration-500">
          <li className="px-4 hover:font-semibold duration-200">
            <Link href='/'>Home</Link>
          </li>
          <li className="px-4 hover:font-semibold duration-200">
            <Link href='/productpage'>Products</Link>
          </li>
          <li className="px-4 hover:font-semibold duration-200">
            <Link href='/contactpage'>Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar