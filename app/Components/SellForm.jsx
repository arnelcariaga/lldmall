'use client'
import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const validateFile = (value) => {
    if (!value) {
        return 'File is required';
    }

    const file = value[0];

    if (file.size > 1048576) {
        return 'File size is too large (max: 1 MB)';
    }

    const allowedTypes = ['image/jpeg', 'image/png'];

    if (!allowedTypes.includes(file.type)) {
        return 'Unsupported file type';
    }

    return true;
};

export default function SellForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const inputs = useMemo(() => {
        return [{
            type: "text",
            description: "",
            name: "title",
            label: "Título",
            placeHolder: "Ejemp.: Chalina española",
            options: {
                required: "Campo requerido",
                minLength: {
                    value: 3,
                    message: "Muy pocos carácteres",
                },
                maxLength: {
                    value: 500,
                    message: "Demasiados carácteres",
                },
            },
        }, {
            type: "textarea",
            description: "Maximo de caracteres 1000",
            name: "description",
            label: "Descripción",
            placeHolder: "Descripción del producto",
            options: {
                required: "Campo requerido",
                minLength: {
                    value: 3,
                    message: "Muy pocos carácteres",
                },
                maxLength: {
                    value: 1000,
                    message: "Demasiados carácteres",
                },
            },
        }, {
            type: "file",
            description: "",
            name: "images",
            multiple: true,
            label: "Imágenes",
            placeHolder: "Imágenes",
            options: {
                required: "Campo requerido",
                validate: validateFile
            },
        }, {
            type: "select",
            description: "",
            name: "category",
            label: "Categoría",
            placeHolder: "Categoría",
            options: {
                required: "Campo requerido",
            },
        }, {
            type: "select",
            description: "",
            name: "subCategory",
            label: "Sub-Categoría",
            placeHolder: "Sub-Categoría",
            options: {
                required: "DEPENDE",
            },
        }, {
            type: "select",
            description: "",
            name: "condition",
            label: "Condición",
            placeHolder: "Nuevo/Usado/Etc",
            options: {
                required: false
            },
        }, {
            type: "number",
            description: "",
            name: "quantity",
            label: "Cantidad",
            placeHolder: "Cantidad que vendera de este articulo",
            options: {
                required: "Campo requerido",
                minLength: {
                    value: 1,
                    message: "Mínimo 1 artículo"
                }
            },
        }, {
            type: "select",
            description: "",
            name: "country",
            label: "País",
            placeHolder: "Desde que pais vende este articulo",
            options: {
                required: "Campo requerido",
            },
        }, {
            type: "date",
            description: "Año en que se fabrico el producto",
            name: "madeAge",
            label: "Año",
            placeHolder: "Año",
            options: {
                required: false
            },
        }, {
            type: "select",
            description: "",
            name: "tags",
            multiple: true,
            label: "Etiquetas",
            placeHolder: "Etiquetas",
            options: {
                required: "Campo requerido",
            },
        }, {
            type: "checkbox",
            description: "",
            name: "freeShpping",
            label: "Envío gratis",
            placeHolder: "Envío gratis",
            options: {
                required: false
            },
        }, {
            type: "text",
            description: "",
            name: "shippingPrice",
            label: "Precio de envío",
            placeHolder: "Precio de envío",
            options: {
                required: "DEPENDE"
            },
        }, {
            type: "checkbox",
            description: "",
            name: "worldWideShipping",
            label: "Envío internacional",
            placeHolder: "Envío internacional",
            options: {
                required: false
            },
        }, {
            type: "text",
            description: "",
            name: "worldWideShippingPrice",
            label: "Precio de envío internacional",
            placeHolder: "Precio de envío internacional",
            options: {
                required: "DEPENDE"
            },
        }, {
            type: "text",
            description: "",
            name: "price",
            label: "Precio del producto",
            placeHolder: "Precio del producto",
            options: {
                required: "Campo requerido"
            },
        }]
    }, [])

    const onSubmit = async (data) => {
        console.log(data)
    }

    return <Container>
        <Row className="justify-content-center mt-5">
            <Col md={8}>
                <Form>
                    {
                        inputs.map(({ type, name, placeHolder, options, multiple, description, label }, i) => {
                            return <Form.Group
                                key={i}
                                className="mb-4"
                            >
                                {
                                    type === "select" ?
                                        <>
                                            <Form.Label>{label}</Form.Label>
                                            <Form.Select
                                                multiple={multiple}
                                                className='border-0 bg-secondary-subtle'
                                                {...register(name, options)}
                                                isInvalid={errors[name]?.message}
                                            >
                                                <option value="">Seleccionar</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </> :
                                        type === "checkbox" ?
                                            <Form.Check
                                                type={type}
                                            >
                                                <Form.Check.Input
                                                    type={type}
                                                    name={name}
                                                    {...register(name, options)}
                                                    isInvalid={errors[name]?.message}
                                                />
                                                <Form.Check.Label>{placeHolder}</Form.Check.Label>
                                            </Form.Check> :
                                            type === "textarea" ?
                                                <>
                                                    <Form.Label>{label}</Form.Label>
                                                    <Form.Control
                                                        placeholder={placeHolder}
                                                        as="textarea"
                                                        name={name}
                                                        rows={4}
                                                        className='border-0 bg-secondary-subtle'
                                                        {...register(name, options)}
                                                        isInvalid={errors[name]?.message}
                                                    />
                                                    <Form.Text muted>
                                                        {description}
                                                    </Form.Text>
                                                </> :
                                                <>
                                                    <Form.Label>{label}</Form.Label>
                                                    <Form.Control
                                                        placeholder={placeHolder}
                                                        type={type}
                                                        name={name}
                                                        className='border-0 bg-secondary-subtle'
                                                        {...register(name, options)}
                                                        isInvalid={errors[name]?.message}
                                                    />
                                                </>

                                }
                                <Form.Control.Feedback
                                    type="invalid"
                                >
                                    {errors[name]?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        })
                    }
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}