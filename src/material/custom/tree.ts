import {
    finalElement,
    INITIAL,
    NEXT,
    Ordinal,
    slice,
    THIRD,
    translateFromZeroIndexedToOneIndexed,
    use,
} from '@musical-patterns/utilities'
import { TR_0_1, TR_1_1, TR_1_2, TR_1_3 } from './constants'
import { computeLevel } from './level'
import { Tree, TreeLevel } from './types'

const computeTree: (targetLevel: Ordinal<Tree>) => TreeLevel[] =
    (targetLevel: Ordinal<Tree>): TreeLevel[] => {
        const tree: TreeLevel[] = [ [ TR_0_1 ], [ TR_1_1 ], [ TR_1_2 ], [ TR_1_3 ] ]

        if (targetLevel <= THIRD) {
            return slice(tree, INITIAL, translateFromZeroIndexedToOneIndexed(targetLevel))
        }

        for (let index: Ordinal<Tree> = THIRD; index < targetLevel; index = use.Cardinal(index, NEXT)) {
            tree.push(computeLevel(finalElement(tree)))
        }

        return tree
    }

export {
    computeTree,
}
