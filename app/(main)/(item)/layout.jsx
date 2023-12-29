import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductPreview from "./item/ProductPreview/index";
import ProductBuyCard from "./item/ProductBuyCard/index";

export const metadata = {
    title: "LLDMAll | Detalles",
    description: "Generated by create next app",
};

export default function ItemLayout({ children }) {
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col lg={4}>
                    <ProductPreview />
                </Col>

                <Col lg={5}>
                    {children}
                </Col>

                <Col lg={3}>
                    <ProductBuyCard />
                </Col>
            </Row>
        </Container>
    );
}