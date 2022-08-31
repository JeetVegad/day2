import './App.css';
import Post from './Post';
import React,{ useState } from 'react';
function App() {
    const [postdetails,setPostDetails]=useState([]);
    const details = postdetails;
    const [show,setShow]=useState(false);
    const click =()=>{
        setShow(true)
    }
    const items = details.map((items)=>
   <tr>
     <td>{items.pname}</td>
     <td>{items.pdisc}</td>
     <td>{items.date}</td>
     </tr> 
   
    )
    function callback(postlist)
    {
      setPostDetails(postlist);
    }
    
  return (
    <div className="App">
      
      <div className="container">
      <div className="row">
      <div className="col">
      <Post postnotify = {callback}></Post>
      </div>
      <div className="col">
        <h1><a href="#" onClick={click} className="text-decoration-none text-dark">Total post liked : {postdetails.length}</a></h1>

       { show ? <table className="table mt-5">
        <caption></caption>
        <thead>
          <tr>
          <th>Post No.</th>
          <th>Post Description</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
         </table>
  : null}
      </div>
    </div>
    </div>
     </div>
  );
}

export default App;
