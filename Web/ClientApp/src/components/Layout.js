import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SidePanel from './SidePanel';
import Main from './Main';

function Layout() {
    return (
        <Container fluid>
            <Row>
                <Col md="auto">
                    <SidePanel></SidePanel>
                </Col>
                <Col>
                    <Main></Main>
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;