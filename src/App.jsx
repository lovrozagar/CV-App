import { useState } from 'react'
import './App.scss'
import './styles/Header.scss'

function App() {
  return <Paper />
}

function Paper() {
  return (
    <main
      style={{
        margin: '0 auto',
        height: '297mm',
        width: '210mm',
        backgroundColor: 'white',
      }}
      className='paper'
    >
      <Header />
    </main>
  )
}

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
        <input
          type='text'
          onChange={(event) => handleValueChange(event, 'first')}
          onBlur={() => handleBlur('first')}
          autoFocus
          placeholder={firstName}
          minLength={3}
          maxLength={10}
          style={{
            minHeight: '3rem',
            width: firstInputWidth,
          }}
        />
      ) : (
        <h2
          className='name first-name'
          tabIndex={0}
          onFocus={(event) => handleEdit(event, 'first')}
          onClick={(event) => handleEdit(event, 'first')}
        >
          {firstName}
        </h2>
      )}
      {isLastOnEdit ? (
        <input
          type='text'
          onChange={(event) => handleValueChange(event, 'last')}
          onBlur={() => handleBlur('last')}
          autoFocus
          placeholder={lastName}
          minLength={3}
          maxLength={10}
          style={{
            minHeight: '3rem',
            width: lastInputWidth,
          }}
        />
      ) : (
        <h2
          className='name last-name'
          tabIndex={0}
          onFocus={(event) => handleEdit(event, 'last')}
          onClick={(event) => handleEdit(event, 'last')}
        >
          {lastName}
        </h2>
      )}
    </header>
  )
}

export default App
