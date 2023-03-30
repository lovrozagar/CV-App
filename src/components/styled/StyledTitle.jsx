import styled from 'styled-components'
import NameTitle from '../NameTitle'

const NameText = styled(NameTitle)`
  h2 {
    font-size: 3rem;
  }
`
const NameTextNarrow = styled(NameText)`
  h2 {
    font-weight: 200;
  }
`

const NameTextNormal = styled(NameText)`
  h2 {
    font-weight: 400;
  }
`

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`
export { NameTextNarrow, NameTextNormal, StyledTitleContainer }
