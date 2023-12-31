
'use client'
import Link from "next/link";
import Image from "next/image";
import Card from "react-bootstrap/Card"

export default function JoinHeader() {
    return <Card.Header className="text-center border-bottom-0 bg-transparent p-0 mb-2">
        <Link
            href='/'
            className='text-decoration-none text-light'
        >
            <Image
                alt="logo"
                src="/imgs/logo.svg"
                width={70}
                height={70}
                className='object-fit-contain mb-3'
            />
            <Card.Title className="text-light-emphasis mb-0 fs-5">LLDMall</Card.Title>
        </Link>
    </Card.Header>
}