import { Maybe, NormalScalar, Rational, Scalar } from '@musical-patterns/utilities'
import { Lean, Parent } from '../../types'

interface TreeRatio {
    parentGreater: Maybe<TreeRatio>,
    parentLesser: Maybe<TreeRatio>,
    value: Rational,
}

type TreeLevel = TreeRatio[]

type Tree = TreeLevel[]

interface RatioOptions {
    lean: Lean,
    parent: Parent,
    weight: Scalar,
}

interface ComputeGeneratorParams extends RatioOptions {
    treeRatio: TreeRatio,
}

interface Equivalence extends RatioOptions {
    ratio: Rational,
}

interface Generator {
    equivalences: Equivalence[],
    value: NormalScalar,
}

export {
    TreeRatio,
    TreeLevel,
    Tree,
    ComputeGeneratorParams,
    Generator,
    Equivalence,
    RatioOptions,
}
