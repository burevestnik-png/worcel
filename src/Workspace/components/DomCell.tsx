import {
    ChangeEvent,
    FC,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    useState,
} from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { cellState, focusedCellState, updateCellById } from '../state'
import { Cell, Expression } from '../domain'
import {
    CalculationService,
    DomCellManipulator,
    MovementService,
    Parser,
} from '../services'

type StyledInputProps = {
    readonly readOnly?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
    width: 100%;
    border-radius: 0;
    border: 1px solid black;
    border-bottom: none;
    border-right: none;

    &:focus {
        outline: none;
        border: 2px solid black;
        ${(props) =>
            props.readOnly
                ? `
                    text-indent: -9999em;
                    text-shadow : 9999em 0 0 #000;
                `
                : ''}
    }
`

type CellProps = {
    readonly cell: Cell
}

const DomCell: FC<CellProps> = ({ cell }) => {
    const [cells, setCellState] = useRecoilState(cellState)
    const [focusedCell, setFocusedCell] = useRecoilState(focusedCellState)
    const [readOnly, setReadOnlyMode] = useState(true)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCellState(updateCellById(cells, cell.id, event.target.value))
    }

    const onFocusIn = (event: FocusEvent) => {
        setFocusedCell(cell)
    }

    const onDoubleClick = (event: MouseEvent<HTMLInputElement>) => {
        setFocusedCell(cell)
        setReadOnlyMode(false)
    }

    const onFocusOut = (event: FocusEvent) => {
        setFocusedCell(null)
        setReadOnlyMode(true)
    }

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        setFocusedCell(cell)
        setReadOnlyMode(false)

        if (event.key === 'Enter') {
            // @ts-ignore
            const cellContent = event.target.value

            if (Parser.isExpression(cellContent)) {
                const expression: Expression = CalculationService.calculate(
                    cellContent,
                )
                setCellState(updateCellById(cells, cell.id, expression.result))
                DomCellManipulator.updateCellValue(cells, cell.id, expression)
                DomCellManipulator.focusOutCell(cell)
            }
            return
        }

        if (MovementService.isMovement(event)) {
            MovementService.handleMovement(event, focusedCell, cells)
            return
        }
    }

    return (
        <StyledInput
            readOnly={readOnly}
            defaultValue={cell.value}
            type="text"
            ref={cell.ref}
            onChange={onChange}
            onFocus={onFocusIn}
            onDoubleClick={onDoubleClick}
            onBlur={onFocusOut}
            onKeyDown={onKeyPress}
        />
    )
}

export { DomCell }
