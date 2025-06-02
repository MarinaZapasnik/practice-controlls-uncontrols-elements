
import './App.css'
import { ControlledCheckbox, ControlledInput, ControlledInputWithFixedValue, ControlledSelect, GetValueOfUncontrolledInputByButtonPress, TracckValueOfUncontrolledInput, UncontrolledInput } from './input'

function App() {
  

  return (
    <>
      <UncontrolledInput/>
      <TracckValueOfUncontrolledInput/>
      <GetValueOfUncontrolledInputByButtonPress/>
      <ControlledInputWithFixedValue/>
      <ControlledInput/>
      <ControlledCheckbox/>
      <ControlledSelect/>
    </>
  )
}

export default App
