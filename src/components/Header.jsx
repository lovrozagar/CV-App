import React, { useState } from 'react'
import NameTitle from './NameTitle'
import NameTitleEdit from './NameTitleEdit'
import '../styles/Header.scss'

function Header() {
  const [firstName, setFirstName] = useState('Lovro')
  const [lastName, setLastName] = useState('Zagar')
  const [isFirstOnEdit, setIsFirstOnEdit] = useState(false)
  const [isLastOnEdit, setIsLastOnEdit] = useState(false)
  const [firstInputWidth, setFirstInputWidth] = useState(0)
  const [lastInputWidth, setLastInputWidth] = useState(0)

  // function
  function handleEdit(event, firstOrLast) {
    if (firstOrLast === 'first') {
      setIsLastOnEdit(false)
      setIsFirstOnEdit(!isFirstOnEdit)
      setFirstInputWidth(event.target.offsetWidth + 'px')
    } else {
      setIsFirstOnEdit(false)
      setIsLastOnEdit(!isLastOnEdit)
      setLastInputWidth(event.target.offsetWidth + 'px')
    }
  }

  function handleValueChange(event, firstOrLast) {
    if (firstOrLast === 'first') setFirstName(event.target.value)
    else setLastName(event.target.value)
  }

  function handleBlur(firstOrLast) {
    firstOrLast === 'first' ? setIsFirstOnEdit(false) : setIsLastOnEdit(false)
  }

  return (
    <header className='header'>
      {isFirstOnEdit ? (
        <NameTitleEdit
          currentName={firstName}
          firstOrLast={'first'}
          width={firstInputWidth}
          handleBlur={handleBlur}
          handleValueChange={handleValueChange}
        />
      ) : (
        <NameTitle
          currentName={firstName}
          firstOrLast={'first'}
          handleEdit={handleEdit}
        />
      )}
      {isLastOnEdit ? (
        <NameTitleEdit
          currentName={lastName}
          firstOrLast={'last'}
          width={lastInputWidth}
          handleBlur={handleBlur}
          handleValueChange={handleValueChange}
        />
      ) : (
        <NameTitle
          currentName={lastName}
          firstOrLast={'last'}
          handleEdit={handleEdit}
        />
      )}
    </header>
  )
}

export default Header
