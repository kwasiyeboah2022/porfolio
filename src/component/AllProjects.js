import Project from './Project'
import { styled } from 'styled-components'
import { apiProjects } from '../utils/apiProject'

const AllProjects = () => {
  return (
    <Wrapper>
      <section>
        <div className="title">
          <h2>My projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="allProjects">
          {apiProjects.map((singleProject) => {
            console.log(singleProject)
            return <Project key={singleProject.id} {...singleProject} />
          })}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .title-underline {
    background: var(--primary-500);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: 1rem;
  }

  .allProjects {
    padding: 2rem 0;
    display: grid;
    gap: 2rem;
    margin-left: 5rem;
  }
  @media screen and (min-width: 768px) {
    .allProjects {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    .allProjects {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default AllProjects
