import { forwardRef, useState } from 'react'
import Header from './Header'
import Section from './Section'
import Dropdown from './Dropdown'
import uniqid from 'uniqid'

const Paper = forwardRef((props, ref) => {
  const [sections, setSections] = useState([])

  function handleSectionAdd(e) {
    setSections([...sections, { name: e.target.value, id: uniqid() }])
    console.log(sections)
  }

  return (
    <main
      ref={ref}
      id='paper'
      className='paper'
      style={{
        margin: '0 auto',
        minHeight: '295mm',
        maxWidth: '210mm',
        backgroundColor: 'white',
      }}
    >
      <Header className='header' />
      {sections.map((section) => (
        <Section name={section.name}></Section>
      ))}
      <Dropdown handleSectionAdd={handleSectionAdd}></Dropdown>
    </main>
  )
})

export default Paper
