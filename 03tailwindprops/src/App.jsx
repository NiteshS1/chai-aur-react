import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: 'nitesh',
    age: '22'
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="chaiaurreact" btnText="Click Me"/>
      <Card userName="chaiaurcode"/>
    </>
  )
}

export default App
