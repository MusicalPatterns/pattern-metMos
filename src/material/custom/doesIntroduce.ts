import { isCloseTo, isUndefined, Maybe, NormalScalar } from '@musical-patterns/utilities'
import { MET_MOS_PRECISION } from './constants'
import { calculateGenerator } from './generator'
import { isException } from './isException'
import { DoesIntroduceParams, Equivalence, Generator } from './types'

const doesIntroduce: (doesIntroduceParams: DoesIntroduceParams) => boolean =
    ({ lean, parent, treeRatio, weight, generators, levelIndex }: DoesIntroduceParams): boolean => {
        if (isException({ lean, treeRatio, parent })) {
            return false
        }

        const equivalence: Equivalence = { lean, parent, ratio: treeRatio.value, weight, levelIndex }
        const newValue: Maybe<NormalScalar> = calculateGenerator({ lean, parent, treeRatio, weight })
        if (isUndefined(newValue)) {
            return false
        }

        let foundEquivalentGenerator: boolean = false
        generators.forEach((generator: Generator) => {
            if (!foundEquivalentGenerator && isCloseTo(generator.value, newValue, MET_MOS_PRECISION)) {
                generator.equivalences.push(equivalence)
                foundEquivalentGenerator = true
            }
        })
        if (!foundEquivalentGenerator) {
            generators.push({ value: newValue, equivalences: [ equivalence ] })

            return true
        }

        return false
    }

export {
    doesIntroduce,
}
