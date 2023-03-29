import React, { useState } from 'react'
import NameTitle from './NameTitle'
import Profession from './Profession'
import '../styles/Header.scss'
import Links from './Links'
import uniqid from 'uniqid'

function Header() {
  const [profession, setProfession] = useState('Profession')
  const [isProfessionOnEdit, setIsProfessionOnEdit] = useState(false)
  const [professionWidth, setProfessionWidth] = useState(0)

  return (
    <header className='header'>
      <div className='title'>
        <NameTitle firstOrLast={'first'} />
        <NameTitle firstOrLast={'last'} />
      </div>
      <Profession
        profession={profession}
        setProfession={setProfession}
        isProfessionOnEdit={isProfessionOnEdit}
        setIsProfessionOnEdit={setIsProfessionOnEdit}
        professionWidth={professionWidth}
        setProfessionWidth={setProfessionWidth}
      />
      <Links />
    </header>
  )
}

export default Header
