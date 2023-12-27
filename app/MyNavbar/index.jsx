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
import styles from "./page.module.css"
import MySubNavbar from './MySubNavbar';
import Stack from 'react-bootstrap/Stack';

function MyNavbar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className={styles.logoText}>
                    <Image
                        alt=""
                        src="/imgs/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    LLDMall
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

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
                            <Button className={`${styles.btnSearch} rounded-5 me-1`}>
                                <i className="bi bi-search"></i>{' '} Buscar
                            </Button>
                        </InputGroup>
                    </Form>

                    <Nav
                        className="me-auto my-2 my-lg-0 align-items-center gap-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
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
                            <i className={`${styles.navbar_icons} bi bi-cart`}></i>
                        </Nav.Link>
                        <Nav.Link href="#action2">
                            <i className={`${styles.navbar_icons} bi bi-bell`}></i>
                        </Nav.Link>
                        <Nav.Link href="#" >
                            <i className={`${styles.navbar_icons} bi bi-envelope`}></i>
                        </Nav.Link>
                        |
                        <Nav.Link href="#" >
                            <Image
                                alt=""
                                src="/imgs/balazs-orban.png"
                                width="45"
                                height="45"
                                className="d-inline-block align-top rounded rounded-circle"
                            />
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function RenderMyNavbar() {
    return <Stack className='border-bottom'>
        <MyNavbar />
        <MySubNavbar />
    </Stack>

}
export default RenderMyNavbar;