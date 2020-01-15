import { Fraction, Maybe } from '@musical-patterns/utilities'

interface TreeRatio {
    parentGreater: Maybe<TreeRatio>,
    parentLesser: Maybe<TreeRatio>,
    ratio: Fraction,
}

type TreeLevel = TreeRatio[]

type Tree = TreeLevel[]

export {
    TreeRatio,
    TreeLevel,
    Tree,
}
