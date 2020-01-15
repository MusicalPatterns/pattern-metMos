import { Fraction, Maybe, Scalar } from '@musical-patterns/utilities'

interface TreeRatio {
    parentGreater: Maybe<TreeRatio>,
    parentLesser: Maybe<TreeRatio>,
    value: Fraction,
}

type TreeLevel = TreeRatio[]

type Tree = TreeLevel[]

enum Lean {
    CHILDWARD = 'CHILDWARD',
    PARENTWARD = 'PARENTWARD',
}

enum Parent {
    GREATER = 'GREATER',
    LESSER = 'LESSER',
}

interface CalculateGeneratorParams {
    lean: Lean,
    parent: Parent,
    ratio: TreeRatio,
    weight: Scalar,
}

export {
    TreeRatio,
    TreeLevel,
    Tree,
    CalculateGeneratorParams,
    Parent,
    Lean,
}
