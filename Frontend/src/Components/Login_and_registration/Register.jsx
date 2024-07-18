import './Register.css'
import google_logo from '../../Assets/google_logo.svg'
import github_logo from '../../Assets/github_logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Register() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [name,setName] = useState('')
    const [gender,setGender] = useState('')

    const registerUser = ()=>{
        const formData = new FormData()
        formData.append('email',email)
        formData.append('password',password)
        formData.append('username',username)
        formData.append('name',name)
        formData.append('gender',gender)
        console.log(import.meta.env.VITE_API_URL);
        axios.post(`${import.meta.env.VITE_API_URL}/register`,formData)
        .then((res)=>{
            console.log(res.data)
        })
    }

    return (
        <>
            <div className="register_outer_div">
                <h2 className='register_title'>
                    Register on <p>Project Ideas</p>
                </h2>
                <div className="register_input_div">
                    <label className='register_label'>Full name</label>
                    <input type="text" className='register_input' placeholder='Full name' onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="register_input_div">
                    <label className='register_label'>Username</label>
                    <input type="text" className='register_input' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className="register_input_div">
                    <label className='register_label'>Email</label>
                    <input type="email" className='register_input' placeholder='user@domain' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="register_input_div">
                    <label className='register_label'>Password</label>
                    <input type="password" className='register_input' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className="register_input_div">
                    <label className='register_label'>Gender</label>
                    <select className='register_input' placeholder='gender' onChange={(e)=>{setGender(e.target.value)}}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <button className='register_button' onClick={()=>registerUser()}>register</button>
                {/* register using google or github */}
                <div className="social_register">
                    <div className="with_google">
                        <img src={google_logo} className='google_logo '></img>
                        <p>Continue with Google</p>
                    </div>
                    <div className="with_github">
                        <img src={github_logo} className='github_logo '></img>
                        <p>Continue with Github</p>
                    </div>
                </div>
                <div className="register_footer">
                    <p className='already_have_account'>already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default Register