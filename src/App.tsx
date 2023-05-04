import { useState } from "react"
import Welcome from "./Welcome.tsx"
import Comment from "./Comment.tsx"
import Clock from "./Clock.tsx"
import BareInput from "./BareInput.tsx"
import ProductList from "./ProductList/ProductList.tsx"
import Form from "./Form/Form.tsx"
import Calculator from "./Calculator/Calculator.tsx"

function App() {
  // const [name, setName] = useState("Casio")
  // const [visible, setVisible] = useState(true)

  return (
    <>
      <div>
        {/* <Welcome name="Nguyên" age={30} />
        <Comment author="Tuấn" text="dep trai" date></Comment>
        <button onClick={() => setName("Apple")}>Change name</button>
        <button onClick={() => setVisible(false)}>Hide Clock Component</button>
        {visible && <Clock name={name} />} */}
        {/* <BareInput type="password" value="100" className="input-control" onChange={() => {}} /> */}
        {/* <ProductList /> */}
        {/* <Form /> */}
        <Calculator />
      </div>
    </>
  )
}

export default App
