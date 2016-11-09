import React from 'react';
import { Route, IndexRoute} from 'react-router'; 
import App from './App';
import PostsIndex from './components/posts_index';
import ShowPost from './components/posts_show';
import NewPost from './components/posts_new';

export default(

<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} /> 
  <Route path="/posts/new" component={NewPost} /> 
  <Route path="/posts/:id" component={ShowPost} /> 
</Route> 
); 
