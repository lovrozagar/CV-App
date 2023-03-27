import Header from './components/Header'
import './App.scss'
import './styles/Paper.scss'

function App() {
  return <Paper />
}

function Paper() {
  return (
    <main
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
}

export default App
