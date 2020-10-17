import BlogPost from './Blog-post';

// Bootsrap
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function PostForm(props) {
    return (
        <Col className="post-form">
            <h3>Add new post</h3>
            <Form.Group>
                <Form.Control type="text" placeholder="Post title..." name="title" onChange={e => props.handleChange(e)} />
                <Form.Control as="textarea" rows="3" type="text" placeholder="Post content..." name="content" onChange={e => props.handleChange(e)} />
                <Button onClick={props.addNewPost}>Submit</Button>
            </Form.Group>
            <h3>Post preview:</h3>
            <BlogPost
                title={props.title}
                content={props.content}
            />
        </Col>
    )
}
