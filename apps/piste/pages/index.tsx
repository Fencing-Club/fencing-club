import { useState, useEffect } from "react"

export default function Web() {
  const [myVal, setMyVal] = useState<string>("true")

  useEffect(() => {
    if (myVal === "true") {
      setMyVal("false")
    }
  }, [myVal])

  return (
    <div>
      <h1>Web</h1>
    </div>
  )
}
