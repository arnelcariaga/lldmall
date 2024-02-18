'use client'
import { useState, useEffect } from 'react';
import MySubNavbar from './MySubNavbar';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from '@/app/Components/MyNavbar/MyNavbar'


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