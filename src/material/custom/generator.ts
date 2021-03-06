import {
    as,
    getDenominator,
    getNumerator,
    isUndefined,
    Maybe,
    NormalScalar,
    quotient,
    Rational,
    sum,
    use,
} from '@musical-patterns/utilities'
import { Lean, Parent } from '../../types'
import { ComputeGeneratorParams, TreeRatio } from './types'

const computeGenerator: (computeGeneratorParams: ComputeGeneratorParams) => Maybe<NormalScalar> =
    ({ weight, lean, parent, treeRatio }: ComputeGeneratorParams): Maybe<NormalScalar> => {
        const parentTreeRatio: Maybe<TreeRatio> =
            parent === Parent.GREATER ? treeRatio.parentGreater : treeRatio.parentLesser

        if (isUndefined(parentTreeRatio)) {
            return undefined
        }

        let weightedRatio: Rational
        let unweightedRatio: Rational
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
    computeGenerator,
}
