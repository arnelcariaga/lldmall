import Card from 'react-bootstrap/Card';

const DashboardCard = ({ variant }) => {
    return (
        <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            className="mb-2"
        >
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                    Some quick example text
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default DashboardCard;
