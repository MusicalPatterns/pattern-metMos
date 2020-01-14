// tslint:disable no-non-null-assertion

import { as, DECREMENT, getDenominator, getNumerator, Ordinal, sum, THREE, TWO, use } from '@musical-patterns/utilities'
import { TreeRatio } from './types'

const calculateLevelRatios: (tree: TreeRatio[], levelIndex: Ordinal) => TreeRatio[] =
    (tree: TreeRatio[], levelIndex: Ordinal): TreeRatio[] => {
        const newRatios: TreeRatio[] = []

        if (levelIndex === as.Ordinal(1)) {
            return []
        }

        if (levelIndex === as.Ordinal(TWO)) {
            newRatios.push({
                level: as.Ordinal(TWO),
                parentGreater: tree[ 1 ],
                parentLesser: tree[ 0 ],
                ratio: as.Fraction([ as.Numerator(1), as.Denominator(TWO) ]),
            })

            return newRatios
        }

        if (levelIndex === as.Ordinal(THREE)) {
            newRatios.push({
                level: as.Ordinal(THREE),
                parentGreater: tree[ TWO ],
                parentLesser: tree[ 0 ],
                ratio: as.Fraction([ as.Numerator(1), as.Denominator(THREE) ]),
            })

            return newRatios
        }

        const previousLevel: Ordinal = use.Cardinal(levelIndex, DECREMENT)
        tree.forEach((treeRatio: TreeRatio) => {
            if (treeRatio.level === previousLevel) {
                const newLesserRatio: TreeRatio = {
                    level: levelIndex,
                    parentGreater: treeRatio,
                    parentLesser: treeRatio.parentLesser,
                    ratio: as.Fraction([
                        sum(getNumerator(treeRatio.ratio), getNumerator(treeRatio.parentLesser!.ratio)),
                        sum(getDenominator(treeRatio.ratio), getDenominator(treeRatio.parentLesser!.ratio)),
                    ]),
                }
                const newGreaterRatio: TreeRatio = {
                    level: levelIndex,
                    parentGreater: treeRatio.parentGreater,
                    parentLesser: treeRatio,
                    ratio: as.Fraction([
                        sum(getNumerator(treeRatio.ratio), getNumerator(treeRatio.parentGreater!.ratio)),
                        sum(getDenominator(treeRatio.ratio), getDenominator(treeRatio.parentGreater!.ratio)),
                    ]),
                }
                newRatios.push(newLesserRatio)
                newRatios.push(newGreaterRatio)
            }
        })

        return newRatios
    }

export {
    calculateLevelRatios,
}
