import { Component } from 'react';
import BlogPost from './components/Blog-post';
import PostForm from './components/Post-form';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  state = {
    newTitle: 'New post title',
    newContent: 'There will go my content...',
    blogPosts: [
      {
        title: "First post title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque leo a commodo. Proin quis iaculis velit, id porta sem. Aliquam pellentesque tristique sem, eget pretium neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      },
      {
        title: "Second post title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque leo a commodo. Proin quis iaculis velit, id porta sem."
      }
    ]
  }

  handleChange = (event) => {
    const value = event.target.value;
    if (event.target.name === 'title') {
      this.setState({
        newTitle: value
      })
    } else {
      this.setState({
        newContent: value
      })
    }
  }

  addNewPost = () => {
    const newPost = {
      title: this.state.newTitle,
      content: this.state.newContent
    }

    let currentState = this.state.blogPosts;
    currentState.push(newPost)

    this.setState({
      blogPosts: currentState
    })
  }

  render() {
    return (
      <div className="App" >
        <Container fluid>
          <Row className="header">
            <Col>
              <h1>Check latest blog posts</h1>
            </Col>
          </Row>
          <Row className="main">
            <Col lg="9" md="12" className="blog-list">
              <Row>
                {this.state.blogPosts.map(post => {
                  return (
                    <BlogPost title={post.title} content={post.content}></BlogPost>
                  );
                })}
              </Row>
            </Col>
            <Col>
              <PostForm handleChange={this.handleChange} title={this.state.newTitle} content={this.state.newContent} addNewPost={this.addNewPost} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
