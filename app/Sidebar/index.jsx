import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { price_order_slider } from "./sidebar.module.css"

function Sidebar() {
    return (
        <Card className='border-light-subtle mb-4'>
            <Card.Body>
                <Card.Title>Filter</Card.Title>

                <Card.Title className='fs-6 ms-2 mt-4'>Supplier Types</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label={<><i className="bi bi-brightness-alt-high-fill text-danger"></i> Trend asurrance</>}
                        />
                    </Nav.Link>
                    <Nav.Link eventKey="link-2" className='link-secondary'>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label={<><i className="bi bi-patch-check-fill text-primary"></i> Verified Suppliers</>}
                        />
                    </Nav.Link>
                </Nav>

                <Card.Title className='fs-6 ms-2 mt-4'>Products Types</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label="Ready to ship"
                            checked
                            onChange={() => { }}
                        />
                    </Nav.Link>
                    <Nav.Link eventKey="link-2" className='link-secondary'>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label="Paid samples"
                            checked
                            onChange={() => { }}
                        />
                    </Nav.Link>
                </Nav>

                <Card.Title className='fs-6 ms-2 mt-4'>Conditions</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label="New Stuff"
                        />
                    </Nav.Link>
                    <Nav.Link eventKey="link-2" className='link-secondary'>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label="Second Hands"
                        />
                    </Nav.Link>
                </Nav>

                <Card.Title className='fs-6 ms-2 mt-4'>Min order</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <ProgressBar now={60} className={price_order_slider} />
                    </Nav.Link>
                </Nav>

                <Card.Title className='fs-6 ms-2 mt-4'>Price</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                                aria-label="Dollar amount (with dot and two decimal places)"
                                value={100}
                                onChange={() => { }}
                            />
                        </InputGroup>
                    </Nav.Link>
                </Nav>

            </Card.Body>
        </Card>
    );
}

export default Sidebar;