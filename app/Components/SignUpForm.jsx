'use client'
import { useState, useMemo } from "react"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Stack from "react-bootstrap/Stack"
import Link from "next/link"
import { useForm } from "react-hook-form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Typeahead } from 'react-bootstrap-typeahead';
import { useRouter } from "next/navigation"
import MyToast from "@/app/Components/MyToast"

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

export default function SignUpForm({ countries }) {
    const [disableSignUpBtn, setDisableSignUpBtn] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState([])
    const [submitMsgStatus, setSubmitMsgStatus] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [toastType, setToastType] = useState("")

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm()
    const countriesParse = JSON.parse(countries)
    const router = useRouter()

    const inputs = useMemo(() => {
        return [{
            name: "firstName",
            type: "text",
            placeHolder: "Nombre(s)",
            options: {
                minLength: {
                    value: 3,
                    message: "Muy pocos carácteres",
                },
                maxLength: {
                    value: 35,
                    message: "Demasiados carácteres",
                },
            },
            icon: "bi bi-person"
        }, {
            name: "lastName",
            type: "text",
            placeHolder: "Apellido(s)",
            options: {
                minLength: {
                    value: 3,
                    message: "Muy pocos carácteres",
                },
                maxLength: {
                    value: 35,
                    message: "Demasiados carácteres",
                },
            },
            icon: "bi bi-credit-card-2-front"
        }, {
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
            name: "username",
            type: "text",
            placeHolder: "Usuario",
            options: {
                minLength: {
                    value: 3,
                    message: "Muy pocos carácteres",
                },
                maxLength: {
                    value: 35,
                    message: "Demasiados carácteres",
                },
                pattern: {
                    value: /^(?![a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$).*$/,
                    message: "El usuario no debe ser un correo"
                }
            },
            icon: "bi bi-person-vcard"
        }, {
            name: "pass",
            type: "password",
            placeHolder: "Contraseña",
            options: {
                minLength: {
                    value: 8,
                    message: "Solo se permiten mínimo 8 carácteres",
                },
                pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                    message: "Asegúrese de que contenga al menos un número y un caracter especial por ejemplo !@#$%^&*"
                }
            },
            icon: "bi bi-lock"
        }, {
            name: "repeatPass",
            type: "password",
            placeHolder: "Repetir contraseña",
            options: {
                minLength: {
                    value: 8,
                    message: "Solo se permiten mínimo 8 carácteres",
                },
                pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                    message: "Asegúrese de que contenga al menos un número y un caracter especial por ejemplo !@#$%^&*"
                },
                validate: (value) => value === watch('pass') || "Las contraseñas no coinciden",
            },
            icon: "bi bi-lock"
        }, {
            name: "country",
            type: "select",
            placeHolder: "País",
            options: {},
            icon: "bi bi-globe-americas"
        }]
    }, [watch])

    const onSubmit = async (data) => {
        setDisableSignUpBtn(true)
        const newData = { ...data, countryId: selectedCountry[0].countId }
        const response = await fetch('/api/auth/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newData }),
        })
        const resJson = await response.json()
        const { message } = resJson

        if (message === "user_already_exist") {
            setError("email", { type: "focus", message: "Este correo ya existe" }, { shouldFocus: true })
            setDisableSignUpBtn(false)
        } else if (message === "user_successfully_added") {
            router.push("/signIn")
        } else if (message === "adding_user_failed") {
            setToastType("danger")
            setSubmitMsgStatus("Error al registrarse, favor comunicarse con el administrador")
            setShowToast(true)
            setDisableSignUpBtn(false)
        } else if (message === "username_already_exist") {
            setError("username", { type: "focus", message: "Este nombre de usuario ya existe, elija otro" }, { shouldFocus: true })
            setDisableSignUpBtn(false)
        } else {
            setToastType("danger")
            setSubmitMsgStatus("Error al registrarse, por favor verifique su conexión internet o comuníquese con el administrador")
            setShowToast(true)
            setDisableSignUpBtn(false)
        }
    }

    return <Card.Body className="pb-0">
        <Stack direction="horizontal" className='column-gap-3 mb-3 text-muted'>
            <i className="bi bi-arrow-right"></i>
            Creacion de cuenta
        </Stack>
        <Row className="row-gap-3">

            {
                inputs.map(({ type, name, icon, placeHolder, options }) => {
                    if (type !== "select") {
                        return <Col md={6} key={name}>
                            <InputGroup>
                                <InputGroup.Text className="border-0"><i className={icon}></i></InputGroup.Text>
                                <Form.Control
                                    placeholder={placeHolder}
                                    aria-label={placeHolder}
                                    className="border-0 bg-secondary-subtle"
                                    {...register(name, {
                                        required: "Campo obligatorio",
                                        ...options
                                    })}
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
                    } else {
                        return <Col key={name}>
                            <InputGroup>
                                <InputGroup.Text className="border-0"><i className="bi bi-globe-americas"></i></InputGroup.Text>
                                <Typeahead
                                    onChange={(selected) => {
                                        setSelectedCountry(selected)
                                    }}
                                    options={countriesParse}
                                    labelKey="name"
                                    placeholder={placeHolder}
                                    inputProps={{
                                        className: "border-0 bg-secondary-subtle",
                                        register: {
                                            ...register(name, {
                                                required: selectedCountry.length < 1 && "Campo obligatorio",
                                                ...options
                                            })
                                        }
                                    }}
                                    aria-label={placeHolder}
                                    isInvalid={
                                        selectedCountry.length > 0 ?
                                            false :
                                            errors[name]?.message && true
                                    }
                                    id={1}
                                    selected={selectedCountry}
                                />
                            </InputGroup>
                        </Col>
                    }
                })
            }

            <div className="d-grid row-gap-3">
                <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={disableSignUpBtn}
                >
                    {disableSignUpBtn ? "Cargando..." : "Crear cuenta"}
                </Button>

                <Link href="/signIn" legacyBehavior>
                    <Button
                        variant="outline-primary"
                        disabled={disableSignUpBtn}
                    >
                        Iniciar sesion
                    </Button>
                </Link>
            </div>
        </Row>
        <Stack direction="horizontal" className="column-gap-3 justify-content-center mt-3">
            <span>Acceder mas rapido con</span>
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
            msg={submitMsgStatus}
            close={() => setShowToast(false)}
            subTitle="Registro de usuario"
        />
    </Card.Body>
}