import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../utilities/url'
import axios from 'axios'

const CreateBlog = () => {
    const [blogData, setBlogData] = useState({title: "", category: "", content: ""})

    const navigate = useNavigate()

    // const [token, setToken] = useState('')
    
    const handleChange = e => {
        if (e.target.name === "category") {
            setBlogData({...blogData, [e.target.name] : e.target.value.toUpperCase()})
        }
        else {
            setBlogData({...blogData, [e.target.name] : e.target.value})
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post(`${url}/blogs`, blogData,
          // { headers: { Authorization: token } }
          )
          console.log('response: ', response)
          setBlogData({title: "", category: "", content: ""})
          navigate("/my_blogs")
          console.log(blogData)

          }
          catch (error) {
            console.log(error.message)
        }
      }
      
    //   useEffect(() => {
    //     const localToken = JSON.parse(localStorage.getItem('token'))
    //     setToken(localToken)
    // }, [])

  return (
    <>
    <section id="NewBlog" className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create Blog</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Write your blog to benefit people. Stay smiled ! </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                  <input type="text" id="title" name="title" value={blogData.title} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
                  <input type="text" id="category" name="category" value={blogData.category} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="blog_content" className="leading-7 text-sm text-gray-600">Blog Content</label>
                  <textarea id="content" name="content" value={blogData.content} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={handleSubmit} className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Submit Blog</button>
              </div>
                
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateBlog