import { styled } from 'styled-components'

const Skills = ({ area, skills }) => {
  const { sk1, sk2, sk3, sk4, sk5, sk6 } = skills
  return (
    <Wrapper>
      <div className="card">
        <header>
          <div>
            <h2>{area}</h2>
          </div>
        </header>
        <div>
          <div className="text-center">
            <h5>{sk1}</h5>
            <h5>{sk2}</h5>
            <h5>{sk3}</h5>
            <h5>{sk4}</h5>
            <h5>{sk5}</h5>
            <h5>{sk6}</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  margin-bottom: 5rem;
  margin-left: 4rem;
  margin-right: 4rem;

  header {
    background-color: var(--primary-500);
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
  }
  h2 {
    letter-spacing: 0;
    color: var(--white);
    font-weight: 700;
    text-transform: upperCase;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }

  h5 {
    letter-spacing: 0;
    color: var(--grey-500);
    font-weight: 600;
  }

  .card {
    text-align: center;
  }

  .card:hover {
    box-shadow: var(--shadow-4);
    transform: scale(1.02);
  }
`

export default Skills
