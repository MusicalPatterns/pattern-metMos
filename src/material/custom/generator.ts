import {
    as,
    Fraction,
    getDenominator,
    getNumerator,
    isUndefined,
    Maybe,
    NormalScalar,
    quotient,
    sum,
    use,
} from '@musical-patterns/utilities'
import { CalculateGeneratorParams, Lean, Parent, TreeRatio } from './types'

const calculateGenerator: (calculateGeneratorParams: CalculateGeneratorParams) => Maybe<NormalScalar> =
    ({ weight, lean, parent, treeRatio }: CalculateGeneratorParams): Maybe<NormalScalar> => {
        const parentTreeRatio: Maybe<TreeRatio> =
            parent === Parent.GREATER ? treeRatio.parentGreater : treeRatio.parentLesser

        if (isUndefined(parentTreeRatio)) {
            return undefined
        }

        let weightedRatio: Fraction
        let unweightedRatio: Fraction
        if (lean === Lean.PARENTWARD) {
            weightedRatio = parentTreeRatio.value
            unweightedRatio = treeRatio.value
        }
        else {
            weightedRatio = treeRatio.value
            unweightedRatio = parentTreeRatio.value
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
