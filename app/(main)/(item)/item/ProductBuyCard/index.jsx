'use client'
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { add_to_cart_btn, buy_now_btn } from "./product_buy_card.module.css"

export default function ProductBuyCard() {
    return (
        <Card className='border-light-subtle mb-4'>
            <Card.Body>
                <Card.Title className='fs-6 ms-2 mt-4'>Delivery</Card.Title>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link eventKey="link-1" className='link-secondary'>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <InputGroup size="sm">
                                <InputGroup.Text>
                                    <i class="bi bi-geo-alt"></i>
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
                                    <i class="bi bi-dash"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    value={7}
                                />
                                <InputGroup.Text>
                                    <i class="bi bi-plus"></i>
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
                    <Stack className='row-gap-3'>
                        <Button className={add_to_cart_btn}>Add to cart</Button>
                        <Button className={buy_now_btn}>Buy Now</Button>
                    </Stack>
                </Nav>

            </Card.Body>
        </Card>
    );
}