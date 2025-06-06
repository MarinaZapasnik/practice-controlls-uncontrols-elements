import { useReducer } from 'react'
//import { useState } from 'react'
import styles from './Select.module.css'

type SelectItemProps = {
    title: string
    value: string
}


type SelectProps = {
    value: string
    onChange: (value: string) => void
    items: SelectItemProps[]
}

type ActionProps = {
        type: string
    }

const TOGGLE_CONSTANT = 'TOGGLE_ITEMS'

export const Select = ({value, onChange, items}: SelectProps) => {

    
    const reducer = (state: boolean, action:ActionProps) => {
        if (action.type === TOGGLE_CONSTANT) {
            return !state 
        }
        return false
    }

    //const [active, setActive] = useState<boolean>(false)
    const [active, dispatch] = useReducer(reducer, false)


    const selectedItem = items.find(i => i.value === value)

    const toggleItems = () => {
        //setActive(!active)
        dispatch({ type: TOGGLE_CONSTANT})
    }
    
    const clickedItemHandler = (value: string) => {
        onChange(value)
        //setActive(false)
        dispatch({ type:''})
    }

    
    return (
        <div className={styles.selectsSector}>

            <div className={styles.selectSector}>
                <span className={styles.title}>Custom select</span>
                <h3 className={styles.selectValue}
                    onClick={toggleItems}
                >
                    {selectedItem && selectedItem.title}
                </h3>
                    { active &&
                        <div className={styles.selectItemsSection}>
                        { items.map(item => (
                                    <div 
                                        onClick={() => clickedItemHandler(item.value)}
                                        key={item.value}
                                    >
                                        {item.title}
                                    </div>
                                
                            )
                        )}
                    </div>
                    }
                    
            </div>

            <div className={styles.selectSector}>
                <span className={styles.title}>HTML select element</span>
                <select>
                    {items.map(item => {
                        return (
                            <option key={item.value}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
            </div>
            
        </div>
    )
}