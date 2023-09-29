import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const loginData = {
    email: "hasan@webluna.az",
    password: "hasan123"
}


const Login = () => {


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const formSubmit = (e)=>{
            e.preventDefault();
          
        if (!email || !password) {
            alert('please, fill out these inputs')
        }else{
            if (loginData.email === email && loginData.password === password) {
                navigate('/admin')
            }else{
                alert('email or password is wrong!')
            }
        }
    
    }
    
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-5'>Login</h1>
   
            <div className="col-5">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form></div>
        </div>

    )
}

export default Login