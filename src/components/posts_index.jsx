import React, {Component} from 'react' ; 
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'; 
import {Link} from 'react-router'; 

class PostsIndex extends Component{

  // call action creator to fetch all posts here
  componentWillMount(){
    this.props.fetchPosts(); 
  }

  renderList(){
    return this.props.posts.map((post) => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id} > 
            <strong>{post.title}</strong>
          </Link> 
        </li>  
      )
}); 
} 

render(){

  return(
    <div className="container"> 
      <h2> All posts </h2> 

      <ul className="list-group">
        {this.renderList()} 
      </ul>
    </div> 
  );
}
}

function mapStateToProps(state){
  return { posts: state.posts.all }; 
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex); 

