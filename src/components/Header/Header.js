import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="#"><i class="fas fa-ticket-alt" style={{color:"Red", fontSize:"170%", width:"30%"}}></i>BookMyShow</Navbar.Brand>
          <Form className="d-flex" style={{marginLeft:"1%", marginRight:"20%", width:"40%"}}>
          {/* <i class="fas fa-search"></i> */}
              <FormControl
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="me-2"
                aria-label="Search"
                style={{width:"100%", height:"75%", marginTop:"1%"}}
              />
              {/* <Button variant="outline-danger">Search</Button> */}
            </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Button variant="danger">Sign In</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid 
        style={{ background: "black", color: "white"}}
      >
        <a style={{paddingRight:"2%", marginTop:"2%"}}>Movies</a>
        <a style={{paddingRight:"2%"}}>Sports</a>
      </Container>
    </div>
  );
}

export default Header;
