'use client'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Stack from "react-bootstrap/Stack"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const socialNetLog = [{
    name: "facebook",
    icon: "bi bi-facebook"
}, {
    name: "gmail",
    icon: "bi bi-google"
}, {
    name: "twitter",
    icon: "bi bi-twitter-x"
}, {
    name: "apple",
    icon: "bi bi-apple"
}]

export default function SignIn() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        signIn('credentials', {
            redirect: false,
            ...data
        })
    }

    console.log(errors)

    return <Card.Body className="pb-0">
        <Stack className='flex-row column-gap-3 mb-3 text-muted'>
            <i className="bi bi-arrow-right"></i>
            Iniciar sesion
        </Stack>
        <Form autoComplete="off">
            <Row className="row-gap-3">
                <Col md={12}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" className="border-0"><i className="bi bi-person"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="Correo electronico"
                            {...register("email", {
                                required: "Campo obligatorio",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "No es un correo válido",
                                },
                            })}
                            aria-label="Correo electronico"
                            aria-describedby="basic-addon1"
                            className="border-0 bg-secondary-subtle"
                            isInvalid={errors.email?.message}
                        />
                        <Form.Control.Feedback tooltip type={errors.email?.message && "invalid"}>
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>

                <Col md={12}>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" className="border-0"><i className="bi bi-lock"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="Contraseña"
                            {...register("pass", {
                                required: "Campo obligatorio"
                            })}
                            aria-label="Contraseña"
                            aria-describedby="basic-addon1"
                            className="border-0 bg-secondary-subtle"
                        />
                    </InputGroup>
                </Col>

                <div className="d-grid row-gap-3">
                    <Link href="" className='text-decoration-none ms-auto text-muted'>
                        ¿Olvidó su contraseña?
                    </Link>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                    >
                        Iniciar sesion
                    </Button>
                    <Link href="/signUp" legacyBehavior>
                        <Button variant="outline-primary">
                            Crear cuenta
                        </Button>
                    </Link>
                </div>
            </Row>
        </Form>
        <Stack direction="horizontal" className="column-gap-3 justify-content-center mt-3 text-muted">
            Acceder mas rapido con:
        </Stack>
        <Stack direction="horizontal" className="column-gap-3 justify-content-center mt-3">
            {
                socialNetLog.map(({ name, icon }) => {
                    return <Button
                        key={name}
                        className="border-0 bg-secondary-subtle rounded-circle"
                        variant="outline"
                    >
                        <i className={icon}></i>
                    </Button>
                })
            }
        </Stack>
    </Card.Body>
}