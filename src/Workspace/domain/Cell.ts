import { v4 as uuid } from 'uuid'
import { createRef, RefObject } from 'react'

class Cell {
    private readonly _id: string
    private readonly _ref: RefObject<HTMLInputElement>

    constructor(private _value: string) {
        this._id = uuid()
        this._ref = createRef()
    }

    get ref(): RefObject<HTMLInputElement> {
        return this._ref
    }

    get value(): string {
        return this._value
    }

    set value(value: string) {
        this._value = value
    }

    get id(): string {
        return this._id
    }
}

export default Cell
