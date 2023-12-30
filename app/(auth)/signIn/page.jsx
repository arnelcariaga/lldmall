'use client'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Stack from "react-bootstrap/Stack"
import Link from "next/link"

export default function SignIn() {
    return <>
        <Card.Body>
            <Stack className="row-gap-4">
                <InputGroup>
                    <InputGroup.Text id="basic-addon1" className="border-0"><i className="bi bi-person"></i></InputGroup.Text>
                    <Form.Control
                        placeholder="Correo electronico"
                        aria-label="Correo electronico"
                        aria-describedby="basic-addon1"
                        className="border-0 bg-secondary-subtle"
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Text id="basic-addon1" className="border-0"><i className="bi bi-lock"></i></InputGroup.Text>
                    <Form.Control
                        placeholder="Contraseña"
                        aria-label="Contraseña"
                        aria-describedby="basic-addon1"
                        className="border-0 bg-secondary-subtle"
                    />
                </InputGroup>

                <div className="d-grid">
                    <Link href="/signUp" className='text-decoration-none'>
                        <p className="text-end small">Crear una cuenta</p>
                    </Link>
                    <Button>
                        Iniciar sesion
                    </Button>
                </div>
            </Stack>
        </Card.Body>
    </>
}