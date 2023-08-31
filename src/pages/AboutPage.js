import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/STEVE.jpg'

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={logo} alt="nice pic" />
        <article>
          <div className="title">
            <p>
              I'm a front-end developer and like to code in my spare time. Using
              HTML,CSS, and Javascript, I have expertise in creating responsive
              websites. I have worked with well known-known frontend frameworks
              like React.js. I prefer to try out new technologies while I'm not
              working on projects. I have also worked with API's and familiar
              with version control programs like Git. I am a self starter who
              values working in a team as well as alone. I am an HND holder from
              the Kumasi Technical University and also a degree holder from
              Kwame Nkrumah University of Science and Technology.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 0.1rem;
  /* img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  } */
  img {
    display: block;
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 50%;
    margin-top: 3rem;
    justify-content: center;
    margin-left: 10rem;
    margin-right: 1rem;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-right: 2rem;
    color: var(--clr-grey-5);
    text-align: left;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: left;
  }
  .title {
    text-align: center;
    margin-top: 80px;
    span {
      color: var(--primary-500);
    }
  }
  .underline {
    margin-left: 5;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    p {
      margin-left: 3rem;
      margin-right: 5rem;
    }
  }
`

export default AboutPage
