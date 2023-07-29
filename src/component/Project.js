import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Project = ({ name, image, info, url }) => {
  return (
    <Wrapper>
      <article className="single-project">
        <img src={image} alt={name} className="img" />
        <div className="project-info">
          <h5>{name}</h5>
          <p>
            {info}
            <Link to={url} className="info-btn" target="_blank">
              Go live
            </Link>
          </p>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .single-project {
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    position: relative;
    width: 22rem;
    row-gap: 1rem;
    padding: 1rem;
  }
  .single-project:hover {
    box-shadow: var(--shadow-4);
    transform: scale(1.02);
  }

  .img {
    width: 100%;
    display: block;
    object-fit: contain;
    padding-left: 2rem;
  }

  .single-project .img {
    width: 15rem;
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  p {
    margin: 0;
  }
  .info-btn {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    cursor: pointer;
  }

  .info-btn {
    color: var(--primary-500);
    font-weight: 600;
    margin-left: 10rem;
  }
  h5 {
    text-align: center;
  }
`

export default Project
