import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../assets/images/profile_pic.svg'

const HomeComponent = () => {
  return (
    <Wrapper>
      <div className="container page">
        <div>
          <h1>
            Frontend <span>Developer</span>
          </h1>
          <p>
            Williamsburg tumblr cold-pressed, typewriter cred drinking vinegar
            same health goth food truck. Mustache church-key tacos activated
            charcoal cray cloud bread, taiyaki drinking vinegar solarpunk banh
            mi.
          </p>
          <Link to="/projects" className="btn btn-hero">
            See Projects
          </Link>
        </div>
        <img src={logo} alt="job hunt" className="img main-img" />
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
    }
    .main-img {
      display: block;
      width: 460px;
      height: 400px;
    }
  }
`

export default HomeComponent
