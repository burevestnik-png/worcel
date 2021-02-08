import { MathOperationEnum } from '../services'

class Expression {
    private _result: string

    constructor(
        private readonly _type: MathOperationEnum,
        private _operands: number[],
        private _raw: string,
    ) {}

    set result(value: string) {
        this._result = value
    }

    get result(): string {
        return this._result
    }

    get type(): MathOperationEnum {
        return this._type
    }

    get operands(): number[] {
        return this._operands
    }

    get raw(): string {
        return this._raw
    }
}

export { Expression }
