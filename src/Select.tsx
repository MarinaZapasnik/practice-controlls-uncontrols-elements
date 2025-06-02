
type SelectProps = {
    value: any
    onClick: (value: any) => void
}

export const Select = ({value, onClick}: SelectProps) => {
    return (
        <div>
            <select>
                    <option value={'1'}>one</option>
                    <option value={'2'}>two</option>
                    <option value={'3'}>three</option>
                    <option value={'4'}>four</option>
            </select>
        </div>
    )
}