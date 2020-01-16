import { Fraction, Maybe, NormalScalar, Ordinal, Scalar } from '@musical-patterns/utilities'

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

interface IntervalOptions {
    lean: Lean,
    parent: Parent,
    weight: Scalar,
}

interface CalculateGeneratorParams extends IntervalOptions {
    treeRatio: TreeRatio,
}

interface DoesIntroduceParams extends CalculateGeneratorParams {
    generators: Generator[],
    levelIndex: Ordinal<Tree>,
}

interface Equivalence extends IntervalOptions {
    ratio: Fraction,
}

interface Generator {
    equivalences: Equivalence[],
    value: NormalScalar,
}

export {
    TreeRatio,
    TreeLevel,
    Tree,
    CalculateGeneratorParams,
    Parent,
    Lean,
    Generator,
    Equivalence,
    DoesIntroduceParams,
}
