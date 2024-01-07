import 'react-bootstrap-typeahead/css/Typeahead.css';
import Footer from "../Components/Footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import JoinHeader from "./JoinHeader";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export const metadata = {
    title: "LLDMAll | Indentifiquese",
    description: "Generated by create next app",
};

export default async function AuthLayout({ children }) {
    const session = await getServerSession()
    if (session) return redirect("/dashboard")

    return (
        <Container fluid>
            {/* First Row */}
            <Row className="vh-100 justify-content-center align-items-center">
                <Col lg={8} sm={10} xl={6} xxl={6} className="pt-4">
                    <Card className="p-2 border-0 shadow">
                        <JoinHeader />
                        {children}
                    </Card>
                </Col>

                {/* Nested Row */}
                <Footer />
            </Row>
        </Container>
    );
}
