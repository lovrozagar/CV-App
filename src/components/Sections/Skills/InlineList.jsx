import { StyledBox } from '../../styled/StyledContainers'
import { StyledUnorderedList } from '../../styled/StyledUnorderedList'
import StyledOffPrintContainer from '../../styled/Containers/StyledOffPrintContainer'

function InlineList({ skills, onEditStart }) {
  return (
    <StyledOffPrintContainer>
      <StyledBox onClick={onEditStart} tabIndex='0' onEnter role='button'>
        <StyledUnorderedList>
          {skills.map((skill, index) => {
            return <li key={index}>{skill.name}</li>
          })}
        </StyledUnorderedList>
      </StyledBox>
    </StyledOffPrintContainer>
  )
}

export default InlineList
