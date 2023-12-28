'use client';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image';
import { user_dropdown, logo_text, btn_search, navbar_icons } from "./navbars.module.css"
import MySubNavbar from './MySubNavbar';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyNavbar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className={logo_text}>
                    <Image
                        alt=""
                        src="/imgs/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    LLDMall
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" className='btn' />

                <Navbar.Collapse id="navbarScroll">
                    <Form className="w-100 border border-opacity-25 border-secondary rounded-5 mx-lg-5 py-1">
                        <InputGroup size='sm'>
                            <DropdownButton
                                variant="default"
                                title="Rep. Dom."
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control
                                aria-label="Text input with dropdown button"
                                className='border-top-0 border-bottom-0 border-end-0'
                            />
                            <Button className={`${btn_search} rounded-5 me-1`}>
                                <i className="bi bi-search"></i>{' '} Buscar
                            </Button>
                        </InputGroup>
                    </Form>

                    <Nav
                        className="me-auto my-2 my-lg-0 align-items-center justify-content-center flex-row gap-sm-5 gap-lg-2 gap-4"
                    >
                        <NavDropdown title="EN" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#action1">
                            <i className={`${navbar_icons} bi bi-cart`}></i>
                        </Nav.Link>
                        <Nav.Link href="#action2">
                            <i className={`${navbar_icons} bi bi-bell`}></i>
                        </Nav.Link>
                        <Nav.Link href="#" >
                            <i className={`${navbar_icons} bi bi-envelope`}></i>
                        </Nav.Link>
                        |
                        <NavDropdown
                            title={
                                <Image
                                    alt=""
                                    src="/imgs/balazs-orban.png"
                                    width="45"
                                    height="45"
                                    className="d-inline-block align-top rounded rounded-circle"
                                />
                            }
                            id="navbarScrollingDropdown"
                            className={user_dropdown}
                            align="end"
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function RenderMyNavbar() {
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

    return <Row className={`bg-body ${isScrollingUp && "sticky-top"}`}>
        <Col>
            <Stack className='border-bottom'>
                <MyNavbar />
                <MySubNavbar />
            </Stack>
        </Col>
    </Row>
}
export default RenderMyNavbar;