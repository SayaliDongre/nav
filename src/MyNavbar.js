import { React, useState }  from 'react'
import TextField from '@mui/material';
import List from "./Components/List";
import { Col, Container, Nav, Navbar, NavDropdown, Row, Form, Button } from 'react-bootstrap'
import "./App.css";

function MyNavbar() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Navbar fixed='top' variant='dark' bg='dark' expand='md'>
                            <Container>
                                <Navbar.Brand href='#'>
                                    <img
                                        src='logo192.png'
                                        height='30'
                                        width='30'
                                        className='align-top'
                                    />
                                    &nbsp;
                                    NutriSalah
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls='my-nav'/>
                                <Navbar.Collapse id='my-nav'>
                                <Nav className='me-auto fw-bold'>
                                    <Nav.Link href='#'>Home</Nav.Link>
                                    <NavDropdown title='Services' id='my-nav'>
                                    <NavDropdown.Header>Heading 1</NavDropdown.Header>
                                        <NavDropdown.Item href='#'>Service 1</NavDropdown.Item>
                                        <NavDropdown.Item href='#'>Service 2</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Header>Heading 2</NavDropdown.Header>
                                        <NavDropdown.Item href='#'>Service 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href='#'>About</Nav.Link>
                                    <Nav.Link href='#'>Contact</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control id="outlined-basic"
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                     {/* <Button variant="outline-success">Search</Button> */ }
                                </Form>
                                <Navbar.Text>
                                    Sign In<button style={{
                                            background: '#DC143C' ,/* Crimson*/
                                            color: 'white',
                                            display: 'inline-block',
                                            }}>Login</button>
                                </Navbar.Text>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyNavbar