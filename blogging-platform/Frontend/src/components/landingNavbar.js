import React from 'react'
import { Link } from 'react-router-dom'

const LandingNavbar = () => {
  return (
    <>
    <header className="text-gray-600">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="Blogger-Logo.png" alt="logo" style={{height: "50px", width: "90px"}} />
        <span className="ml-3 text-xl text-gray-600">Fantastic Blogs</span>
    </Link>
    </div>
    </header>
    </>
  )
}

export default LandingNavbar