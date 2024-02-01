import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JoinHeader from "@/app/Components/JoinHeader";

export default function NotFound() {
  return (
    <Container>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col className="text-center" md={6}>
          <div className="mb-5">
            <JoinHeader />
          </div>
          404 | No se econtró la página
        </Col>
      </Row>
    </Container>
  );
}
