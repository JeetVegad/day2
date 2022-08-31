import React,{useState} from "react";
import { addPost,deletePost,editPost,getPost,getPostById } from "./Api";

const PostList = ({postData,setPostData}) => {
    const[newPost,setNewPost]=useState({
        title:'',
        body:''
    });
    const[editPostData,setEditPostData]=useState({
        id:'',
        user_id:'',
        title:'',
        body:''
    });

    const callGetPost = () =>{
        getPost().then((element)=>{
            setPostData(element.data);
        });
    };
    const callDeletePost=(e)=>{
        deletePost(parseInt(e.currentTarget.id))
        .then(()=>{
            console.log("deleted");
            callGetPost();
        })
    };
    const callAddPost=()=>{
        addPost(newPost).then((data)=>{
            if(data.data){
            console.log("Added");
                callGetPost();
            }
        });
        setNewPost({title:'',body:''});
    };

   const handleEdit = (e) =>{
        getPostById(parseInt(e.currentTarget.id)).then((data)=>{
            setEditPostData({
                id:data.data.id,
                user_id:data.data.user_id,
                title:data.data.title,
                body:data.data.body
            });
        });
   };
    const callEditPost=()=>{
        editPost(editPostData).then((data)=>{
            if(data){
            console.log("Edited");
                callGetPost();
            }
        })
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <div >
                <h1>Post List</h1>
            </div>
            <div>
                <h1>Add post</h1>
                <label className="form-label">Title</label>
                <input 
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={newPost.title}
                onChange={(e)=>setNewPost({...newPost,title:e.target.value})}
                />
                <label className="form-label">Body</label>
                <textarea 
                className="form-control"
                placeholder="Enter Body"
                id="body"
                value={newPost.body}
                rows="10"
                onChange={(e)=>setNewPost({
                    ...newPost,body:e.target.value
                })}
                />
                <button onClick={callAddPost}>Add Post</button>
            </div>
            <div>
                {postData.map((data)=>(
                    <div key={data.id}><h5>{data.title}</h5>
                    <p>{data.body}</p>
                    <p id={data.id} style={{cursor:'pointer'}} onClick={(e)=>callDeletePost(e)}>&times;</p>
                   <button id={data.id}
                   onClick={(e)=> handleEdit(e)}
                   >Edit</button>
                    </div>
                ))}
            </div>
                </div>
                <div className="col">
                
            <h1>Edit post</h1>
                <label className="form-label">Title</label>
                <input 
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={editPostData.title}
                onChange={(e)=>setEditPostData({...editPostData,title:e.target.value})}
                />
                <label className="form-label">Body</label>
                <textarea 
                className="form-control"
                placeholder="Enter Body"
                id="body"
                value={editPostData.body}
                rows="10"
                onChange={(e)=>setEditPostData({
                    ...editPostData,body:e.target.value
                })}
                /> <button onClick={callEditPost}>save Details</button>
            
                </div>
            </div>
           
           
        </div>
    )
}

export default PostList;