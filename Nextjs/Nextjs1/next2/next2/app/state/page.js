'use client'
import { useState } from "react"

const page = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+10);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default page