import React, {Component} from 'react' ; 
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index'; 

class ShowPost extends Component {

  // call action creator to fetch single post on mount
  componentWillMount(){
    this.props.fetchPost(this.props.params.id); 
  }

  render(){
    const {post} = this.props; 

    if(!post){
      return <div className="container"> Almost there! </div> ; 
    }

    return ( 
            <div className="container"> 
              <h1> {post.title} </h1> 
            </div>
           )
  }
}

function mapStateToProps(state){
  return {post: state.posts.post }; 
}

export default connect(mapStateToProps, {fetchPost})(ShowPost); 
