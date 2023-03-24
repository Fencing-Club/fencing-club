import { useState } from "react"

export default function Web() {
  const [myVal, setMyVal] = useState<string>("true")

  return (
    <div>
      <h1>Web</h1>
    </div>
  )
}
