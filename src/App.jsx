import { forwardRef, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import { Button } from '@mui/material'
import Header from './components/Header'
import './App.scss'
import './styles/Paper.scss'

function App() {
  function handleSave() {
    const element = document.getElementById('paper')
    window.print(element)
  }

  const componentRef = useComponentRef()

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button variant='contained' className='print-button'>
            GENERATE CV
          </Button>
        )}
        content={() => componentRef.current}
      />
      <Paper ref={componentRef} />
    </div>
  )
}

const Paper = forwardRef((props, ref) => {
  return (
    <main
      ref={ref}
      id='paper'
      className='paper'
      style={{
        margin: '0 auto',
        height: '297mm',
        width: '210mm',
        backgroundColor: 'white',
      }}
    >
      <Header />
    </main>
  )
})

function useComponentRef() {
  const componentRef = useRef()

  return componentRef
}

export default App
