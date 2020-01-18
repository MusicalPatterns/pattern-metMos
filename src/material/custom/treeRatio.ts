import {
    as,
    computeLength,
    deepEqual,
    finalElement,
    Fraction,
    isUndefined,
    Maybe,
    TEN,
} from '@musical-patterns/utilities'
import { TR_0_1, TR_1_1, TR_1_2, TR_1_3 } from './constants'
import { computeLevel } from './level'
import { Tree, TreeLevel, TreeRatio } from './types'

const computeTreeRatio: (ratio: Fraction) => TreeRatio =
    (ratio: Fraction): TreeRatio => {
        let treeRatio: Maybe<TreeRatio> = undefined
        const tree: TreeLevel[] = [ [ TR_0_1 ], [ TR_1_1 ], [ TR_1_2 ], [ TR_1_3 ] ]

        while (isUndefined(treeRatio)) {
            if (computeLength(tree) < as.Cardinal<Tree>(TEN)) {
                tree.push(computeLevel(finalElement(tree)))
            }
            else {
                throw new Error('Could not find ratio in first 10 levels of tree.')
            }

            tree.forEach((level: TreeLevel) => {
                level.forEach((tr: TreeRatio) => {
                    if (deepEqual(tr.value, ratio)) {
                        treeRatio = tr
                    }
                })
            })
        }

        return treeRatio
    }

export {
    computeTreeRatio,
}
