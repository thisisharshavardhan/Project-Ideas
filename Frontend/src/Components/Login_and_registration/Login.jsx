
import google_logo from '../../Assets/google_logo.svg'
import github_logo from '../../Assets/github_logo.svg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Login() {
    useEffect(() => {
        if(window.innerWidth < 800){
            import ('./LoginMobile.css')
        }
        else{
            import ('./Login.css')
        }
    }, [])

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', email)
        formData.append('username',username)
        formData.append('password',password)
        axios.post(import.meta.env.VITE_API_URL + '/login', formData)
        .then(res => {
            if (res.data.data.accessToken && res.data.data.refreshToken) {
                document.cookie = `accessToken=${res.data.data.accessToken}`
                document.cookie = `refreshToken=${res.data.data.refreshToken}`
                window.location.href = '/'
            }
            else{
                document.querySelector('.error_msg').innerText = 'we are unable to Authenticate at this movement'
            }
            // window.location.href = '/'
        })
        .catch(err => {
            document.querySelector('.error_msg').innerText = 'Invalid email/username or password'
            console.log(err)
        })
    }

    return (
        <>
            <form className="login_outer_div" onSubmit={loginUser}>
                <h2 className='login_title'>
                    Login to <h4>Project Ideas</h4>
                </h2>
                <div className="login_input_div">
                    <label className='login_label'>Email / Username</label>
                    <input type="text" className='login_input' placeholder='user@domain or username' onChange={
                        (e) => {
                            if(e.target.value.includes('@')){
                                setEmail(e.target.value)
                                setUsername('')
                            }
                            else{
                                setUsername(e.target.value)
                                setEmail('')
                            }  
                        }
                    }
                    required/>
                </div>
                <div className="login_input_div">
                    <label className='login_label'>Password</label>
                    <input type="password" className='login_input' placeholder='password' onChange={(e)=> {setPassword(e.target.value)} } required />
                </div>
                <p className="error_msg"></p>
                <input type='submit' className='login_button' value='Login'></input>
                {/* login using google or github */}
                <div className="social_login">
                    <div className="with_google">
                        <img src={google_logo} className='google_logo '></img>
                        <p>Continue with Google</p>
                    </div>
                    <div className="with_github">
                        <img src={github_logo} className='github_logo '></img>
                        <p>Continue with Github</p>
                    </div>
                </div>
                <div className="login_footer">
                    <p className='dont_have_account'>Don&apos;t have an account? <Link to='/register'>Register</Link></p>
                    <p className='forgot_password'><Link to='/forgotpassword'>Forgot Password?</Link></p>
                </div>
            </form>
        </>
    )
}

export default Login