import { useState } from 'react';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { user_dropdown, navbar_icons } from "@/app/Components/MyNavbar/navbars.module.css"
import Image from 'next/image';
import MyModal from '@/app/Components/MyModal';
import Button from 'react-bootstrap/Button';
import { signOut } from 'next-auth/react';
import { getFirstLetters } from '@/app/libs/getFirstLtters';

export default function AuthUserNavs({ user }) {
    const [showModal, setShowModal] = useState(false)

    return <>
        <Nav.Link href="#action2">
            <i className={`${navbar_icons} bi bi-bell`}></i>
        </Nav.Link>
        <Nav.Link href="#" >
            <i className={`${navbar_icons} bi bi-envelope`}></i>
        </Nav.Link>
        |
        <NavDropdown
            title={getFirstLetters(user?.firstName, user?.lastName)}
            id="navbarScrollingDropdown"
            className={`${user_dropdown} border border-3 rounded-circle`}
            align="end"

        >
            <NavDropdown.Item disabled>
                {user?.firstName + " " + user?.lastName}
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <Link href='/dashboard' passHref legacyBehavior className='text-decoration-none'>
                <NavDropdown.Item>
                    Mi perfil
                </NavDropdown.Item>
            </Link>

            <Link href='/settings' passHref legacyBehavior className='text-decoration-none'>
                <NavDropdown.Item>
                    Configuracion
                </NavDropdown.Item>
            </Link>

            <NavDropdown.Divider />

            <NavDropdown.Item onClick={() => setShowModal(true)}>
                Cerrar sesion
            </NavDropdown.Item>

        </NavDropdown>
        <MyModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            header="Cerrar sesi&oacute;n"
            body="¿ Est&aacute; segur@ que quiere cerrar sesi&oacute;n ?"
            footer={
                <>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => signOut()}
                    >Salir
                    </Button>
                </>
            }
        />
    </>
}