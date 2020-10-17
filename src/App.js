import { Component } from 'react';
import BlogPost from './components/Blog-post';
import TopBar from './components/Top-bar';
import { connect } from 'react-redux';
import { getAllBlogPostsEffect, getSelectedBlogPostsEffect, addNewPostEffect, removePostEffect, eidtPostEffect } from './state/effects';

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
    searchKeyword: '',
    isEditing: false,
    id: ''
  }

  componentDidMount() {
    const today = new Date().toISOString().slice(0, 10);

    this.setState({
      newDate: today
    })

    this.props.getAllBlogPostsFromStore()
  }

  handleChange = (event) => {
    const value = event.target.value;
    let { newTitle, newCategory, newContent, searchKeyword } = this.state;

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
      case 'titleSearch':
        searchKeyword = value;
        break;
      default:
        return false;
    }

    this.setState({
      newTitle,
      newCategory,
      newContent,
      searchKeyword
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

  searchForPosts = () => {
    const keyword = this.state.searchKeyword;
    this.props.getSelectedBlogPostsFromStore(keyword);
  }

  editPost = id => {
    fetch('/blog-post/get?' + new URLSearchParams({
      id: id
    }))
      .then(res => res.json())
      .then(data => {
        const postData = data[0];

        this.setState({
          newTitle: postData.title,
          newContent: postData.content,
          newDate: postData.date,
          newCategory: postData.category,
          newLikes: postData.likes,
          isEditing: true,
          id: postData._id
        })
      })
      .catch(err => console.log(err))
  }

  submitEditedPost = () => {
    const editedPost = {
      title: this.state.newTitle,
      content: this.state.newContent,
      date: this.state.newDate,
      category: this.state.newCategory,
      likes: this.state.newLikes,
      id: this.state.id
    }

    this.props.sendEditedPostToStore(editedPost);

    this.setState({
      newTitle: 'New post title',
      newContent: 'There will go my content...',
      newDate: new Date().toISOString().slice(0, 10),
      newCategory: '#myCategory',
      newLikes: 0,
      isEditing: false,
      id: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <TopBar handleChange={this.handleChange} searchForPosts={this.searchForPosts} />
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
                      id={post._id}
                      triggerRemoveEffect={this.props.removePostFromStore}
                      triggerEditEffect={this.editPost}
                      isBlogList={true}
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
                isEditing={this.state.isEditing}
                submitEditedPost={this.submitEditedPost}
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
    sendNewPostToStore: newPost => dispatch(addNewPostEffect(newPost)),
    getAllBlogPostsFromStore: () => dispatch(getAllBlogPostsEffect()),
    getSelectedBlogPostsFromStore: keyword => dispatch(getSelectedBlogPostsEffect(keyword)),
    removePostFromStore: postId => dispatch(removePostEffect(postId)),
    sendEditedPostToStore: editedPost => dispatch(eidtPostEffect(editedPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
