import BlogPost from './Blog-post';

// Bootsrap
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function PostForm(props) {
    let submitButton;

    if (props.isEditing) {
        submitButton = <Button onClick={props.submitEditedPost}>Update</Button>
    } else {
        submitButton = <Button onClick={props.addNewPost}>Submit</Button>
    }

    return (
        <Col className="post-form">
            <h3>Add new post</h3>
            <Form>
                <Form.Control type="text" value={props.title} name="title" onChange={e => props.handleChange(e)} />
                <Form.Control type="text" value={props.newCategory} name="category" onChange={e => props.handleChange(e)} />
                <Form.Control as="textarea" rows="3" type="text" value={props.content} name="content" onChange={e => props.handleChange(e)} />
                {submitButton}
            </Form>
            <h3>Post preview:</h3>
            <BlogPost
                title={props.title}
                content={props.content}
                category={props.newCategory}
                date={props.newDate}
                likes={props.newLikes}
            />
        </Col>
    )
}
