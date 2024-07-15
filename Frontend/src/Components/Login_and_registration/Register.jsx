import './Register.css'
import google_logo from '../../Assets/google_logo.svg'
import github_logo from '../../Assets/github_logo.svg'
import { Link } from 'react-router-dom'
function Register() {
  return (
   <>
        <div className="register_outer_div">
                <h2 className='register_title'>
                    Register on <h4>Project Ideas</h4>
                </h2>
                <div className="register_input_div">
                    <label className='register_label'>Email</label>
                    <input type="email" className='register_input' placeholder='user@domain' />
                </div>
                <div className="register_input_div">
                    <label className='register_label'>Password</label>
                    <input type="password" className='register_input' placeholder='password' />
                </div>
                <button className='register_button'>register</button>
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