import { useState } from "react"

import Header from "./component/Header.jsx"
import UserInput from "./component/UserInput.jsx"
import Result from "./component/Result.jsx"



function App() {

  let [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 10,
    expectedReturn: 10010,
    duration: 10
  })

  const isValidInput = userInput.duration >=1
  // let [userInput, setUserInput] = useState({})
  
  
  const handleInput = (fieldName, value) => {
    console.log(value)
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [fieldName]: +value // + symbol cast string to number
      }
    })
  }

  return (
    <>
      <Header></Header>
      <UserInput handleInput={handleInput} userInput={userInput}></UserInput>
      {isValidInput && <Result userInput={userInput}></Result>}
      {!isValidInput && <p>Enter the correct number</p>}
    </>
  )
}

export default App
