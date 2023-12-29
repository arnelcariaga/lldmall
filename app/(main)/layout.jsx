import Container from "react-bootstrap/Container";
import MyNavbar from "./../Components/MyNavbar"
import Footer from "./../Components/Footer";

export default function MainLayout({ children }) {
  return (
    <Container fluid>
      {/* First Row */}
      <MyNavbar />

      {/* Second Row inside Container */}
      {children}

      {/* Third Row */}
      <Footer />
    </Container>
  );
}
