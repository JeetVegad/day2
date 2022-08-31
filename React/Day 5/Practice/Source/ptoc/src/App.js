import React , {useState} from 'react';
import './App.css';
function Display(props) {
  return (
    <h1>My name is {props.name}</h1>
  );
}

export default function App(){
  const [message,setMessage] = useState('');


return(
  <div>
    <input type = "text" onChange={(e) => setMessage(e.target.value)} />
    {/* {message} */}
    <Display name = {message}></Display>
  </div>
)
}