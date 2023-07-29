import React from 'react'
import styled from 'styled-components'
import { imageData } from '../data'
import Project from './Project'

const FeaturedProjects = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured projects</h2>
        <div className="title-underline "></div>
      </div>
      <div className="section-center featured">
        {imageData.map((img) => {
          console.log(img)
          return <Project key={img.id} {...img} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--grey-100);
  .featured {
    margin: 0.2rem auto;
    margin-left: 2rem;
    display: grid;
    gap: 2rem;
    img {
      height: 225px;
      margin: 2rem auto;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 992px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProjects
