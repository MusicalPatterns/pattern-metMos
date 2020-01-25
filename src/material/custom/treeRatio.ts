import { computeLength, deepEqual, finalElement, Fraction, isUndefined, Maybe } from '@musical-patterns/utilities'
import { MAX_LEVEL, TR_0_1, TR_1_1, TR_1_2, TR_1_3 } from './constants'
import { computeLevel } from './level'
import { TreeLevel, TreeRatio } from './types'

const computeTreeRatio: (ratio: Fraction) => Maybe<TreeRatio> =
    (ratio: Fraction): Maybe<TreeRatio> => {
        let treeRatio: Maybe<TreeRatio> = undefined
        const tree: TreeLevel[] = [ [ TR_0_1 ], [ TR_1_1 ], [ TR_1_2 ], [ TR_1_3 ] ]

        while (isUndefined(treeRatio)) {
            if (computeLength(tree) < MAX_LEVEL) {
                tree.push(computeLevel(finalElement(tree)))
            }
            else {
                break
            }

            tree.forEach((level: TreeLevel) => {
                level.forEach((potentialTreeRatio: TreeRatio) => {
                    if (deepEqual(potentialTreeRatio.value, ratio)) {
                        treeRatio = potentialTreeRatio
                    }
                })
            })
        }

        return treeRatio
    }

export {
    computeTreeRatio,
}
