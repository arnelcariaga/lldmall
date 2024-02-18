import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'next/image';
import { card } from "./listItem.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';

function ListItems({ itemsArray }) {
    return (
        <Container>
            <Row>
                {
                    itemsArray.map(({ title, image, rating, price }, i) =>
                        <Col lg={3} key={i} className='mb-4'>
                            <Link href="/item" className='text-decoration-none'>
                                <Card className={`border-light-subtle ${card}`}>
                                    <Image
                                        alt={title}
                                        src={image}
                                        width={200}
                                        height={200}
                                        className='object-fit-contain position-relative mx-auto p-3'
                                    />

                                    <Card.Body className='p-3'>
                                        <Card.Text className='small text-truncate'>
                                            {title}
                                        </Card.Text>

                                        <Stack direction='horizontal' className='justify-content-between'>
                                            <Card.Text className='fs-6 fw-bold'>
                                                $USD {price}
                                            </Card.Text>

                                            <p className="fs-5">
                                                <i className="bi bi-cart-plus"></i>
                                            </p>
                                        </Stack>

                                        <Stack direction='horizontal' className='column-gap-1 text-warning small'>
                                            <i className="bi bi-star-fill"></i>
                                            <span>{rating.rate}</span> |
                                            <span className='text-secondary'>+3,450 vendidos</span>
                                        </Stack>

                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default ListItems;