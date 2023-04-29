import { useState } from "react"
import Welcome from "./Welcome.tsx"
import Comment from "./Comment.tsx"

function App() {
  return (
    <>
      <div>
        <Welcome name="Nguyên" age={30} />
        <Comment author="Tuấn" text="dep trai" date></Comment>
      </div>
    </>
  )
}

export default App
