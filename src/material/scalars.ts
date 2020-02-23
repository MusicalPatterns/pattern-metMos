import { as, Exponent, Frequency, Maybe, NormalScalar, Pitch, pow, Scalar } from '@musical-patterns/utilities'
import { MetMosSpecs } from '../spec'
import { computeGenerator, computeMetallicValue, computeMos, computeTreeRatio, TreeRatio } from './custom'

const computeMosScalars: (specs: MetMosSpecs) => Array<Scalar<Pitch>> =
    ({ lean, parent, ratio, iterations, period, metal, isotope }: MetMosSpecs): Array<Scalar<Pitch>> => {
        const weight: Scalar = as.Scalar(computeMetallicValue({ metalIndex: metal, isotopeIndex: isotope }))
        const treeRatio: Maybe<TreeRatio> = computeTreeRatio(ratio)
        if (!treeRatio) {
            return []
        }
        const generator: Maybe<NormalScalar> = computeGenerator({ lean, parent, weight, treeRatio })
        if (!generator) {
            return []
        }

        const mosExponents: Array<Exponent<Frequency>> = computeMos(generator, iterations)

        return mosExponents.map(
            (exponent: Exponent<Frequency>): Frequency =>
            pow(period, exponent))
            .map((result: Frequency): Scalar<Pitch> => as.Scalar<Pitch>(as.number(result)),
            )
    }

export {
    computeMosScalars,
}
