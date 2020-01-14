import { as, INCREMENT, ONE, Ordinal, range, use } from '@musical-patterns/utilities'
import { calculateLevelRatios } from './levelRatios'
import { TreeRatio } from './types'

const calculateTree: (targetLevel: Ordinal) => TreeRatio[] =
    (targetLevel: Ordinal): TreeRatio[] => {
        const tree: TreeRatio[] = [
            {
                level: as.Ordinal(1),
                parentGreater: undefined,
                parentLesser: undefined,
                ratio: as.Fraction([ as.Numerator(0), as.Denominator(1) ]),
            },
            {
                level: as.Ordinal(1),
                parentGreater: undefined,
                parentLesser: undefined,
                ratio: as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
            },
        ]

        range(ONE, use.Cardinal(targetLevel, INCREMENT))
            .map(as.Ordinal)
            .forEach((levelIndex: Ordinal) => {
                const newRatios: TreeRatio[] = calculateLevelRatios(tree, levelIndex)

                newRatios.forEach((newRatio: TreeRatio) => {
                    tree.push(newRatio)
                })
            })

        return tree
    }

export {
    calculateTree,
}
