import axios from 'axios';
import {
  FETCH_POSTS, 
  FETCH_POST,
  CREATE_POST} from './types'; 

const ROOT_URL = 'enter url here'; 

//redux promise will unwrap promise and data will
//go through all reducers
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts`); 
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

//takes properties from form and posts to api
export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts`, props); 
  return{
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}`); 
  return{
    type: FETCH_POST,
    payload: request
  }
}

