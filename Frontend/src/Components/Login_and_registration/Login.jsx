
import google_logo from '../../Assets/google_logo.svg'
import github_logo from '../../Assets/github_logo.svg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function Login() {
    useEffect(() => {
        if(window.innerWidth < 800){
            import ('./LoginMobile.css')
        }
        else{
            import ('./Login.css')
        }
    }, [])
    return (
        <>
            <div className="login_outer_div">
                <h2 className='login_title'>
                    Login to <h4>Project Ideas</h4>
                </h2>
                <div className="login_input_div">
                    <label className='login_label'>Email</label>
                    <input type="email" className='login_input' placeholder='user@domain' />
                </div>
                <div className="login_input_div">
                    <label className='login_label'>Password</label>
                    <input type="password" className='login_input' placeholder='password' />
                </div>
                <button className='login_button'>Login</button>
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
            </div>
        </>
    )
}

export default Login