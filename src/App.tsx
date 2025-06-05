
import { useState } from 'react'
import './App.css'
import { ControlledCheckbox, ControlledInput, ControlledInputWithFixedValue, ControlledSelect, GetValueOfUncontrolledInputByButtonPress, TracckValueOfUncontrolledInput, UncontrolledInput } from './input'
import { Select } from './Select'

type SelectItemProps = {
  title: string
  value: string
}

function App() {

  const items: SelectItemProps[]  = [
    {value: '1', title: 'firstItem'},
    {value: '2', title: 'secondtItem'},
    {value: '3', title: 'thirdItem'},
    {value: '4', title: 'foursItem'},
    {value: '5', title: 'fivesItem'},
  ]

  const [value, setValue] = useState<string>('1')
  
 

  return (
    <>
      <UncontrolledInput/>
      <TracckValueOfUncontrolledInput/>
      <GetValueOfUncontrolledInputByButtonPress/>
      <ControlledInputWithFixedValue/>
      <ControlledInput/>
      <ControlledCheckbox/>
      <ControlledSelect/>
      <Select onChange={(findedValue) => setValue(findedValue)} items={items} value={value}/>
    </>
  )
}

export default App
