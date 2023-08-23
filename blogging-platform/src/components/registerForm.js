import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <>
    <section id="NewBlog" className="text-gray-600 body-font relative">
        <div className="container px-5 mx-auto  ">
          <div className="flex flex-col text-center w-full mb-12 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SIGN UP</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sign up to enjoy the fantastic blogs </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto" >
            <div className="flex justify-center items-center flex-col -m-2">
              <div className="p-2 w-1/2">
                <div className=" container relative" >
                  <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
                  <input type="text" id="username" name="username" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className=" container relative" >
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

              <div className="p-2 w-1/2" >
                <div className="relative">
                  <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                  <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <br></br>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Register</button>
              </div>
              
              <div className="flex flex-col text-center w-full mb-12 ">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Already have an account? <u><Link to="/login">Login</Link></u> </p>
          </div>
                
          </div> 
            </div>
          </div>
      </section>
      

    </>
  )
}

export default RegisterForm