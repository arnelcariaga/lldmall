import Toast from "react-bootstrap/Toast"
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function MyToast({ bg, msg, show, close, subTitle }) {
    return <ToastContainer
        className="p-3 position-fixed"
        position="bottom-end"
        style={{ zIndex: 1 }}
    >
        <Toast
            bg={bg}
            show={show}
            onClose={close}
            delay={4000}
            autohide
        >
            <Toast.Header>
                <strong className="me-auto">LLDMAc | {subTitle}</strong>
            </Toast.Header>
            <Toast.Body>
                {msg}
            </Toast.Body>
        </Toast>
    </ToastContainer>
}