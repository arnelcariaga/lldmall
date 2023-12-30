'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

export default function MyCarousel() {
    return (
        <>
            <Card className='border-light-subtle align-items-center'>
                <Carousel
                    interval={null}
                    indicators={false}
                    controls={false}
                    onSelect={(eventKey) => {
                        console.log(eventKey)
                    }}
                >
                    <Carousel.Item>
                        <Image
                            alt="sdfsd"
                            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                            width={400}
                            height={350}
                            className="p-3 object-fit-contain"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            alt="sdfsd"
                            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                            width={400}
                            height={350}
                            className="p-3 object-fit-contain"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            alt="sdfsd"
                            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            width={400}
                            height={350}
                            className="p-3 object-fit-contain"
                        />
                    </Carousel.Item>
                </Carousel>
            </Card>

            <Carousel
                interval={null}
                indicators={false}
                onSelect={(eventKey) => {
                    console.log(eventKey)
                }}
                className='mt-4'
            >
                <Carousel.Item className="text-center">
                    <Image
                        alt="sdfsd"
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        width={50}
                        height={50}
                        className="object-fit-contain"
                    />
                </Carousel.Item>

                <Carousel.Item className="text-center">
                    <Image
                        alt="sdfsd"
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        width={50}
                        height={50}
                        className="object-fit-contain"
                    />
                </Carousel.Item>

                <Carousel.Item className="text-center">
                    <Image
                        alt="sdfsd"
                        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                        width={50}
                        height={50}
                        className="object-fit-contain"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}