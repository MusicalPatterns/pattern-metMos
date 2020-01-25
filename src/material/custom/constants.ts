// tslint:disable no-magic-numbers

import { as, asRational, Cardinal } from '@musical-patterns/utilities'
import { Tree, TreeRatio } from './types'

const MET_MOS_PRECISION: number = 14

const TR_0_1: TreeRatio = {
    parentGreater: undefined,
    parentLesser: undefined,
    value: asRational(0, 1),
}
const TR_1_1: TreeRatio = {
    parentGreater: undefined,
    parentLesser: TR_0_1,
    value: asRational(1, 1),
}
const TR_1_2: TreeRatio = {
    parentGreater: TR_1_1,
    parentLesser: TR_0_1,
    value: asRational(1, 2),
}
const TR_1_3: TreeRatio = {
    parentGreater: TR_1_2,
    parentLesser: TR_0_1,
    value: asRational(1, 3),
}

const _1_MU_1: number = 1.618033988749895
const _0_MU_1: number = 0.618033988749895
const _2_MU_2: number = 2.414213562373095
const _1_MU_2: number = 1.414213562373095
const _0_MU_2: number = 0.414213562373095
const _3_MU_3: number = 3.302775637731995
const _2_MU_3: number = 2.302775637731995
const _1_MU_3: number = 1.302775637731995
const _0_MU_3: number = 0.302775637731995

const MAX_LEVEL: Cardinal<Tree> = as.Cardinal<Tree>(10)

export {
    TR_0_1,
    TR_1_1,
    TR_1_2,
    TR_1_3,
    _1_MU_1,
    _0_MU_1,
    _2_MU_2,
    _1_MU_2,
    _0_MU_2,
    _3_MU_3,
    _2_MU_3,
    _1_MU_3,
    _0_MU_3,
    MET_MOS_PRECISION,
    MAX_LEVEL,
}
