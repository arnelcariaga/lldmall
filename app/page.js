"use client";
import React from "react";
import MyNavBar from "./MyNavbar";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItems from "./ListItems";

const Home = () => {
  const [isScrollingUp, setIsScrollingUp] = React.useState(false);

  React.useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Row>
      <Col className={`${isScrollingUp && "sticky-top"} bg-body`}>
        <MyNavBar />
      </Col>

      <Row className="mt-4">
        <Col lg={3}>
          <Sidebar />
        </Col>

        <Col lg={9}>
          <Container>
            <Row className="row-gap-4">
              <ListItems />
            </Row>
          </Container>
        </Col>
      </Row>
    </Row>
  );
};

export default Home;
