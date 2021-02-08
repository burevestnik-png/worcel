import { Expression } from '../domain'
import { Parser } from './Parser'

enum MathOperationEnum {
    SUM = 'sum',
}

class CalculationService {
    public static calculate(text: string): Expression {
        const expression = Parser.getExpressionType(text)

        switch (expression.type) {
            case MathOperationEnum.SUM:
                expression.result = this.calculateSum(expression.operands)
                return expression
        }
    }

    private static calculateSum(operands: number[]): string {
        return operands
            .reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0,
            )
            .toString()
    }
}

export { CalculationService, MathOperationEnum }
