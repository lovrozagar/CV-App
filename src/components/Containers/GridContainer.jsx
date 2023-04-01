import styled from 'styled-components'

const GridContainer = styled.div`
  && {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
    & input {
      width: 100%;
    }
  }
`

export { GridContainer }
