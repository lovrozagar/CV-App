import React, { useState } from 'react'
import InlineList from '../InlineList'
import Section from '../Section'

function Skills() {
  const [skills, setSkills] = useState(['HTML', 'CSS'])
  const [onEdit, setOnEdit] = useState([true])

  return (
    <Section name='Skills'>
      <InlineList skills={skills} />
    </Section>
  )
}

export default Skills
