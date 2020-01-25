import { asFraction, deepEqual, Fraction, TWO } from '@musical-patterns/utilities'
import { Lean, Parent } from '../../../types'

const isComplementGenerator: (isExceptionParams: { lean: Lean, parent: Parent, ratio: Fraction }) => boolean =
    ({ lean, parent, ratio }: { lean: Lean, parent: Parent, ratio: Fraction }): boolean => {
        if (deepEqual(ratio, asFraction(1, TWO)) && parent === Parent.GREATER) {
            return true
        }

        return deepEqual(ratio, asFraction(1, 1)) && lean === Lean.CHILDWARD
    }

export {
    isComplementGenerator,
}
