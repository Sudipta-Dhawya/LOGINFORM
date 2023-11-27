import React, { Component , useState } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
// import TeamsPage from "./components/TeamsPage";

// import Home from './Home';
// import Contact from './contact';
// import About from './about';

 function NavbarG() {


  const [filter, setFilter] = useState('');
  const productList = [
    ' Apple',
    'Banana',
    'Mango',
    'Orange',
    'Coconut',
    'Another Product',
    'React Product',
    'Awesome Product',
  ];

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = productList.filter((product) =>
    product.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    
<>
 






      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Owner of website is Sudipta Dhawya </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        <div className="d-flex ms-auto">
          <Form className="d-flex ms-auto" style={{border:"1px solid #fff",display:"flex"}} >
            <Form.Control
             
              type="text"
              value={filter}
              onChange={handleFilter}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

           
             </Form>
            <div className='me-2'>

            <Button >LOG OUT</Button>
            </div>
            </div>
        </Navbar.Collapse>
        
      </Navbar>



      <ul>
 {filteredProducts.map((product) => (
   <li >{product}</li>
 ))}
</ul>

      </>

    //   {/* <Route path="/about" component={About} />
    //   <Route path="/contact" component={Contact} />
    //   <Route path="/home" component={Home} />
    //   <Route exact path="/" component={Home} />
    // </Route> */}
   
    
    
    
  );
}
export default NavbarG;
