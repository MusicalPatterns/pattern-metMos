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
                value: as.Fraction([
                    sum(getNumerator(treeRatio.value), getNumerator(treeRatio.parentLesser!.value)),
                    sum(getDenominator(treeRatio.value), getDenominator(treeRatio.parentLesser!.value)),
                ]),
            }
            const newGreaterRatio: TreeRatio = {
                parentGreater: treeRatio.parentGreater,
                parentLesser: treeRatio,
                value: as.Fraction([
                    sum(getNumerator(treeRatio.value), getNumerator(treeRatio.parentGreater!.value)),
                    sum(getDenominator(treeRatio.value), getDenominator(treeRatio.parentGreater!.value)),
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
