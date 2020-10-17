import { connect } from 'react-redux';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopBar(props) {
    const latestBlogPost = props.blogPostsFromStore[props.blogPostsFromStore.length - 1];

    return (
        <Row className="header">
            <Col>
                <h1>Check out our blog posts</h1>
                <h4>Latest post: <b>{latestBlogPost.title}</b> from {latestBlogPost.date}</h4>
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