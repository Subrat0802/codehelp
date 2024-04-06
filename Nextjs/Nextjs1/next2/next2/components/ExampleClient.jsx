'use client'
import ExampleServer from "@/components/ExampleServer";

const ExampleClient = () => {
    console.log("Im client")
  return (
    <div>This is client component <ExampleServer /></div>
  )
}

export default ExampleClient