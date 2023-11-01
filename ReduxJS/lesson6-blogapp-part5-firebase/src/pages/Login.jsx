import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const userPermission = {
    name:"Vusal bey",
    email:"vusal@gmail.com",
    pass:'vusal123'
}


const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const loginSubmit = e =>{
        e.preventDefault();
           if (!email && !password) {
            alert('fill input man')
           }else{
            if (userPermission.email === email || userPermission.pass === password) {
                navigate('/');
                localStorage.setItem('username',userPermission.name);
            }else{
                alert('wrong man')
            }
           }

        
        
    }
    
    
    return (
        <div>
            <h1 className='text-center text-success'> Login</h1>
                <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                <form onSubmit={loginSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={e=>setEmail(e.target.value)}  />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control"  onChange={e=>setPassword(e.target.value)}/>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
                </div>
        </div>
    )
}

export default Login