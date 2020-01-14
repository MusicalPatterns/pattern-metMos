import { Fraction, Integer, Maybe, Ordinal } from '@musical-patterns/utilities'

interface TreeRatio {
    level: Ordinal,
    parentGreater: Maybe<TreeRatio>,
    parentLesser: Maybe<TreeRatio>,
    ratio: Fraction,
}

export {
    TreeRatio,
}
