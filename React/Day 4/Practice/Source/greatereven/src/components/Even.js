import React, { useState } from 'react';

function Even(){
    const [res, setRes] = useState([])
    const even =()=>{
        for( var i=0;i<=100;i++){
            if( i%2==0){
              res.push(i);
            }
        }   
        setRes(res);
        console.log(res);
    }

    return(
        <div>
          
        <div>
            <button onClick={even} type="submit" className='btn text-white rounded mt-3 p-1 mx-2 bg-success'>Click me</button>
        </div>
        <div>
            <h5>{res}</h5>
        </div>
        </div>
    )
}
export default Even