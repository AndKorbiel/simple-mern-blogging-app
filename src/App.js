import { Component } from 'react';
import BlogPost from './components/Blog-post';
import TopBar from './components/Top-bar';
import { connect } from 'react-redux'
import { addNewPost } from './state/actions'

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
    newLikes: 0
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

    this.props.sendNewPostToStore(newPost)
  }

  render() {
    return (
      <div className="App" >
        <Container fluid>
          <TopBar />
          <Row className="main">
            <Col lg="9" md="12" className="blog-list">
              <Row>
                {this.props.blogPostsFromStore.map(post => {
                  return (
                    <BlogPost
                      title={post.title}
                      content={post.content}
                      date={post.date}
                      category={post.category}
                      likes={post.likes}
                      key={post.title}
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

const mapStateToProps = state => {
  return {
    blogPostsFromStore: state.blogPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendNewPostToStore: newPost => dispatch(addNewPost(newPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
