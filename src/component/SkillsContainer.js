import Skills from './Skills'
import { skillsData } from '../utils/skillsData'
import styled from 'styled-components'

const SkillsContainer = () => {
  return (
    <Wrapper>
      <div>
        <h2 className="heading">skills</h2>
      </div>
      <div className="skills">
        {skillsData.map((data) => {
          return <Skills key={data.id} {...data} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  /* margin-top: 0.2rem; */
  /* h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  } */

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .heading {
    font-weight: 700;
    margin-top: 0.2rem;
  }
  .skills {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.1rem;
    color: var(--grey-400);
  }

  @media (min-width: 992px) {
    .skills {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.1rem;
    }
    h5 {
      text-align: center;
    }
  }
`
export default SkillsContainer
