import React, { Component } from 'react';
import { Link } from 'react-router'; 
import NewPostForm from './new_post_form.jsx'; 

export default class PostNew extends Component {
  render() {

    return (
      <div> 
        <div className="text-xs-right"> 
        <br> 
        </br> 
          <Link to="/" className="btn btn-warning"> 
            Home
          </Link> 
        </div> 
        <NewPostForm /> 
      </div>
    );
  }
}

