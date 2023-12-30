import Footer from "../Components/Footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import JoinHeader from "./JoinHeader";

export default function AuthLayout({ children }) {
    return (
        <Container fluid>
            {/* First Row */}
            <Row className="vh-100">
                <Row className="justify-content-center align-items-center">
                    <Col lg={6} md={8} sm={8} xl={4}>
                        <Card className="border-0">
                            <JoinHeader />
                            {children}
                        </Card>
                    </Col>
                </Row>

                {/* Nested Row */}
                <Footer />
            </Row>
        </Container>
    );
}
