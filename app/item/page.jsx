"use client";
import React from "react";
import MyNavBar from "./../MyNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Item = () => {
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
                <Col lg={4}>
                    <h1>Caurosel images</h1>
                </Col>

                <Col lg={4}>
                    <h1>Products details</h1>
                </Col>

                <Col lg={4}>
                    <h1>Products buy info card</h1>
                </Col>
            </Row>
        </Row>
    );
};

export default Item;
