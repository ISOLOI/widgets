import { Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Menu.css'

const Menu = () => {
  return (
    <Container>
      <header className='d-flex flex-wrap justify-content-space-around py-3 mb-4 border-bottom'>
        <LinkContainer to='/'>
          <Nav.Link className='d-flex align-items-left col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
            NewAge
          </Nav.Link>
        </LinkContainer>
        <Nav>
          <ul className='nav col-12 col-md-auto mb-2 mb-md-0'>
            <li>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link px-2 link-secondary'>About</Nav.Link>
              </LinkContainer>
            </li>
          </ul>
        </Nav>
      </header>
    </Container>
  )
}

export default Menu
