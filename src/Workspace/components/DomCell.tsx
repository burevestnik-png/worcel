import { ChangeEvent, FC, FocusEvent, KeyboardEvent, Ref } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import {
    cellState,
    findCellIndexById,
    focusedCellState,
    updateCellById,
} from '../state'
import { Cell } from '../domain'
import { MovementService } from '../services'

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
        if (event.key === 'Enter') {
            cell.ref.current.blur()
            return
        }

        if (MovementService.isMovement(event)) {
            MovementService.handleMovement(event, focusedCell, cells)
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
