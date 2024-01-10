'use client'
import { useState } from "react"
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
import MyToast from "@/app/Components/MyToast"
import { useRouter } from "next/navigation"

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

const inputs = [{
    name: "email",
    type: "email",
    placeHolder: "Correo electronico",
    options: {
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "No es un correo válido",
        },
    },
    icon: "bi bi-envelope"
}, {
    name: "pass",
    type: "password",
    placeHolder: "Contraseña",
    options: {
        minLength: {
            value: 8,
            message: "Solo se permiten mínimo 8 carácteres",
        },
    },
    icon: "bi bi-lock"
}]

export default function SignInForm() {
    const [showToast, setShowToast] = useState(false)
    const [signInStatusMsg, setSignInStatusMsg] = useState("")
    const [toastType, setToastType] = useState("")
    const [disableBtn, setDisableBtn] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setDisableBtn(true)
        const res = await signIn('credentials', {
            ...data,
            redirect: false
        })
        if (res.error === "CredentialsSignin") {
            setSignInStatusMsg("El correo o la contraseña no son correctos")
            setToastType("danger")
            setShowToast(true)
            setDisableBtn(false)
        } else if (res.error) {
            setSignInStatusMsg("Error al iniciar sesión, verifique su conexión a internet e intente de nuevo, si el problema persiste, póngase en contacto con soporte")
            setToastType("danger")
            setShowToast(true)
            setDisableBtn(false)
        } else {
            router.replace("/dashboard")
        }
    }

    return <Card.Body className="pb-0">
        <Stack className='flex-row column-gap-3 mb-3 text-muted'>
            <i className="bi bi-arrow-right"></i>
            Iniciar sesion
        </Stack>
        <Form>
            <Row className="row-gap-3">
                {
                    inputs.map(({ name, type, placeHolder, options, icon }) => {
                        return <Col md={12} key={name}>
                            <InputGroup>
                                <InputGroup.Text className="border-0"><i className={icon}></i></InputGroup.Text>
                                <Form.Control
                                    placeholder={placeHolder}
                                    {...register(name, {
                                        required: "Campo obligatorio",
                                        ...options
                                    })}
                                    aria-label={placeHolder}
                                    className="border-0 bg-secondary-subtle"
                                    isInvalid={errors[name]?.message}
                                    type={type}
                                />
                                {
                                    errors[name]?.type !== "required" &&
                                    <Form.Control.Feedback
                                        type="invalid"
                                    >
                                        {errors[name]?.message}
                                    </Form.Control.Feedback>
                                }
                            </InputGroup>
                        </Col>
                    })
                }

                <div className="d-grid row-gap-3">
                    <Link href="" className='text-decoration-none ms-auto text-muted'>
                        ¿Olvidó su contraseña?
                    </Link>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        disabled={disableBtn}
                    >
                        {
                            disableBtn ? "Iniciando..." : "Iniciar sesion"
                        }
                    </Button>
                    <Link href="/signUp" legacyBehavior>
                        <Button
                            variant="outline-primary"
                            disabled={disableBtn}
                        >
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
        <MyToast
            show={showToast}
            bg={toastType}
            subTitle="Inicio de sesión"
            msg={signInStatusMsg}
            close={() => setShowToast(false)}
        />
    </Card.Body>
}