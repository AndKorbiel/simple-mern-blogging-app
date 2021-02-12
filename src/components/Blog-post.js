import MetaBox from './Meta-box';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function BlogPost(props) {
    const handleRemove = () => {
        props.triggerRemoveEffect(props.id)
    }

    const handleEdit = () => {
        props.triggerEditEffect(props.id)
    }

    return (
        <Col>
            <div className="post">
                <h2>{props.title}</h2>
                <MetaBox
                    date={props.date}
                    category={props.category}
                    likes={props.likes}
                />
                {props.isBlogList != null &&
                    <div className="options">
                        <Button name="remove" variant="danger" onClick={handleRemove}>Remove</Button>
                        <Button name="edit" variant="light" onClick={handleEdit}>Edit</Button>
                    </div>
                }
                <p>{props.content}</p>
            </div>
        </Col>
    )
}