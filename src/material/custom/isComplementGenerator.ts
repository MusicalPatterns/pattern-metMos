import { as, deepEqual, Fraction, TWO } from '@musical-patterns/utilities'
import { Lean, Parent, TreeRatio } from './types'

const isComplementGenerator: (isExceptionParams: { lean: Lean, parent: Parent, ratio: Fraction }) => boolean =
    ({ lean, parent, ratio }: { lean: Lean, parent: Parent, ratio: Fraction }): boolean => {
        if (deepEqual(ratio, as.Fraction([ as.Numerator(1), as.Denominator(TWO) ])) && parent === Parent.GREATER) {
            return true
        }

        return deepEqual(ratio, as.Fraction([ as.Numerator(1), as.Denominator(1) ])) && lean === Lean.CHILDWARD
    }

export {
    isComplementGenerator,
}
