import React from 'react';
import Addimg from '../img/addAvatar.png' 


const Login=() =>{

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className= "Logo">nth chat app</span>
                <span className= 'Title'>Login</span> 
                <form>
                    <input type = 'email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login</button>
                </form>
                <p>Don't have an account ? Register</p>
            </div>
        </div>
    )
}

export default Login;