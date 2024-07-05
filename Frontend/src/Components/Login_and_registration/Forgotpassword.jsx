import './Forgotpassword.css';
function Forgotpassword() {
  return (
    <>
        <div className='outerdivforgotpassword'>
            <h2 className='forgotpassword_title'>Forgot Password</h2>
            <form className='forgotpassword_form'>
                <label>Email</label>
                <input type="email" placeholder='user@domain' />
                <button className='forgotpassword_button'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Forgotpassword