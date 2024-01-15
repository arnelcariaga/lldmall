'use client'
import { useState, useEffect } from 'react';
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
import { logo_text, navbar_icons } from "./navbars.module.css"
import MySubNavbar from './MySubNavbar';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSession } from 'next-auth/react';
import AuthUserNavs from '@/app/Components/MyNavbar/AuthUserNavs';
import Link from 'next/link';
import Placeholder from 'react-bootstrap/Placeholder';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDark } from '@/app/Redux/Slices/settingsSlice';

function MyNavbar() {
    const { data, status } = useSession()
    const user = data?.user
    const darkMode = useSelector(s => s.settings.darkMode)
    const dispatch = useDispatch()
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} href="/" className={logo_text}>
                    <Image
                        alt=""
                        src="/imgs/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-3"
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
                            <Button className="rounded-5 me-1">
                                <i className="bi bi-search"></i>{' '} Buscar
                            </Button>
                        </InputGroup>
                    </Form>

                    <Nav
                        className="me-auto my-2 my-lg-0 w-75 align-items-center justify-content-end flex-row gap-sm-5 gap-lg-3 gap-4"
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

                        <Button
                            size='sm'
                            className='rounded-circle'
                            variant=''
                            onClick={() => dispatch(toggleDark())}
                        >
                            {
                                darkMode === 'light' ?
                                    <i className="bi bi-sun-fill"></i>
                                    :
                                    <i class="bi bi-moon-stars-fill"></i>
                            }
                        </Button>

                        <Button
                            size='sm'
                            as={Link}
                            href="/sell"
                        >
                            Vender
                        </Button>

                        {
                            status === "loading" ?
                                <Placeholder animation="glow" xs={4}>
                                    <Placeholder xs={12} />
                                </Placeholder>
                                : status === "authenticated" ? <AuthUserNavs user={user} /> :
                                    <Stack direction='horizontal' className='column-gap-3'>
                                        <Button
                                            size='sm'
                                            as={Link}
                                            href="/signUp"
                                        >
                                            Registrarse
                                        </Button>
                                        <Button
                                            size='sm'
                                            className='text-nowrap'
                                            as={Link}
                                            href="/signIn"
                                            variant="outline-primary"
                                        >
                                            Iniciar sesion
                                        </Button>
                                    </Stack>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function RenderMyNavbar() {
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
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