import React, { useEffect, useMemo, useState } from 'react'
import InlineList from './InlineList'
import ListEdit from './ListEdit'
import uniqid from 'uniqid'

function Skills({ onEdit, onEditStart, onEditEnd }) {
  const defaultSkills = useMemo(
    () => [
      { name: 'Sneaking', id: uniqid() },
      { name: 'Sword fighting', id: uniqid() },
      { name: 'Fruit slicing', id: uniqid() },
    ],
    []
  )

  const [skills, setSkills] = useState(defaultSkills)

  useEffect(() => {
    if (skills.length === 0) {
      setSkills(defaultSkills)
    }
  }, [skills, defaultSkills])

  function removeEmptySkills() {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.name.trim()))
  }

  return (
    <div>
      {onEdit ? (
        <ListEdit
          skills={skills}
          setSkills={setSkills}
          onEditEnd={onEditEnd}
          removeEmptySkills={removeEmptySkills}
        />
      ) : (
        <InlineList skills={skills} onEditStart={onEditStart} />
      )}
    </div>
  )
}

export default Skills
