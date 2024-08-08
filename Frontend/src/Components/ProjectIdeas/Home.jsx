import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Home() {
  const [categories, setCategories] = useState({})
  useEffect(() => {
    if (window.innerWidth < 768) {
      import('./HomeMobile.css')
    }
    else {
      import('./Home.css')
    }
    axios.get("http://localhost:5000/api/v1/projects" + '/get-categories')
      .then(res => {
        setCategories(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
    , [])
  const scroll_categories = () => {
    const navbar_sub_categories_list = document.querySelector('.navbar_sub_categories_list')
    navbar_sub_categories_list.scrollBy({ left: 100, behavior: 'smooth' })

  }
  return (
    <>
      <header >
        <h1 className='website_Title'>ProjectIdeas</h1>
        <nav className='navbar_items'>
          <NavLink className='login_botton' to={'/login'}>login</NavLink>
          <NavLink className='submit_idea_button'>Submit an Idea</NavLink>
        </nav>
      </header>
      <nav className='navbar_below_header'>
        <select name="categories" id="categories" className='select_category'>
          <option value='All'>All</option>
          {
            categories?.data?.map((category, index) => {
              return (
                <option key={index} value={category.name}>{category.name}</option>
              )
            })
          }

        </select>
        <div className='navbar_sub_categories_list'>

          <NavLink className='project_categories_name' to='/'>All</NavLink>
          <NavLink className='project_categories_name' to='/'>Cybersecurity</NavLink>
          <NavLink className='project_categories_name' to='/'>Web Development</NavLink>
          <NavLink className='project_categories_name' to='/'>App Development</NavLink>
          <NavLink className='project_categories_name' to='/'>Machine Learning</NavLink>
          <NavLink className='project_categories_name' to='/'>Data Science</NavLink>
          <NavLink className='project_categories_name' to='/'>Artificial Intelligence</NavLink>
          <NavLink className='project_categories_name' to='/'>Internet of Things</NavLink>
          <NavLink className='project_categories_name' to='/'>Robotics</NavLink>
          <NavLink className='project_categories_name' to='/'>Cloud Computing</NavLink>
          <NavLink className='project_categories_name' to='/'>Big Data</NavLink>
          <NavLink className='project_categories_name' to='/'>Blockchain</NavLink>
          <NavLink className='project_categories_name' to='/'>Digital Marketing</NavLink>
          <NavLink className='project_categories_name' to='/'>SEO</NavLink>
          <NavLink className='project_categories_name' to='/'>Content Writing</NavLink>
          <NavLink className='project_categories_name' to='/'>Graphics Designing</NavLink>
          <NavLink className='project_categories_name' to='/'>Video Editing</NavLink>
          <NavLink className='project_categories_name' to='/'>Photography</NavLink>
          <button className='scroll_right' onClick={() => { scroll_categories() }}> &gt;&gt; </button>
        </div>
      </nav>
      <div className='pr-in'>
        <span>Projects in </span>
        <span className='category-span'>Category</span>
        <span> / </span>
        <span className='subcategory-span'>SubCategory</span>
      </div>
      <main>

        <div className="pi-card">
          <div className="pi-title">
            <h3>Hostel Management System</h3>
          </div>
          <div className='pi-discription'>
            <p>
              Hostel Management System is a web-based application developed in PHP, MySQL, HTML, and CSS. This project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS. The project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS.
            </p>
          </div>
        </div>
        <div className="pi-card">
          <div className="pi-title">
            <h3>
              Learning Mangement System
            </h3>
          </div>
          <div className='pi-discription'>
            <p>
              Learning Management System is a web-based application developed in PHP, MySQL, HTML, and CSS. This project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS. The project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS.
            </p>
          </div>
        </div>
        <div className="pi-card">
          <div className="pi-title">
            <h3>
              Online Examination System
            </h3>
          </div>
          <div className='pi-discription'>
            <p>
              Online Examination System is a web-based application developed in PHP, MySQL, HTML, and CSS. This project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS. The project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS.
            </p>
          </div>
        </div>
        <div className="pi-card">
          <div className="pi-title">
            <h3>
              Online Shopping System
            </h3>
          </div>
          <div className='pi-discription'>
            <p>
              Online Shopping System is a web-based application developed in PHP, MySQL, HTML, and CSS. This project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS. The project is a simple project and useful for those who want to learn web development. The project is developed using PHP, MySQL, HTML, and CSS.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home