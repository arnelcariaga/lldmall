import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'next/image';
import { logo_text, navbar_icons } from "./navbars.module.css"
import { useSession } from 'next-auth/react';
import AuthUserNavs from '@/app/Components/MyNavbar/AuthUserNavs';
import Link from 'next/link';
import Placeholder from 'react-bootstrap/Placeholder';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDark } from '@/app/Redux/Slices/settingsSlice';

export default function MyDashboardNavbar({ setIsSidebarOpen }) {
    const { data, status } = useSession()
    const user = data?.user
    const darkMode = useSelector(s => s.settings.darkMode)
    const dispatch = useDispatch()

    return (
        <Navbar expand="lg">
            <Container fluid>
                <Button
                    variant="default"
                    className='me-3'
                    onClick={setIsSidebarOpen}
                >
                    <i className="bi bi-list"></i>
                </Button>

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
                            <Form.Control
                                aria-label="Text input with dropdown button"
                                className='border-0'
                                placeholder='Ejemplo: editar perfil...'
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
                                    <i className="bi bi-moon-stars-fill"></i>
                            }
                        </Button>

                        {
                            status === "loading" ?
                                <Placeholder animation="glow" xs={4}>
                                    <Placeholder xs={12} />
                                </Placeholder>
                                : status === "authenticated" && <AuthUserNavs user={user} />
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}