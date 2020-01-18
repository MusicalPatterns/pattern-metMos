import { Cycle, Fraction, Maybe, NormalScalar, Ordinal, Scalar } from '@musical-patterns/utilities'

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

interface RatioOptions {
    lean: Lean,
    parent: Parent,
    weight: Scalar,
}

interface CalculateGeneratorParams extends RatioOptions {
    treeRatio: TreeRatio,
}

interface DoesIntroduceParams extends CalculateGeneratorParams {
    generators: Generator[],
    levelIndex: Ordinal<Tree>,
}

interface Equivalence extends RatioOptions {
    ratio: Fraction,
}

interface Generator {
    equivalences: Equivalence[],
    value: NormalScalar,
}

type EquivalencePattern = RatioOptions[]

type PeriodicEquivalencePatternSegment = Cycle<RatioOptions>

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
    RatioOptions,
    EquivalencePattern,
    PeriodicEquivalencePatternSegment,
}
