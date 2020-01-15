// tslint:disable no-non-null-assertion

import {
    as,
    Fraction,
    getDenominator,
    getNumerator,
    NormalScalar,
    quotient,
    sum,
    use,
} from '@musical-patterns/utilities'
import { CalculateGeneratorParams, Lean, Parent, TreeRatio } from './types'

const calculateGenerator: (calculateGeneratorParams: CalculateGeneratorParams) => NormalScalar =
    ({ weight, lean, parent, ratio }: CalculateGeneratorParams): NormalScalar => {
        const parentRatio: TreeRatio = parent === Parent.GREATER ? ratio.parentGreater! : ratio.parentLesser!

        let weightedRatio: Fraction
        let unweightedRatio: Fraction
        if (lean === Lean.PARENTWARD) {
            weightedRatio = parentRatio.value
            unweightedRatio = ratio.value
        }
        else {
            weightedRatio = ratio.value
            unweightedRatio = parentRatio.value
        }

        return as.NormalScalar(quotient(
            sum(
                use.Scalar(as.number(getNumerator(weightedRatio)), weight),
                as.number(getNumerator(unweightedRatio)),
            ),
            sum(
                use.Scalar(as.number(getDenominator(weightedRatio)), weight),
                as.number(getDenominator(unweightedRatio)),
            ),
        ))
    }

export {
    calculateGenerator,
}
