import Container from "react-bootstrap/Container";

export default function MainDashboardLayout({ children }) {
    return (
        <Container fluid>
            {children}
        </Container>
    );
}
