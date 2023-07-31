import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../assets/images/STEVE.jpg'

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        <div>
          <h1>
            Front-end React<span> Developer</span>
          </h1>
          <p>
            Hi, I am Stephen Aboagye Yeboah. A passionate front-end react
            developer base in Ghana, Kumasi. The web is my passion because it’s
            where I can find the most exciting projects to work on. It’s also
            where I get to express my creativity in ways that are hard to find
            elsewhere.
          </p>
          <Link to="/projects" className="btn btn-hero">
            See Projects
          </Link>
        </div>
        <img src={logo} alt="img hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      margin-left: 10rem;
    }
    .main-img {
      display: block;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
`

export default Landing
