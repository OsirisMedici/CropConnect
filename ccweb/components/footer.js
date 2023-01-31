import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footer = () => {
  return (
      <main>
        <section className="md:max-w-[50%] max-w-[85%] m-auto md:px-16 px-2 py-3 rounded-md transition-transform translate-y-10 bg-white">
      <div className="grid grid-cols-3 items-center md:gap-20 gap-4 ">
          <div className="text-gray-600 md:text-1xl text-sm">
            <h3>Ready to get started</h3>
          </div>
          <div className='text-white'>
            <Link href="/">
              <button className="bg-gradient-to-tr md:text-lg text-sm from-[#953508] via-[#ca6512] to-[#f3ba2b] md:h-10 md:w-32 h-8 w-20 hover:scale-105 duration-100 ease-in-out hover:tracking-wide rounded-md  ">Get Started</button>
            </Link>
          </div>
          <div className="text-gray-600 md:text-1xl text-sm">
            <h3>Talk to us today</h3>
          </div>
      </div>
    </section>
    <footer className="md:px-1 py-20 md:h-[23rem] h-[34rem] bg-gray-100 ">
        <div className="md:max-w-[70%] m-auto md:px-16 px-6 md:py-2 md:grid md:grid-cols-4 grid grid-cols-2">
            <div className='footer-about'>
                      <h3 className="font-bold font-sans text-lg text-transparent bg-clip-text bg-gradient-to-tr from-[#712806] via-[#e97b21] to-[#f0c24c] ">CropConnect</h3>
                <p className="text-gray-600 ">A small brief introduction about the website or about the working of the website. </p>
            </div>
            <div className="md:px-16 md:p-5 p-10">
                <ul className="text-gray-600 ">
                    <li className="hover:bg-gray-200 rounded-md h-6 md:w-36 w-32 px-2"><a href="/">Home</a></li>
                    <li className="hover:bg-gray-200 rounded-md h-6 md:w-36 w-32 px-2"><a href="/">Services</a></li>
                    <li className="hover:bg-gray-200 rounded-md h-6 md:w-36 w-32 px-2"><a href="/">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="p-5 md:py-0 py-8 ">
            <h3 className="text-gray-600 md:text-lg">Follow Us</h3>
              <div className=" md:flex grid grid-cols-3 p-3 ">
                <div className=" cursor-pointer md:text-2xl text-xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                <a href="https://www.instagram.com/mardav_113/" target="blank"><FaInstagram /></a>
                </div>
                <div className=" cursor-pointer md:text-2xl text-xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                  <a href="www.facebook.com" target="blank"><FaFacebook/></a>
                </div>
                <div className=" cursor-pointer md:text-2xl text-xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                <a href="https://twitter.com/mardav_13" target="blank"><FaTwitter/></a>
                </div>
                <div className=" cursor-pointer md:text-2xl text-xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                  <a href="https://github.com/mardavsj" target="blank"><FaGithub/></a>
                </div>
                <div className=" cursor-pointer md:text-2xl text-xl text-gray-500 hover:text-gray-700 hover:scale-110 duration-100 md:px-2 py-2">
                <a href="https://www.linkedin.com/in/mardav-jadaun-13s/" target="blank"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="md:ml-20 ml-8 text-gray-600 p-4 md:py-0 py-8">
              <h3 className="md:text-lg">Call us</h3>
              <h3 className="py-3">+91 9503501043</h3>
            </div>
        </div>
        <div className="md:p-8 p-4" >
          <div className="bg-gradient-to-tr from-[#712806] via-[#e97b21] to-[#f0c24c] h-1">
          <hr/>
          </div>
          <div className="text-center">
            <p className="text-slate-400 mt-9 font-sans">
              Copyright : CropConnect @{new Date().getFullYear()}
            </p>
            <p className="text-slate-400 font-sans">
              All Rights Reserved
            </p>
          </div>
        </div>
    </footer>
    </main>
  )
}

export default footer