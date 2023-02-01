import Image from 'next/image';
import { MdWavingHand, MdLockOutline } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import Background1 from '../public/assests/image2.webp';

const Signup = () => {
    return (
        <div className="flex mb-[28rem]">
        <Image className="h-96 w-full opacity-80 object-fill" src={Background1}/>
            <main className="absolute md:flex flex-col items-center justify-center w-full  md:h-screen flex-1 text-center">
                <div className="rounded-bl-3xl md:flex md:w-2/3 max-w-4xl ">
                    <div className=" md:w-2/5 bg-gradient-to-tr from-[#953508] via-[#ca6512] to-[#f3ba2b] text-white shadow-md shadow-gray-400 py-36 px-12 ">
                        <div className="text-center text-3xl animate-shake"><MdWavingHand /></div>
                        <h1 className="text-3xl font-bold " >Welcome back !</h1>
                        <div className="border-2 w-60 border-white inline-block mb-2 "></div>
                        <p >Make your account in seconds & get your work done in minutes.</p>
                    </div>
                    <div className=" md:w-3/5 p-5 shadow-gray-200 shadow-md bg-white">
                        <div className="text-left font-bold">
                            <span className="font-normal">Crop</span>Connect
                        </div>
                        <div className="py-4 ">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-[#bf5f23] mb-2 ">Create Account</h2>
                            <div className="border-2 w-96 border-black inline-block mb-2"></div>
                            <p className="text-gray-400 mb-5"> Enter your personal details.</p>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-80 p-2 flex items-center mb-2">
                                    <BsPerson className="text-gray-400 m-2 text-lg" />
                                    <input type="name" placeholder="Enter your full name" className="bg-gray-100 outline-none flex-1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-80 p-2 flex items-center mb-2">
                                    <FiMail className="text-gray-400 m-2 text-lg" />
                                    <input type="email" placeholder="Enter your email" className="bg-gray-100 outline-none flex-1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-80 p-2 flex items-center mb-2">
                                    <MdLockOutline className="text-gray-400 m-2 text-lg" />
                                    <input type="password" placeholder="Create Password" className="bg-gray-100 outline-none flex-1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-80 p-2 flex items-center mb-8">
                                    <MdLockOutline className="text-gray-400 m-2 text-lg" />
                                    <input type="password" placeholder="Confirm Password" className="bg-gray-100 outline-none flex-1" />
                                </div>
                            </div>
                            <a href="/login" className=" rounded-full py-2 px-12 inline-block font-semibold border-2 border-[#b45419] text-[#b45419] hover:text-[white] hover:bg-gradient-to-tr from-[#953508] via-[#ca6512] to-[#f3ba2b] hover:tracking-wider duration-100 hover:border-white">Sign Up</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Signup