'use client'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Stack from "react-bootstrap/Stack"
import Link from "next/link"
import Image from "next/image"

export default function SignUp() {
    return <Card.Body className="pb-0">
        <Stack className='flex-row column-gap-3 mb-3 text-muted'>
            <i class="bi bi-arrow-right"></i>
            Creacion de cuenta
        </Stack>
        <Stack className="row-gap-3">
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

            <div className="d-grid row-gap-3">
                <Button>
                    Crear cuenta
                </Button>

                <Link href="/signIn" legacyBehavior>
                    <Button variant="outline-primary">
                        Iniciar sesion
                    </Button>
                </Link>
            </div>
        </Stack>
        <Stack direction="horizontal" className="column-gap-3 justify-content-center mt-3">
            <span>Acceder mas rapido con</span>
        </Stack>
        <Stack direction="horizontal" className="column-gap-3 justify-content-center mt-3">
            <Button className="border-0" variant="outline">
                <Image
                    alt="facebook"
                    src="/imgs/Facebook_Logo_Primary.png"
                    width={25}
                    height={25}
                    className='object-fit-contain'
                />
            </Button>
            <Button className="border-0" variant="outline">
                <Image
                    alt="gmail"
                    src="/imgs/gmail.png"
                    width={25}
                    height={25}
                    className='object-fit-contain'
                />
            </Button>
            <Button className="border-0" variant="outline">
                <Image
                    alt="twitter"
                    src="/imgs/logo-black.png"
                    width={25}
                    height={25}
                    className='object-fit-contain'
                />
            </Button>
            <Button className="border-0" variant="outline">
                <Image
                    alt="apple"
                    src="/imgs/Apple_logo_black.svg"
                    width={25}
                    height={25}
                    className='object-fit-contain'
                />
            </Button>
        </Stack>
    </Card.Body>
}