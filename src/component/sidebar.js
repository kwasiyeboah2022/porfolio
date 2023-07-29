import React from 'react'
import styled from 'styled-components'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { usePortfolioContext } from '../context/portfolio_context'

const Sidebar = () => {
  const { isSideBar_Open, closeSidebar } = usePortfolioContext()
  console.log(isSideBar_Open)
  return (
    <SidebarContainer>
      <aside
        className={`${isSideBar_Open ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    transition: var(--transition);
    cursor: pointer;
    color: var(--primary-300);
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: var(--primary-500);
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--grey-300);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a:hover {
    color: var(--primary-500);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
