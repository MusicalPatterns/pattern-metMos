import { as, deepEqual, TWO } from '@musical-patterns/utilities'
import { Lean, Parent, TreeRatio } from './types'

const isException: (isExceptionParams: { lean: Lean, parent: Parent, treeRatio: TreeRatio }) => boolean =
    ({ lean, parent, treeRatio }: { lean: Lean, parent: Parent, treeRatio: TreeRatio }): boolean => {
        if (
            deepEqual(
                treeRatio.value,
                as.Fraction([ as.Numerator(1), as.Denominator(TWO) ]),
            ) &&
            parent === Parent.GREATER
        ) {
            return true
        }

        if (
            deepEqual(
                treeRatio.value,
                as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
            ) &&
            lean === Lean.CHILDWARD
        ) {
            return true
        }

        return false
    }

export {
    isException,
}
