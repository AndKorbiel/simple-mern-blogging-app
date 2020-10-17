import MetaBox from './Meta-box';

// Bootstrap
import Col from 'react-bootstrap/Col';

export default function BlogPost(props) {
    return (
        <Col>
            <div className="post">
                <h2>{props.title}</h2>
                <MetaBox
                    date={props.date}
                    category={props.category}
                    likes={props.likes}
                />
                <p>{props.content}</p>
            </div>
        </Col>
    )
}