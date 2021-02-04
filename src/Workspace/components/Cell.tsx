import { FC, Key } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    border-radius: 0;
    border: 1px solid black;
    border-bottom: none;
    border-right: none;

    &:focus {
        outline: none;
    }
`

type CellProps = {
    readonly key: Key
    readonly initialValue?: string
}

const Cell: FC<CellProps> = ({ key, initialValue }) => {
    return <StyledInput key={key} value={initialValue} type="text" />
}

export { Cell }
