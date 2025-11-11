import { useState } from "react"

function Test() {
  function increment() {
    setCount(count + 1)
  }
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
} 

export default Test