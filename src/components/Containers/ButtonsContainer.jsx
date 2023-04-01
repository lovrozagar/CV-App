import styled from 'styled-components'

function ButtonsContainerUnstyled({ children, className }) {
  return <div className={className}>{children}</div>
}

const ButtonsContainer = styled(ButtonsContainerUnstyled)`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  width: 100%;
  margin-top: 0.8rem;
`

export default ButtonsContainer
