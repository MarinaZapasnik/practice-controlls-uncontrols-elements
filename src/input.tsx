import { useRef, useState } from "react"

export type Props = {
    title: string
}

export const UncontrolledInput = () => {
    return (
        <div>
            <span>UncontrolledInput </span>
            <input />
        </div>
    );
};

export const TracckValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return (
        <div>
            <span>TracckValueOfUncontrolledInput </span>
            <input
                onChange={ (e) => {
                const actualValue = e.currentTarget.value
                setValue(actualValue)
            }}/> 
            <span>value: {value}</span>
        </div>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null) 

    return (
        <div>
            <span>GetValueOfUncontrolledInputByButtonPress </span>
            <input ref={inputRef}/> 
            <button
                onClick={() => {
                    const el = inputRef.current as HTMLInputElement
                    setValue(el.value)
                }}>save</button>

            <span> value: {value}</span>
        </div>
    )
}

export const ControlledInputWithFixedValue = () => {
    return (
        <div>
            <span>ControlledInputWithFixedValue </span>
            <input value={'Fixed Value'}/>
        </div>
    
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return (
        <div>
            <span>ControlledInput </span>
            <input 
                value={parentValue}
                onChange={(e) => {
                    const newValue = e.currentTarget.value
                    setParentValue(newValue)
                    alert(`${newValue}`)
                }}/>
        </div>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    return (
        <div>
            <span>ControlledCheckbox </span>
            <input 
                type="checkbox"
                
                checked={parentValue}
                onChange = {(e) => setParentValue(e.currentTarget.checked)}
                />
        </div>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    return (
        <div>
            <span>ControlledSelect </span>
            <select
                value={parentValue}
                onChange={(e) => {
                    const newValue = e.currentTarget.value
                    setParentValue(newValue)
                }}
                >
                    <option>none</option>
                    <option value={'1'}>one</option>
                    <option value={'2'}>two</option>
                    <option value={'3'}>three</option>
                    <option value={'4'}>four</option>
            </select>
        </div>
    )
}