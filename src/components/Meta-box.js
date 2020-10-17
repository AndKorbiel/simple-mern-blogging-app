// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MetaBox(props) {
    return (
        <div className="meta-box">
            <Row>
                <Col>
                    <p>{props.date}</p>
                </Col>
                <Col>
                    <p>{props.category}</p>
                </Col>
                <Col>
                    <p><span>&#9829;</span> {props.likes}</p>
                </Col>
            </Row>
        </div>
    )
}