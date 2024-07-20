import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Home() {
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
    console.log('scrolling')
    const scroll_right_button = document.querySelector('.scroll_right')
    const navbar_sub_categories_list = document.querySelector('.navbar_sub_categories_list')
    navbar_sub_categories_list.scrollBy({left: 100, behavior: 'smooth'})
    
  }
  return (
    <>
    <header >
      <h1 className='website_Title'>ProjectIdeas</h1>
      <nav className='navbar_items'>
      <NavLink className='login_botton'>login</NavLink>
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
    </>
  )
}

export default Home