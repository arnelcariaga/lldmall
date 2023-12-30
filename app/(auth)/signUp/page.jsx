'use client'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Stack from "react-bootstrap/Stack"
import Link from "next/link"

export default function SignUp() {
    return <>
        <Card.Body>
            <Stack className="row-gap-4">
                <InputGroup>
                    <InputGroup.Text id="basic-addon1" className="border-0"><i className="bi bi-globe-americas"></i></InputGroup.Text>
                    <Form.Select aria-label="Default select example" className="border-0 bg-secondary-subtle">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </InputGroup>
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
                    <Link href="/signIn" className='text-decoration-none'>
                        <p className="text-end small">Iniciar sesion</p>
                    </Link>
                    <Button>
                        Crear cuenta
                    </Button>
                </div>
            </Stack>
        </Card.Body>
    </>
}