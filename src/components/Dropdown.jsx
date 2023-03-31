import React from 'react'
import uniqid from 'uniqid'
import {
  StyledSelect,
  StyledOption,
  StyledOptionDefault,
  StyledFormControl,
} from './styled/StyledDropdown'

function Dropdown() {
  const sectionTypes = [
    'Summary',
    'Work experience',
    'Education',
    'Skills',
    'Courses',
    'Custom',
  ]

  const defaultValue = 'add-section'

  return (
    <StyledFormControl fullWidth>
      <StyledSelect value={defaultValue}>
        <StyledOptionDefault key={uniqid()} value={defaultValue}>
          + Add section
        </StyledOptionDefault>
        {sectionTypes.map((section) => (
          <StyledOption key={uniqid()} value={section}>
            {section}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledFormControl>
  )
}

export default Dropdown
