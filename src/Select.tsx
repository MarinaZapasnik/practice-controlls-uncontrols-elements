import { useState } from 'react'
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

export const Select = ({value, onChange, items}: SelectProps) => {

    const [active, setActive] = useState<boolean>(false)
    const selectedItem = items.find(i => i.value === value)

    const toggleItems = () => {
        setActive(!active)
    }
    
    const clickedItemHandler = (value: string) => {
        onChange(value)
        setActive(false)
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