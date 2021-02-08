import { KeyboardEvent } from 'react'
import { Cell } from '../domain'
import { findCellIndexById } from '../state'
import { DomCellManipulator } from './DomCellManipulator'

const CELLS_WIDTH = 5

enum MoveDirectionEnum {
    ARROW_UP = 'ArrowUp',
    ARROW_DOWN = 'ArrowDown',
    ARROW_LEFT = 'ArrowLeft',
    ARROW_RIGHT = 'ArrowRight',
}

class MovementService {
    static isMovement({ key }: KeyboardEvent<HTMLInputElement>): boolean {
        return (
            key === MoveDirectionEnum.ARROW_LEFT ||
            key === MoveDirectionEnum.ARROW_RIGHT ||
            key === MoveDirectionEnum.ARROW_UP ||
            key === MoveDirectionEnum.ARROW_DOWN
        )
    }

    static handleMovement(
        { key }: KeyboardEvent<HTMLInputElement>,
        focusedCell: Cell,
        cells: Cell[],
    ): void {
        switch (key) {
            case MoveDirectionEnum.ARROW_LEFT:
                DomCellManipulator.focusOutCell(focusedCell)
                this.focusInCellByIndex(focusedCell, cells, 1, 'left')
                break
            case MoveDirectionEnum.ARROW_RIGHT:
                DomCellManipulator.focusOutCell(focusedCell)
                this.focusInCellByIndex(focusedCell, cells, 1, 'right')
                break
            case MoveDirectionEnum.ARROW_DOWN:
                DomCellManipulator.focusOutCell(focusedCell)
                this.focusInCellByIndex(
                    focusedCell,
                    cells,
                    CELLS_WIDTH,
                    'right',
                )
                break
            case MoveDirectionEnum.ARROW_UP:
                DomCellManipulator.focusOutCell(focusedCell)
                this.focusInCellByIndex(focusedCell, cells, CELLS_WIDTH, 'left')
                break
            default:
                break
        }
    }

    private static focusInCellByIndex(
        currentCell: Cell,
        cells: Cell[],
        offset: number,
        mode: 'left' | 'right',
    ): void {
        const calculatedOffset = mode === 'left' ? -offset : offset
        const cellIndex = findCellIndexById(cells, currentCell.id)
        const cellQuantity = cells.length

        if (
            cellIndex + calculatedOffset < 0 ||
            cellIndex + calculatedOffset >= cellQuantity
        ) {
            currentCell.ref.current.focus()
            return
        }

        cells[
            findCellIndexById(cells, currentCell.id) + calculatedOffset
        ].ref.current.focus()
    }
}

export { MovementService }
