import { Component } from 'react';
import BlogPost from './components/Blog-post';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from './components/Post-form';

import './App.css';

class App extends Component {
  state = {
    newTitle: 'New post title',
    newContent: 'There will go my content...',
    newDate: '',
    newCategory: '#myCategory',
    newLikes: 0,
    blogPosts: [
      {
        title: "First post title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque leo a commodo. Proin quis iaculis velit, id porta sem. Aliquam pellentesque tristique sem, eget pretium neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        date: "2020-10-15",
        category: "#technology",
        likes: 10
      },
      {
        title: "Second post title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque leo a commodo. Proin quis iaculis velit, id porta sem.",
        date: "2001-01-11",
        category: "#foo-bar",
        likes: 1000
      }
    ]
  }

  componentDidMount() {
    const today = new Date().toISOString().slice(0, 10);

    this.setState({
      newDate: today
    })
  }

  handleChange = (event) => {
    const value = event.target.value;
    let { newTitle, newCategory, newContent } = this.state;

    switch (event.target.name) {
      case 'title':
        newTitle = value;
        break;
      case 'category':
        newCategory = value;
        break;
      case 'content':
        newContent = value;
        break;
      default:
        return false;
    }

    this.setState({
      newTitle,
      newCategory,
      newContent
    });
  }

  addNewPost = () => {
    const newPost = {
      title: this.state.newTitle,
      content: this.state.newContent,
      date: this.state.newDate,
      category: this.state.newCategory,
      likes: this.state.newLikes
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
                    <BlogPost
                      title={post.title}
                      content={post.content}
                      date={post.date}
                      category={post.category}
                      likes={post.likes}
                    />
                  );
                })}
              </Row>
            </Col>
            <Col>
              <PostForm 
              handleChange={this.handleChange} 
              title={this.state.newTitle} 
              content={this.state.newContent} 
              addNewPost={this.addNewPost} 
              newDate={this.state.newDate}
              newCategory={this.state.newCategory} 
              newLikes={this.state.newLikes} 
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
