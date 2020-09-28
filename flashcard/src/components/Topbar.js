import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import fire from '../config/fire';
import Login from './Login'
import Home from './Home'
import Stock from './Stock'

const Topbar = () => {

const logout = e => {
    fire.auth().signOut();
}

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/Home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form >
                <Form inline>
                    <Button variant="warning" style={{ margin: 10 }} onClick={logout}>LOGOUT</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Topbar