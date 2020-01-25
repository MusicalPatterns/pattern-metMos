import { asRational, deepEqual, Rational, TWO } from '@musical-patterns/utilities'
import { Lean, Parent } from '../../../types'

const isComplementGenerator: (isExceptionParams: { lean: Lean, parent: Parent, ratio: Rational }) => boolean =
    ({ lean, parent, ratio }: { lean: Lean, parent: Parent, ratio: Rational }): boolean => {
        if (deepEqual(ratio, asRational(1, TWO)) && parent === Parent.GREATER) {
            return true
        }

        return deepEqual(ratio, asRational(1, 1)) && lean === Lean.CHILDWARD
    }

export {
    isComplementGenerator,
}
