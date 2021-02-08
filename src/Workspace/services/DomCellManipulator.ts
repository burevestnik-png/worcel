import { Cell, Expression } from '../domain'
import { findCellById } from '../state'

class DomCellManipulator {
    static updateCellValue(
        cells: Cell[],
        id: string,
        expression: Expression,
    ): void {
        findCellById(cells, id).ref.current.value = expression.result
    }

    static focusOutCell(cell: Cell): void {
        cell.ref.current.blur()
    }
}

export { DomCellManipulator }
