'use client'
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function ProductBuyCard() {
    return (
        <Card className='border-light-subtle mb-4 sticky-top'>
            <Card.Body>
                <Card.Title className='fs-6 ms-2 mt-4'>Delivery</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <InputGroup size="sm">
                                <InputGroup.Text>
                                    <i className="bi bi-geo-alt"></i>
                                </InputGroup.Text>
                                <Form.Select>
                                    <option value="1">Chicago</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </Form.Select>
                            </InputGroup>
                        </Form.Group>
                    </Nav.Link>
                </Nav>

                <Card.Title className='fs-6 ms-2 mt-4'>Total Stocks: 7</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <InputGroup size="sm">
                                <InputGroup.Text>
                                    <i className="bi bi-dash"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="passwordHelpBlock"
                                    value={7}
                                    onChange={() => { }}
                                />
                                <InputGroup.Text>
                                    <i className="bi bi-plus"></i>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Nav.Link>
                </Nav>

                {/* Price and shipping */}
                <Nav defaultActiveKey="/home" className="flex-column mt-4">
                    <Stack direction='horizontal' className='justify-content-between'>
                        <Nav.Link eventKey="link-1" className='link-secondary'>
                            Price:
                        </Nav.Link>
                        <Nav.Link eventKey="link-1" className='link-secondary fw-bold'>
                            $USD16
                        </Nav.Link>
                    </Stack>
                    <hr className='border-secondary-subtle' />
                    <Stack direction='horizontal' className='justify-content-between'>
                        <Nav.Link eventKey="link-2" className='link-secondary'>
                            Shipping
                        </Nav.Link>
                        <Nav.Link eventKey="link-2" className='link-secondary fw-bold'>
                            $USD2
                        </Nav.Link>
                    </Stack>
                    <Stack className='row-gap-3 mt-4'>
                        <Button>Add to cart</Button>
                        <Button variant='outline-primary'>Buy Now</Button>
                    </Stack>
                </Nav>

            </Card.Body>
        </Card>
    );
}