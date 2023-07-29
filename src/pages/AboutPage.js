import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/profile_pic.svg'

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={logo} alt="nice pic" />
        <article>
          <div className="title">
            <h2>Personal Information</h2>
            <div className="title-underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              modi pariatur est soluta? Saepe quam asperiores error a accusamus
              natus maxime facere in odit ab dolor nam voluptates consequuntur,
              eveniet inventore adipisci nemo. Neque expedita quia debitis quae.
              Neque nobis fugiat voluptatum vitae quis veritatis, itaque iure
              cupiditate repellendus porro mollitia vel ab? Ducimus quidem eum
              ipsum sequi. Iusto, similique!
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  /* img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  } */
  img {
    display: block;
    width: 460px;
    height: 500px;
    object-fit: cover;
    margin-left: 5rem;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 2rem;
    margin-right: 8rem;
    color: var(--clr-grey-5);
  }
  h2 {
    text-align: left;
  }
  .title {
    text-align: left;
    margin-top: 80px;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
