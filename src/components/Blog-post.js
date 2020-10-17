import Col from 'react-bootstrap/Col';

export default function BlogPost(props) {
    return (
        <Col>
            <div className="post">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </Col>
    )
}