import { KeyboardEvent } from 'react'
import { Cell } from '../domain'
import { findCellIndexById } from '../state'

const CELLS_WIDTH = 5

class MovementService {
    static isMovement({ key }: KeyboardEvent<HTMLInputElement>): boolean {
        return (
            key === 'ArrowLeft' ||
            key === 'ArrowRight' ||
            key === 'ArrowUp' ||
            key === 'ArrowDown'
        )
    }

    static handleMovement(
        { key }: KeyboardEvent<HTMLInputElement>,
        focusedCell: Cell,
        cells: Cell[],
    ): void {
        switch (key) {
            case 'ArrowLeft':
                this.focusOutCell(focusedCell)
                this.focusInCellByIndex(focusedCell, cells, 1, 'left')
                break
            case 'ArrowRight':
                this.focusOutCell(focusedCell)
                this.focusInCellByIndex(focusedCell, cells, 1, 'right')
                break
            case 'ArrowDown':
                this.focusOutCell(focusedCell)
                this.focusInCellByIndex(
                    focusedCell,
                    cells,
                    CELLS_WIDTH,
                    'right',
                )
                break
            case 'ArrowUp':
                this.focusOutCell(focusedCell)
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
        cells[
            findCellIndexById(cells, currentCell.id) + calculatedOffset
        ].ref.current.focus()
    }

    private static focusOutCell(cell: Cell): void {
        cell.ref.current.blur()
    }
}

export { MovementService }
