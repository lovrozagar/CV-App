import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { StyledInput } from './styled/styledInputs'

function NameTitle({ firstOrLast }) {
  const defaultName = useMemo(() => [{ first: 'Ninja', last: 'Ninjito' }], [])
  const [fullName, setFullName] = useState(defaultName[0])
  const [onEdit, setOnEdit] = useState(false)
  const [width, setWidth] = useState('0px')
  const nameRef = useRef(null)

  useEffect(() => {
    if ((!fullName.first.length || !fullName.last.length) && !onEdit) {
      setFullName(defaultName[0])
    }
  }, [fullName, defaultName, onEdit])

  useLayoutEffect(() => {
    if (nameRef.current) {
      setWidth(`${nameRef.current.offsetWidth}px`)
    }
  }, [onEdit, nameRef])

  function handleEdit() {
    setOnEdit(true)
  }

  function handleBlur() {
    setOnEdit(false)
  }

  function handleValueChange(e, firstOrLast) {
    setFullName({ ...fullName, [firstOrLast]: e.target.value })
  }

  return (
    <div className='name-container'>
      {onEdit ? (
        <NameInput
          firstOrLast={firstOrLast}
          defaultValue={fullName[firstOrLast]}
          onBlur={handleBlur}
          onChange={(e) => handleValueChange(e, `${firstOrLast}`)}
          width={width}
          nameRef={nameRef}
        />
      ) : (
        <NameView
          firstOrLast={firstOrLast}
          fullName={fullName}
          onClick={handleEdit}
          onFocus={handleEdit}
          nameRef={nameRef}
        />
      )}
    </div>
  )
}

function NameInput({ firstOrLast, onBlur, onChange, width, defaultValue }) {
  return (
    <StyledInput
      autoFocus
      defaultValue={defaultValue}
      label={`${firstOrLast} name`}
      onBlur={onBlur}
      onChange={onChange}
      inputProps={{
        minLength: 3,
        maxLength: 10,
      }}
      sx={{
        height: '1rem',
        minWidth: '100px',
        width: width,
      }}
    />
  )
}

function NameView({ firstOrLast, fullName, onClick, onFocus, nameRef }) {
  return (
    <h2
      className={`name ${firstOrLast}-name`}
      tabIndex={0}
      onClick={onClick}
      onFocus={onFocus}
      ref={nameRef}
    >
      {fullName[firstOrLast]}
    </h2>
  )
}

export default NameTitle
export { NameInput, NameView }
