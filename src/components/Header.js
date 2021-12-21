import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import '../styles/Style.css';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand className="heading">Inventory List App</Navbar.Brand>
                <Link className="btn btn-light my-2 rounded btn-sm" to='/inventorylist/addproduct'>Add products</Link>
                <Link className="btn btn-light my-2 rounded btn-sm" to='/inventorylist/productslist'>View Products List</Link>
                <Link className="btn btn-light myounded btn-s-2 rounded btn-sm" to='/inventorylist/removeproduct'>Remove Products</Link>
                <Link className="btn btn-light my-2 rounded btn-sm" to="/">Back to Home</Link>
            </Container>
        </Navbar>
    )
}
