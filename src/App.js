import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  //after render method is called , this method will call next.
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(json =>this.setState({posts: json}))
  }

  //main method , from the very first render() method is called
  render() {
    const { posts } = this.state;
   return(
       <div className="container">
         <div className="jumbotron">
           <h1 className="display-4">Blog posts</h1>
         </div>
         {posts.map((post) => (
             <div className="card" key={post.id}>
              <div className="card-header">
                #{post.id} {post.title}
              </div>
           <div className="card-body"><p className="card-text">{post.body}</p>
           </div>
         </div>)
         )}
       </div>

       //<p> Hello World </p>
   );
 }

}

export default App;
