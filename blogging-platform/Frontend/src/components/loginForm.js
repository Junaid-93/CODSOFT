import React , { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { url } from '../utilities/url'
import axios from 'axios'

const LoginForm = () => {

  const [loginData, setLoginData] = useState({email:"", password:"" })

  const navigate = useNavigate()

  const handleChange = e => {
    if (e.target.name === "password") {
      setLoginData({...loginData, [e.target.name] : e.target.value})
    }
    else {
      setLoginData({...loginData, [e.target.name] : e.target.value.toLowerCase()})

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
        const data = await axios.post(`${url}/login`, loginData)
        console.log("response: ", data)
      // localStorage.setItem('token',JSON.stringify(data.Token))

        setLoginData({email : "", password : ""})
        navigate("/dashboard")
        console.log(loginData);
      }
      catch (error){
        console.log((error.message));
      }

      }


  
  return (
    <>
      <section id="NewBlog" className="text-gray-600 body-font relative">
        <div className="container px-5 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12  ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">LOGIN</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Put credentials to fly over to dashboard </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto" >
            <div className="flex justify-center items-center flex-col -m-2">
              <div className="p-2 w-1/2">
                <div className=" container relative" >
                  <label htmlFor="username" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" value={loginData.email} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2" >
                <div className="relative">
                  <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                  <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <br></br>
              <div className="p-2 w-full">
                <button onClick={handleSubmit} className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Login</button>
              </div>

              <div className="flex flex-col text-center w-full mb-12 ">
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Does not have an account? <u><Link to="/register">Register</Link></u> </p>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default LoginForm