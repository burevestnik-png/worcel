import { ChangeEvent, FC, FocusEvent, KeyboardEvent, Ref } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { cellState, findCellById, focusedCellState } from '../state'
import { Cell } from '../domain'
import { findCellIndexById, updateCellById } from '../state/stateActions'

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
    readonly cell: Cell
}

const DomCell: FC<CellProps> = ({ cell }) => {
    const [cells, setCellState] = useRecoilState(cellState)
    const [focusedCell, setFocusedCell] = useRecoilState(focusedCellState)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCellState(updateCellById(cells, cell.id, event.target.value))
    }

    const onFocusIn = (event: FocusEvent) => {
        setFocusedCell(cell)
    }

    const onFocusOut = (event: FocusEvent) => {
        setFocusedCell(undefined)
    }

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key)
        if (event.key === 'Enter') {
            cell.ref.current.blur()
            return
        }

        if (event.key === 'ArrowLeft') {
            cell.ref.current.blur()
            cells[findCellIndexById(cells, cell.id) - 1].ref.current.focus()
            return
        }
    }

    return (
        <StyledInput
            defaultValue={cell.value}
            type="text"
            ref={cell.ref}
            onChange={onChange}
            onFocus={onFocusIn}
            onBlur={onFocusOut}
            onKeyDown={onKeyPress}
        />
    )
}

export { DomCell }
