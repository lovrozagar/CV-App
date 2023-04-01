import React from 'react'
import { StyledInput } from '../../styled/styledInputs'
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

  function randomNinjaSkill() {
    return ninjaSkills[Math.floor(Math.random() * ninjaSkills.length)]
  }

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
      <div>
        {skills.map((skill) => (
          <StyledInput
            key={skill.id}
            defaultValue={skill.name}
            placeholder={`E.g. ${randomNinjaSkill()}`}
            onChange={(e) => handleSkillChange(e, skill.id)}
          />
        ))}
      </div>
      <Button onClick={handleAdd}>Add skill</Button>
      <Button onClick={handleDone}>Done</Button>
    </div>
  )
}

export default ListEdit
