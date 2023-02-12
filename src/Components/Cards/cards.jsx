import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards = ({title, text, image, alt}) => {
  return (
    <Card className='text-center'>
      <Card.Img variant="top" src={image} alt={alt}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button className='card-button'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
