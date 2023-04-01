import { StyledInput } from '../../styled/styledInputs'
import { GridContainer } from '../../styled/GridContainer'
import { Button } from '@mui/material'
import { StyledDeleteButton } from '../../styled/StyledButtons'
import StyledOffPrintContainer from '../../styled/Containers/StyledOffPrintContainer'
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

  function handleDelete(id) {
    if (skills.length === 1)
      setSkills(skills.map((skill) => ({ ...skill, name: '' })))
    else setSkills(skills.filter((skill) => skill.id !== id))
    console.log(skills)
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
          <StyledOffPrintContainer key={skill.id}>
            <StyledInput
              value={skill.name}
              placeholder={`E.g. ${
                ninjaSkills.length > index ? ninjaSkills[index] : 'other skill'
              }`}
              onChange={(e) => handleSkillChange(e, skill.id)}
            />
            <StyledDeleteButton
              onDelete={() => handleDelete(skill.id)}
            ></StyledDeleteButton>
          </StyledOffPrintContainer>
        ))}
      </GridContainer>
      <Button onClick={handleAdd}>Add skill</Button>
      <Button onClick={handleDone}>Done</Button>
    </div>
  )
}

export default ListEdit
