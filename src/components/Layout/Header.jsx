import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
			<Container className="px-0 mx-0 mx-sm-auto">
				<Navbar.Brand className="text-primary me-5 ps-3 ps-sm-0">
					<Link to="/">The YAY Company</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 pe-3 pe-sm-0" />
				<Navbar.Collapse id="responsive-navbar-nav" className="mt-4 mt-lg-0">
					<Nav className="me-auto">
						<NavLink
							to="/"
							exact
							className="nav-link text-dark w-100 mb-2 mb-lg-0 px-3 py-1"
							activeClassName="bg-white active"
						>
							Home
						</NavLink>
						<NavLink
							to="/news"
							className="nav-link text-dark w-100 mb-2 mb-lg-0 px-3 py-1"
							activeClassName="bg-white active"
						>
							News
						</NavLink>
						<NavLink
							to="/contact"
							className="nav-link text-dark w-100 mb-2 mb-lg-0 px-3 py-1"
							activeClassName="bg-white active"
						>
							Contact
						</NavLink>
					</Nav>
					<Nav className="mt-4 mt-lg-0 px-3">
						<InputGroup>
							<FormControl placeholder="Search" aria-label="Search" className="border-0 py-2" />
							<Button variant="outline-secondary rounded-end bg-primary text-white fw-normal border-0">
								Go
							</Button>
						</InputGroup>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export { Header }
