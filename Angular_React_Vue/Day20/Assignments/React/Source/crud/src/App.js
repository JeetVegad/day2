import './App.css';
import React, { useState, useEffect } from 'react';
import {getPost} from './Api'
import PostList from './PostList';
function App(){
  const [postData,setPostData]=useState([]);
  useEffect(()=>{
    getPost().then((data)=>setPostData(data.data));
  },[]);
  return(
    <div>
      <PostList postData={postData} setPostData={setPostData} />
    </div>
  )
}

// function App() {
//   const [data, setData] = useState([]);
//   const [val, setVal] = useState({ id: '', user_id: '', title: '', body: '' });
//   // const [fetchData, setFetch] = useState(false);
//   useEffect(() => {

//    const GetData =async()=>{await axios.get('https://gorest.co.in/public/v2/posts',
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8`,
//         },
//       })
//       .then((res) => setData(res.data));
//   };
//   GetData();},[]);


//   const sub = (e)=>{
//     e.preventDefault();
//     const payload = {
       
//       title: val.title, body: val.body, id: val.id, user_id: val.user_id
//     };
//     axios.post('https://gorest.co.in/public/v2/posts', payload,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8`,
//         },
//       })
//       .then((res) => setData(res.data));
//   }



//   const onChange = (e) => {
//     setVal({ ...val, [e.target.name]: e.target.value });
//   }

//   return (

//     <div>
//       <label>Id:</label>
//       <input
//         placeholder='id'
//         type="number"
//         name='id'
//         id='id'
//         value={val.id}
//         onChange={onChange}
//       />

//       <label>User Id:</label>
//       <input
//         placeholder='User id'
//         type="number"
//         name='user_id'
//         id='user_id'
//         value={val.user_id}
//         onChange={onChange}
//       />

//       <label>title:</label>
//       <input
//         placeholder='title'
//         type="text"
//         name='title'
//         id='title'
//         value={val.title}
//         onChange={onChange}
//       />

//       <label>body:</label>
//       <input
//         placeholder='body'
//         type="text"
//         name='body'
//         id='body'
//         value={val.body}
//         onChange={onChange}
//       />
//       <button onClick={sub}>Save Data</button>
//       {data.map((listitem,idx) =>
//     <h5 key={idx}> {listitem.id} {listitem.user_id} {listitem.title} {listitem.body}</h5>)}
//     </div>
//   );
// }

 export default App;
