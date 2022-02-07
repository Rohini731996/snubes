import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg="dark" variant="dark">
             
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>TabletTest</Nav.Link>
                            <Nav.Link href='/mobile'>MobileTest</Nav.Link>
                            <Nav.Link href='/desktop'>DesktopTest</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
               
            </Navbar>
        </>
    );
}

export default Navigation;