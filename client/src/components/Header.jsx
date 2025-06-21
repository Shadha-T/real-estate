import React from 'react'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";


const Header = () => {
    return (
        <div>
            <header className='bg-slate-200 shadow-md' >
                <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Real</span>
                        <span className='text-slate-700'>Estate</span>

                    </h1>
                    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                        <input type='text' placeholder='search here.. ' className='bg-transparent focus:outline-none w-24 sm:w64' />
                        <CiSearch className='text-slate-600' />
                    </form>
                    <ul className='flex gap-4'>
                        <Link to='/'>
                            <li className='text-slate-700 hover:underline hidden sm:inline'>Home</li>

                        </Link>
                        <Link to='/about'>

                            <li className='text-slate-700 hover:underline hidden sm:inline'>About</li>
                        </Link>
                        <Link to='/profile'>


                            {/* <div className='cursor-pointer'>
                                <img className='rounded-full h-7 w-7 object-cover' alt='profile' />
                            </div> */}

                            <li className='text-slate-700 hover:underline hidden sm:inline'>Sign in</li>

                        </Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
