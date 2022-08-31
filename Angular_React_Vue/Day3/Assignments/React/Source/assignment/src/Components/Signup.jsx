import React , {useState} from "react";

const Signup = () => {
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[pan,setPan]=useState('');
    return(
        <div>
            <h1 className="mb-3">Sign up</h1>
            <div>
                <label className="form-label">Name</label>
                <input type="text" 
                className="form-control"
                value={name}
                onChange = {(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label className="form-label">Address</label>
                <input type="text" 
                className="form-control"
                value={address}
                onChange = {(e)=>setAddress(e.target.value)}
                />
            </div>
            <div>
                <label className="form-label">Pan</label>
                <input type="text" 
                className="form-control"
                value={pan}
                onChange = {(e)=>setPan(e.target.value)}
                />
            </div>

            <div>
                <p>Name : {name}</p>
                <p>Address : {address}</p>
                <p>Pan : {pan}</p>
            </div>
        </div>
    )
}
export default Signup;