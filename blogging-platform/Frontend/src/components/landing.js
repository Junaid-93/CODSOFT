import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/720x570/?blog,notebook"/> */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Blogs you'd find perfect
              <br class="hidden lg:inline-block"/>Write you own fantastic one
            </h1>
            <p class="mb-8 leading-relaxed">This is a fantastic blog web app where you will find perfect blogs of some of the splended bloggers. Also you can contribute for the others. Stay smiling !</p>
            <div class="flex justify-center">
              <Link to="/login" class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Get Started</Link>
              <Link to="/register" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Register</Link>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Landing