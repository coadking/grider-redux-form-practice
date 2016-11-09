import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'; 
import {reduxForm} from 'redux-form'; 
import {createPost} from '../actions/index.js'; 

class NewPostForm extends Component {
  // defining an object on the CreatePostForm class
  static contextTypes = {
    //check all parent components til u find 'router'
    //when u find it assing it to this.context.router inside of the component
    router: PropTypes.object
  };

  //this props isnt this.props,, its properties from the form (content,title,categories)
  onSubmit(props){
    this.props.createPost(props)
    .then(() => {
      //post has been created, navigate user ot index
      //navigate by calling this.context.router.push with new path to go to
      this.context.router.push('/');  
    });
  }

  render() {

    const { fields: { title} , handleSubmit } = this.props; 
    //const title = this.props.fields.title; 
    //console.log(title); 
    //each of those 3 objects container some properties we can use to change the element
    //by using the {...} descructuring we have access to them

    return (
      <div className="container"> 
        <div className="col-md-8">

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
            <h3>Create a new post</h3>

            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
              <label htmlFor="">Title</label>
              <input type="text" className="form-control" {...title} />
              <div className="text-help">{title.touched ? title.error : ''}</div>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger"> Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = "Please enter a title" ; 
  }


  return errors; 
}

//we have to someone merge reduxForm and connect
//reduxForm can do the same thing as connect but takes one more arg
//connect: first arg is mapStatetoProps,2nd is mapDispatchToProps
//reduxForm: 1st is form config, second is mapststetoprops, 3rdis mapdispatchtoprops

export default reduxForm({ 
  form: 'PostNewForm',
  fields: [
    'title',
  ], 
  validate 
}, null, {createPost})(NewPostForm);





