import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { StyledInput } from './styled/styledInputs'

function Profession() {
  const defaultProfession = 'Professional Ninja'
  const [profession, setProfession] = useState(defaultProfession)
  const [onEdit, setOnEdit] = useState(false)
  const [width, setWidth] = useState('0px')
  const nameRef = useRef(null)

  useEffect(() => {
    if (profession.length === 0 && !onEdit) {
      setProfession(defaultProfession)
    }
  }, [profession, defaultProfession, onEdit])

  useLayoutEffect(() => {
    if (nameRef.current) {
      setWidth(`${nameRef.current.offsetWidth + 50}px`)
    }
  }, [onEdit, nameRef])

  function handleEdit() {
    setOnEdit(true)
  }

  function handleChange(e) {
    setProfession(e.target.value)
  }

  function handleBlur() {
    setOnEdit(false)
  }

  return (
    <div className='profession'>
      {onEdit ? (
        <ProfessionInput
          label='profession'
          profession={profession}
          onChange={handleChange}
          onBlur={handleBlur}
          width={width}
          nameRef={nameRef}
        />
      ) : (
        <ProfessionView
          className='profession-container'
          profession={profession}
          tabIndex={0}
          onFocus={handleEdit}
          onClick={handleEdit}
          nameRef={nameRef}
        >
          {profession}
        </ProfessionView>
      )}
    </div>
  )
}

function ProfessionInput({ profession, label, width, onChange, onBlur }) {
  return (
    <div>
      <StyledInput
        autoFocus
        label={label}
        value={profession}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          minWidth: '200px',
          width: width,
        }}
      />
    </div>
  )
}

function ProfessionView({ profession, onFocus, onChange, nameRef }) {
  return (
    <div
      className='profession-container'
      tabIndex={0}
      onFocus={onFocus}
      onClick={onChange}
      ref={nameRef}
    >
      {profession}
    </div>
  )
}

export default Profession
export { ProfessionInput, ProfessionView }
