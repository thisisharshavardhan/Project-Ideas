import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Home() {
  const [user, setUser] = useState({})
  useEffect(()=>{
  if(window.innerWidth < 768){
    import ('./HomeMobile.css')
  }
  else{
    import ('./Home.css')
  }
  }
  ,[])
  const scroll_categories = () => {
    const navbar_sub_categories_list = document.querySelector('.navbar_sub_categories_list')
    navbar_sub_categories_list.scrollBy({left: 100, behavior: 'smooth'})
    
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
        <option value='CSE'>Computer Science & Engineering</option>
        <option value='ECE'>Electronics & Communication Engineering</option>
        <option value='ME'>Mechanical Engineering</option>
        <option value='CE'>Civil Engineering</option>
        <option value='EE'>Electrical Engineering</option>
        <option value='AE'>Aerospace Engineering</option>
        <option value='BT'>Biotechnology</option>
        <option value='CH'>Chemical Engineering</option>
        <option value='MT'>Material Engineering</option>
        <option value='MME'>Metallurgical Engineering</option>
        <option value='PE'>Production Engineering</option>
        <option value='MSE'>Material Science Engineering</option>
        <option value='MME'>Mining Engineering</option>
        <option value='PE'>Petroleum Engineering</option>
        <option value='MME'>Marine Engineering</option>
        <option value='PE'>Plastic Engineering</option>
        <option value='MME'>Textile Engineering</option>
        <option value='PE'>Polymer Engineering</option>
        <option value='MME'>Food Technology</option>
        <option value='PE'>Agricultural Engineering</option>

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
      <button className='scroll_right' onClick={()=>{scroll_categories()}}> &gt;&gt; </button>
      </div>
    </nav>
    <main>
      <div className='project_card'>
        <img className='project_image' src='https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Project Image'/>
        <h2 className='project_title'>Project Title</h2>
        <p className='project_description'>Project Description</p>
        <div className='project_tags'>
          <span className='project_tag'>Tag 1</span>
          <span className='project_tag'>Tag 2</span>
          <span className='project_tag'>Tag 3</span>
        </div>
        <div className='project_footer'>
          <span className='project_category'>Category</span>
          <span className='project_creator'>Creator</span>
        </div>
      </div>  
    </main>
    </>
  )
}

export default Home