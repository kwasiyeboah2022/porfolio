import React from 'react'
import styled from 'styled-components'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { usePortfolioContext } from '../context/portfolio_context'

const Navbar = () => {
  const { openSidebar } = usePortfolioContext()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h4>Yeboah.dev</h4>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    display: flex;

    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    /* justify-content: space-between; */
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  h4 {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    h4 {
      display: block;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
