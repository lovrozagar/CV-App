import React, { useState } from 'react'
import NameTitle from './NameTitle'
import Profession from './Profession'
import '../styles/Header.scss'

function Header() {
  const [firstName, setFirstName] = useState('Forename')
  const [lastName, setLastName] = useState('Surname')
  const [profession, setProfession] = useState('Profession')
  const [isFirstOnEdit, setIsFirstOnEdit] = useState(false)
  const [isLastOnEdit, setIsLastOnEdit] = useState(false)
  const [isProfessionOnEdit, setIsProfessionOnEdit] = useState(false)
  const [firstInputWidth, setFirstInputWidth] = useState(0)
  const [lastInputWidth, setLastInputWidth] = useState(0)
  const [professionWidth, setProfessionWidth] = useState(0)

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
      <div className='title'>
        <NameTitle
          currentName={firstName}
          firstOrLast={'first'}
          width={firstInputWidth}
          isOnEdit={isFirstOnEdit}
          handleEdit={handleEdit}
          handleBlur={handleBlur}
          handleValueChange={handleValueChange}
        />
        <NameTitle
          currentName={lastName}
          firstOrLast={'second'}
          width={lastInputWidth}
          isOnEdit={isLastOnEdit}
          handleEdit={handleEdit}
          handleBlur={handleBlur}
          handleValueChange={handleValueChange}
        />
      </div>
      <Profession
        profession={profession}
        setProfession={setProfession}
        isProfessionOnEdit={isProfessionOnEdit}
        setIsProfessionOnEdit={setIsProfessionOnEdit}
        professionWidth={professionWidth}
        setProfessionWidth={setProfessionWidth}
      />
    </header>
  )
}

export default Header
