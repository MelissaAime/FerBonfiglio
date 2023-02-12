import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import logo from "../../Assets/Images/logo.png";

export const NavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className='nav'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light"/>
        <img src={logo} alt='logo' className='navbar-img'/>
        <Navbar.Brand href="#home" className='nav-title'>Fer Bonfiglio</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-text'>Home</Nav.Link>
            <Nav.Link href="#project" className='nav-text'>Projects</Nav.Link>
            <Nav.Link href="#link" className='nav-text'>Contact</Nav.Link>
          </Nav>
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline" className='nav-search-button'>Search</Button>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
