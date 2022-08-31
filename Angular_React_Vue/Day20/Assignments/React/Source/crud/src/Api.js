import axios from "axios";
const token = '39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8';
const url ='https://gorest.co.in/public/v2/posts';
const headers = {
    'Content-Type' : 'application/json',
    Authorization : `Bearer ${token}`,
};

export const getPost =() =>{
    return axios.get(url,{headers});
}

export const addPost = (post) =>{
    let temp = {
        user: {
          id: 1243,
          name: 'Lakshminath Agarwal Esq.',
          email: 'agarwal_esq_lakshminath@weber-feest.com',
          gender: 'female',
          status: 'active',
        },
        user_id: 2511,
        ...post,
    };
    return axios.post(url,temp,{headers})
};

export const getPostById =(id) =>{
    return axios.get(`${url}/${id}`,{headers});
}

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`,{headers});
};

export const editPost = (post) =>{
    return axios.put(`${url}/${post.id}`,post,{headers});
};