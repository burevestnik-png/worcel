import { atom } from 'recoil'
import { Cell } from '../domain'

const CELLS_QUANTITY = 3

const initCells = (): Cell[] => {
    let cells: Cell[] = []

    Array.from({ length: CELLS_QUANTITY }, (v, k) => {
        cells.push(new Cell(''))
    })

    return cells
}

const cellState = atom({
    key: 'cellState',
    default: initCells(),
    dangerouslyAllowMutability: true,
})

const focusedCellState = atom({
    key: 'focusedCellState',
    default: undefined,
    dangerouslyAllowMutability: true,
})

export { cellState, focusedCellState }
