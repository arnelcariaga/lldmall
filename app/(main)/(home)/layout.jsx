import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../../Components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <Container fluid>

      {/* Second Row */}
      <Row className="mt-4">
        <Col lg={3}>
          <Sidebar />
        </Col>

        <Col lg={9}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
