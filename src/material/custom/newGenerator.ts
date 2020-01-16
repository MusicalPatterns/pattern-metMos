import { arraySet, as, Fraction, isCloseTo, isUndefined, Maybe, NormalScalar } from '@musical-patterns/utilities'
import { MET_MOS_PRECISION } from './constants'
import { calculateGenerator } from './generator'
import { isComplementGenerator } from './isComplementGenerator'
import { DoesIntroduceParams, Equivalence, Generator } from './types'

const calculateNewGenerator: (doesIntroduceParams: DoesIntroduceParams) => void =
    ({ lean, parent, treeRatio, weight, generators, levelIndex }: DoesIntroduceParams): void => {
        const ratio: Fraction = treeRatio.value
        if (isComplementGenerator({ lean, ratio, parent })) {
            return
        }

        const equivalence: Equivalence = { lean, parent, ratio, weight }
        const newValue: Maybe<NormalScalar> = calculateGenerator({ lean, parent, treeRatio, weight })
        if (isUndefined(newValue)) {
            return
        }

        let foundEquivalentGenerator: boolean = false
        generators.forEach((generator: Generator) => {
            if (!foundEquivalentGenerator && isCloseTo(generator.value, newValue, MET_MOS_PRECISION)) {
                arraySet(generator.equivalences, as.Ordinal<Equivalence[]>(as.number(levelIndex)), equivalence)
                foundEquivalentGenerator = true
            }
        })
        if (!foundEquivalentGenerator) {
            const initialEquivalences: Equivalence[] = []
            arraySet(initialEquivalences, as.Ordinal<Equivalence[]>(as.number(levelIndex)), equivalence)

            generators.push({ value: newValue, equivalences: initialEquivalences })
        }
 }

export {
    calculateNewGenerator,
}
