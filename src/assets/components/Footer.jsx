import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-lime-300 shadow-md'>
        <div className='container mx-auto px-4'>
            <div className='min-h-16'>
                <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                    <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter</h2>
                    <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'> 
                        <input type="text" placeholder='Enter Your E-mail' className='bg-white py-4 px-4 rounded shadow-md w-full ' />
                     <button className='bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='bg-lime-200 text-zinc-500 py-8 '>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <div>
                        <h1 className='text-zinc-500 text-2xl font-bold p-1 rounded underline'>ShopSphere</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur cum quas perspiciatis magnam cumque.
                        </p>
                        <div className='flex items-center gap-8 mt-5 '>
                            <Facebook size={40} className='bg-white text-black p-2 rounded-full'/>
                            <Twitter size={40} className='bg-white text-black p-2 rounded-full'/>
                            <Youtube size={40} className='bg-white text-black p-2 rounded-full'/>
                            <Instagram size={40} className='bg-white text-black p-2 rounded-full'/>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-2'>Pages</h2>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/"}>About</Link></li>
                            <li><Link to={"/"}>FAQs</Link></li>
                            <li><Link to={"/"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-2'>Category</h2>
                        <ul>
                            <li><Link to={"/"}>Electronics</Link></li>
                            <li><Link to={"/"}>Fashion</Link></li>
                            <li><Link to={"/"}>Sports</Link></li>
                            <li><Link to={"/"}>Home Appliances</Link></li>
                        </ul>
                    </div>
                    <div>
                    <h2 className='text-2xl font-semibold my-2'>Contact</h2>
                   <p>+9023-456789</p>
                   <p>+9023-4456789</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container  mx-auto text-center py-4 text-zinc-700'>
            <p>Copyright &copy; 2025 ShopSphere</p>
        </div>
    </footer>
  )
}

export default Footer