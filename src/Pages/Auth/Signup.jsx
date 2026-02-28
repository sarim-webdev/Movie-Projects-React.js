import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
const userameRegax = /^(?=.*_)(?=.*[A-Za-z])[A-Za-z0-9_]{3,15}$/;
const emailRegax = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passwordRegax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Signup = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const isValidUsername = userameRegax.test(username)
    const isValidEmail = emailRegax.test(email)
    const isValidPassword = passwordRegax.test(password)
    const navigate = useNavigate()

    const signupHandler = () => {
        const user = {
            username,
            email,
            password
        }
    
        if(!username || !email || !password){
            setError("Please fill all fields")
            return
        }else if(!isValidUsername){
            setError("Username include underscore and letters")
            return
        }else if(!isValidEmail){
            setError("Email not Valid")
            return
        }else if(!isValidPassword){
            setError("Weak Password")
        }else{
            localStorage.setItem("user" , JSON.stringify(user))
            alert("SignUp Successfully...")
            navigate("/login")
        }
    }
return (
    <div className='auth-container'>
        <div className='auth-card'>
            <h1>SignUp</h1>
            {error && <p style={{color:"red",fontSize:"1rem",marginBottom:"1rem"}}>{error}</p>}
            <input type="name" placeholder='Usermane' value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={signupHandler}>SignUp</button>
            <p style={{fontSize:"1.1rem"}}>Already have an account? <Link to="/login" style={{textDecoration:"underline"}}>Login</Link></p>
        </div>
    </div>
    )
}

export default Signup