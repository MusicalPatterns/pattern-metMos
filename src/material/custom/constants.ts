import { as, THREE, TWO } from '@musical-patterns/utilities'
import { TreeRatio } from './types'

const TR_0_1: TreeRatio = {
    parentGreater: undefined,
    parentLesser: undefined,
    ratio: as.Fraction([ as.Numerator(0), as.Denominator(1) ]),
}
const TR_1_1: TreeRatio = {
    parentGreater: undefined,
    parentLesser: undefined,
    ratio: as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
}
const TR_1_2: TreeRatio = {
    parentGreater: TR_1_1,
    parentLesser: TR_0_1,
    ratio: as.Fraction([ as.Numerator(1), as.Denominator(TWO) ]),
}
const TR_1_3: TreeRatio = {
    parentGreater: TR_1_2,
    parentLesser: TR_0_1,
    ratio: as.Fraction([ as.Numerator(1), as.Denominator(THREE) ]),
}

export {
    TR_0_1,
    TR_1_1,
    TR_1_2,
    TR_1_3,
}
