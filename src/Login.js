import React from 'react'
import './Login.css';
import './Createac';
import './profile';
import {Link} from 'react-router-dom';
function Login() {
  return (
    <body>
    <div class="background"></div>
    <div class="container">
      
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>LOG IN</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <br></br>
                    <div class="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forget Password</a>
                    </div><br></br>
                    <Link to="/profile"><button class="btn">Log In</button></Link>
                    <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google</button>
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">  Sign Up</a></Link></p>
                    </div>
                </form>
            </div>       
            </div>
        </div>
    
</body>  
  )
}
export default Login