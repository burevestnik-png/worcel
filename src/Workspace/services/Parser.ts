import { Expression } from '../domain'
import { MathOperationEnum } from './CalculationService'

class RegexpContainer {
    public static readonly EXPRESSION = /^=[\d+\-/*]*/
    public static readonly SUM = /^=\d*\+\d*$/
    public static readonly SUM_OPERANDS = /\d+/g
}

class Parser {
    public static isExpression(input: string): boolean {
        return !!input.match(RegexpContainer.EXPRESSION)
    }

    public static getExpressionType(rawExpression: string): Expression {
        if (rawExpression.match(RegexpContainer.SUM)) {
            return new Expression(
                MathOperationEnum.SUM,
                this.parseSumOperands(rawExpression),
                rawExpression,
            )
        }
    }

    private static parseSumOperands(rawExpression: string): number[] {
        return rawExpression
            .match(RegexpContainer.SUM_OPERANDS)
            .map((value) => +value)
    }
}

export { Parser }
