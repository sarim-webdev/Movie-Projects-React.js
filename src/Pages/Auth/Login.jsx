import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    

    const loginHandler = ()=> {
        const savedUser = JSON.parse(localStorage.getItem("user"))
        if(!email || !password){
            setError("Please fill all fields")
            return
        }else if(!savedUser){
            setError("No account found. Please Signup first")
            return
        }else if(email !== savedUser.email || password !== savedUser.password){
            setError("Invalid Email or Password")
        }else{
            localStorage.setItem("loggedInUser",JSON.stringify(savedUser))
            alert("Login Successfully...")
            navigate("/home")
        }
    }
return (
    <div className='auth-container'>
        <div className='auth-card'>
            <h1>Login</h1>
            {error && <p style={{color:"red",fontSize:"1.2rem"}}>{error}</p>}
            <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={loginHandler}>Login</button>
            <p style={{fontSize:"1.1rem"}}>Don't have an account? <Link to="/signup" style={{textDecoration:"underline"}}>SignUp</Link></p>
        </div>
    </div>

)
}

export default Login