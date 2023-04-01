import { StyledBox } from '../../styled/StyledContainers'
import { StyledUnorderedList } from '../../styled/StyledUnorderedList'

function InlineList({ skills, onEditStart }) {
  return (
    <StyledBox onClick={onEditStart} tabIndex='0' onEnter role='button'>
      <StyledUnorderedList>
        {skills.map((skill, index) => {
          return <li key={index}>{skill.name}</li>
        })}
      </StyledUnorderedList>
    </StyledBox>
  )
}

export default InlineList
