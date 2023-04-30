import { useState } from "react"
import Welcome from "./Welcome.tsx"
import Comment from "./Comment.tsx"
import Clock from "./Clock.tsx"

function App() {
  const [name, setName] = useState("Casio")
  return (
    <>
      <div>
        <Welcome name="Nguyên" age={30} />
        <Comment author="Tuấn" text="dep trai" date></Comment>
        <button onClick={() => setName("Apple")}>Change name</button>
        <Clock name={name} />
      </div>
    </>
  )
}

export default App
