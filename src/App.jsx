
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {

  const handleClick = () => {
    alert('Button Click')
  }

  const handleClick2 = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts Part 2</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Button Click</button>
      <button onClick={()=> handleClick2(5)}>Button Click 2</button>

    </>
  )
}

export default App
