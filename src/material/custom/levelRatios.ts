// tslint:disable no-non-null-assertion

import { as, getDenominator, getNumerator, sum } from '@musical-patterns/utilities'
import { TreeLevel, TreeRatio } from './types'

const calculateLevel: (previousLevel: TreeLevel) => TreeLevel =
    (previousLevel: TreeLevel): TreeLevel => {
        const nextLevel: TreeLevel = []

        previousLevel.forEach((treeRatio: TreeRatio) => {
            const newLesserRatio: TreeRatio = {
                parentGreater: treeRatio,
                parentLesser: treeRatio.parentLesser,
                ratio: as.Fraction([
                    sum(getNumerator(treeRatio.ratio), getNumerator(treeRatio.parentLesser!.ratio)),
                    sum(getDenominator(treeRatio.ratio), getDenominator(treeRatio.parentLesser!.ratio)),
                ]),
            }
            const newGreaterRatio: TreeRatio = {
                parentGreater: treeRatio.parentGreater,
                parentLesser: treeRatio,
                ratio: as.Fraction([
                    sum(getNumerator(treeRatio.ratio), getNumerator(treeRatio.parentGreater!.ratio)),
                    sum(getDenominator(treeRatio.ratio), getDenominator(treeRatio.parentGreater!.ratio)),
                ]),
            }
            nextLevel.push(newLesserRatio)
            nextLevel.push(newGreaterRatio)
        })

        return nextLevel
    }

export {
    calculateLevel,
}
