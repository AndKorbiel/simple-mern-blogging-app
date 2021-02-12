import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TopBar(props) {
    const latestBlogPost = props.blogPostsFromStore[props.blogPostsFromStore.length - 1] || {};
    const [message, setMessage] = useState('Initial message');

    useEffect(() => {
        fetch('/message/api')
        .then(res => res.json())
        .then(data => {
            setMessage(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Row className="header">
            <Col>
                <h1>Check out our blog posts</h1>
                <h4>Latest post: <b>{latestBlogPost.title}</b> from {latestBlogPost.date}</h4>
                <p>Message of the day: <b>{message}</b></p>
            </Col>
            <Col>
                <h4>Search for posts</h4>
                <Form.Row>
                    <Col>
                        <Form.Control type="text" placeholder="Post title..." name="titleSearch" onChange={e => props.handleChange(e)} />
                    </Col>
                    <Col>
                        <Button onClick={props.searchForPosts}>Search</Button>
                    </Col>
                </Form.Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        blogPostsFromStore: state.blogPosts
    }
}

export default connect(mapStateToProps, {})(TopBar)