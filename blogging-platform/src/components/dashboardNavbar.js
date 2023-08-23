import React from 'react'
import { Link } from 'react-router-dom'
const DashboardNavbar = () => {
  return (
    <>
    {/* <div className='flex justify-around items-center pt-5'>
        <div className='flex items-center'>
            <img src="https://1000logos.net/wp-content/uploads/2020/08/Blogger-Logo-2010.png" alt="logo" style={{height: "50px", width: "90px"}}/>
            <span>Fantastic Blogs</span>
        </div> 
        <nav className='flex list-none w-auto'>
            <li className='py-1 px-3 text-gray-600 hover:bg-orange-500 hover:text-white rounded'><Link to="/">Home</Link></li>
            <li className='py-1 px-3 text-gray-600 hover:bg-orange-500 hover:text-white rounded'><Link to="/dashboard">Dashboard</Link></li>
            <li className='py-1 px-3 text-gray-600 hover:bg-orange-500 hover:text-white rounded'><Link to="/blogs">Blogs</Link></li>
            <li className='py-1 px-3 text-gray-600 hover:bg-orange-500 hover:text-white rounded'><Link to="/write_now">Write Now</Link></li>
            <li className='py-1 px-3 text-gray-600 hover:bg-orange-500 hover:text-white rounded'><Link to="/my_blogs">My Blogs</Link></li>
            <li className='py-1 px-3 text-gray-600 hover:bg-orange-500 hover:text-white rounded'><Link to="/profile">Profile</Link></li>
        </nav>
    </div> */}

<header className="text-gray-600">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="https://1000logos.net/wp-content/uploads/2020/08/Blogger-Logo-2010.png" alt="logo" style={{height: "50px", width: "90px"}} />
        <span className="ml-3 text-xl text-gray-600">Fantastic Blogs</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 p-2 hover:bg-orange-500 hover:text-white rounded">Home</Link>
      <Link to="/dashboard"  className="mr-5 p-2 hover:bg-orange-500 hover:text-white rounded">Dashboard</Link>
      <Link to="/blogs" className="mr-5 p-2 hover:bg-orange-500 hover:text-white rounded">Blogs</Link>
      <Link to="/write_now" className="mr-5 p-2 hover:bg-orange-500 hover:text-white rounded">Write now</Link>
      <Link to="/profile" className="mr-5 p-2 hover:bg-orange-500 hover:text-white rounded">Profile</Link>
    </nav>
    <button className="inline-flex items-center border-solid border-2 border-orange-500 py-1 px-3 focus:outline-none hover:bg-orange-500 hover:text-white rounded text-base mt-4 md:mt-0"><Link to="/login">Logout</Link>
      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
    </button>
  </div>
</header>
    </>
  )
}

export default DashboardNavbar