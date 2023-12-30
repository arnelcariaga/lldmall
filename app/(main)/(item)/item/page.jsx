import Button from 'react-bootstrap/Button';
export default function ProductDetail() {
    return (
        <>
            <h2>Product Title</h2>
            <p className="text-muted">Product Category</p>
            <p className="lead">$99.99</p>
            <p>Product description goes here. Provide detailed information about the product.</p>
            <Button variant="primary">Add to Cart</Button>
        </>
    );
};
