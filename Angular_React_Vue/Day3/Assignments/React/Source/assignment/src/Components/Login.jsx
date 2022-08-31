import React, { useState } from 'react';

const Login = () => {
        const[user,setUser] =useState('');
        const [pass,setPass]=useState('');
        const[validate,setValidate] =useState();

        const validation = () =>{
            if((user == "admin") && (pass == "admin")){
                setValidate(true);
            }else{
                setValidate(false);
            }
        };

        return(
            <div>
                <h1 className='mb-3'>Login</h1>
                <div>
                    <label className='form-label'>Username</label>
                    <input type="text" 
                    className='form-control'
                    value={user}
                    onChange={(e)=>setUser(e.target.value)}
                    />

                </div>
                <div>
                    <label className='form-label'>Password</label>
                    <input type="text" 
                    className='form-control'
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                    />

                </div>
                <button className='mt-5 btn btn-primary' onClick={validation}>Log in</button>
                <br />

                {validate != null && (validate?(<label className='mt-3 text-success'>User is Valid</label>):(<label className='mt-3 text-danger'>Invalid User</label>))}
            </div>
        )
}

export default Login;