import { Cell } from '../domain'

export const findCellById = (cells: Cell[], id: string): Cell => {
    return cells.find((cell) => cell.id === id)
}

export const findCellIndexById = (cells: Cell[], id: string): number => {
    return cells.indexOf(findCellById(cells, id))
}

export const updateCellById = (
    cells: Cell[],
    id: string,
    value: string,
): Cell[] => {
    findCellById(cells, id).value = value
    return cells
}
