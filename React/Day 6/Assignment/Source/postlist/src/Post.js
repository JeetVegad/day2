import React, { useState } from 'react';
function Post(props){
    const [postlist,SetPostList] = useState([]);
    let posts = [{pname:"Post : 1",pdisc:"Here is some beutiful images",date:"2022-03-27",pimg:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {pname:"Post : 2",pdisc:"Here is some beutiful images",date:"2021-09-27",pimg:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {pname:"Post : 3",pdisc:"Here is some beutiful images",date:"2022-01-26",pimg:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {pname:"Post : 4",pdisc:"Here is some beutiful images",date:"2021-12-27",pimg:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"}]
      const listpost = posts;
      const postitems = listpost.map((item)=>
      <div>
      <h1>{item.pname}</h1>
        <img src={item.pimg}></img>
        <h4 class="mt-4">Description : {item.pdisc}</h4>
        <h5>Posted Date : {item.date}</h5>
        <button className='btn text-white rounded px-3 my-2 bg-dark' onClick={(e)=>liked(item,e)}>Like</button>
        <hr/>
        </div>
      )
      function liked(data,event){
          event.preventDefault();
          SetPostList([...postlist,data]);
          props.postnotify(postlist);
      }
      
      return(
          <div>
              {postitems}
          </div>
      );
}

export default Post;