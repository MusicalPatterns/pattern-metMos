// tslint:disable no-non-null-assertion

import { as, getDenominator, getNumerator, sum } from '@musical-patterns/utilities'
import { TreeLevel, TreeRatio } from './types'

const computeLevel: (previousLevel: TreeLevel) => TreeLevel =
    (previousLevel: TreeLevel): TreeLevel => {
        const nextLevel: TreeLevel = []

        previousLevel.forEach((treeRatio: TreeRatio) => {
            const newLesserTreeRatio: TreeRatio = {
                parentGreater: treeRatio,
                parentLesser: treeRatio.parentLesser,
                value: as.Rational([
                    sum(getNumerator(treeRatio.value), getNumerator(treeRatio.parentLesser!.value)),
                    sum(getDenominator(treeRatio.value), getDenominator(treeRatio.parentLesser!.value)),
                ]),
            }
            const newGreaterTreeRatio: TreeRatio = {
                parentGreater: treeRatio.parentGreater,
                parentLesser: treeRatio,
                value: as.Rational([
                    sum(getNumerator(treeRatio.value), getNumerator(treeRatio.parentGreater!.value)),
                    sum(getDenominator(treeRatio.value), getDenominator(treeRatio.parentGreater!.value)),
                ]),
            }
            nextLevel.push(newLesserTreeRatio)
            nextLevel.push(newGreaterTreeRatio)
        })

        return nextLevel
    }

export {
    computeLevel,
}
