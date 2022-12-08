import Card from 'react-bootstrap/Card';

function CardProject({ link, image, text }) {
    return (
        <Card style={{ width: '20rem' }}>
            <a href={link}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Text style={{ color: 'black' }}>
                        {text}
                    </Card.Text>
                </Card.Body>
            </a >
        </Card >
    );
}

export default CardProject;