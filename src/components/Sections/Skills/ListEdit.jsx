import React from 'react'
import { StyledInput } from '../../styled/styledInputs'
import { GridContainer } from '../../styled/GridContainer'
import { Button } from '@mui/material'
import uniqid from 'uniqid'

function ListEdit({ skills, setSkills, onEditEnd, removeEmptySkills }) {
  const ninjaSkills = [
    'fruit slicing',
    'stealth',
    'shuriken throwing',
    'sneaking',
    'sword-fighting',
    'poisoning',
    'climbing',
    'trap-setting',
    'disguise',
    'acrobatics',
    'meditation',
    'mind control',
    'water walking',
    'blowgun mastery',
    'grappling',
    'invisibility',
    'explosives handling',
    'rope use',
    'diving',
    'teleportation',
    'fire manipulation',
  ]

  function handleAdd() {
    setSkills([...skills, { name: '', id: uniqid() }])
  }

  function handleDone() {
    removeEmptySkills()
    onEditEnd()
  }

  function handleSkillChange(e, id) {
    setSkills((prevSkills) =>
      prevSkills.map((skill) => {
        return skill.id === id ? { ...skill, name: e.target.value } : skill
      })
    )
  }

  return (
    <div>
      <GridContainer>
        {skills.map((skill, index) => (
          <StyledInput
            key={skill.id}
            defaultValue={skill.name}
            placeholder={`E.g. ${
              ninjaSkills.length > index ? ninjaSkills[index] : 'other skill'
            }`}
            onChange={(e) => handleSkillChange(e, skill.id)}
          />
        ))}
      </GridContainer>
      <Button onClick={handleAdd}>Add skill</Button>
      <Button onClick={handleDone}>Done</Button>
    </div>
  )
}

export default ListEdit
