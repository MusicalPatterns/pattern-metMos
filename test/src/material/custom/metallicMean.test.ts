import { as } from '@musical-patterns/utilities'
import { _1_MU_1, _2_MU_2, _3_MU_3, computeMetallicMean, MET_MOS_PRECISION } from '../../../../src/indexForTest'

describe('metallic mean', () => {
    it('gives the correct value of the nth metallic mean', () => {
        expect(computeMetallicMean(as.Ordinal(1)))
            .toBeCloseToTyped(_1_MU_1, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(2)))
            .toBeCloseToTyped(_2_MU_2, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(3)))
            .toBeCloseToTyped(_3_MU_3, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(4)))
            .toBeCloseToTyped(4.23606797749979, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(5)))
            .toBeCloseToTyped(5.19258240356725, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(6)))
            .toBeCloseToTyped(6.16227766016838, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(7)))
            .toBeCloseToTyped(7.14005494464026, MET_MOS_PRECISION)
        expect(computeMetallicMean(as.Ordinal(8)))
            .toBeCloseToTyped(8.12310562561766, MET_MOS_PRECISION)
    })
})
