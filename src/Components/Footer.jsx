import React from 'react'
import logo from './logo.svg';

function Footer() {
  return (
    <>
        <div className='h-screen py-10' >
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className='p-10 '>
        <div className='flex space-between'>

          <div className='w-3/12 p-2'>
            <div>
              <h1 className='text-2xl mb-5 '>
                About Us
              </h1>
            </div>
            <div>
              <p className='' style={{ color: "#7A7A7A" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod error alias velit, itaque debitis ad facere tempora ipsum ipsa expedita. Velit, ratione quod? Ex molestias inventore natus esse voluptates! Sunt, commodi similique nulla repellat odio maxime. Fuga, omnis optio.F
              </p>
            </div>
          </div>
          <div className='w-3/12 p-2 pr-20 '>
            <div>
              <h1 className='text-2xl mb-5 '>
                Navigation Links
              </h1>
            </div>
            <div className='flex justify-between'>
              <div>
                <ul>
                  <li className='my-2'>Home</li>
                  <li className='my-2'>Features</li>
                  <li className='my-2'>Services</li>
                  <li className='my-2'>Portfolio</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className='my-2'>team</li>
                  <li className='my-2'>Pricing</li>
                  <li className='my-2'>Blog</li>
                  <li className='my-2'>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-3/12 p-2'>
            <div>
              <h1 className='text-2xl mb-5 '>
                Newsletter
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima rem veniam ducimus iure velit corrupti eum vel tenetur consequatur.
              </p>
            </div>
            <div className='mt-3'>
              <input type="text" placeholder='email' className='p-3' style={{ backgroundColor: "#F9F9FE", color: "black" }} />
              <button style={{ backgroundColor: "#00C0FF", color: "white", }} className='p-3'>
                <i className='far fa-paper-plane'></i>
              </button>
            </div>
          </div>
          <div className='w-3/12 p-2'>
            <div>
              <h1 className='text-2xl mb-5 '>
                Insta Feed
              </h1>
            </div>
            <div className='flex ' style={{ flexWrap: "wrap" }}>
              <img src={logo} alt="" style={{ width: "25%" }} />
              <img src={logo} alt="" style={{ width: "25%" }} />
              <img src={logo} alt="" style={{ width: "25%" }} />
              <img src={logo} alt="" style={{ width: "25%" }} />
              <img src={logo} alt="" style={{ width: "25%" }} />
              <img src={logo} alt="" style={{ width: "25%" }} />

            </div>
          </div>
        </div>
        <hr className='my-3' />
        <div className='flex justify-between px-10'>
          <div>
            <p>
              Copyright ©2024 All rights reserved | This template is made with  by abc
            </p>
          </div>
          <div>
            <ul className='flex '>
              <li className='mx-3'><i class="fa-brands fa-facebook"></i></li>
              <li className='mx-3'><i class="fa-brands fa-twitter"></i></li>
              <li className='mx-3'><i class="fa-brands fa-instagram"></i></li>
              <li className='mx-3'><i class="fa-solid fa-globe"></i></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
