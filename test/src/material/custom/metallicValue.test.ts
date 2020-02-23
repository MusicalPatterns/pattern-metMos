import { as } from '@musical-patterns/utilities'
import {
    computeMetallicValue,
    MET_MOS_PRECISION,
    _0_MU_1,
    _0_MU_2,
    _1_MU_1,
    _1_MU_2,
    _2_MU_2,
    _3_MU_3,
} from '../../../../src/indexForTest'

describe('compute metallic value', (): void => {
    it('gives the correct value of the nth metallic mean', (): void => {
        expect(computeMetallicValue({ metalIndex: as.Ordinal(1) }))
            .toBeCloseTo(_1_MU_1, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(2) }))
            .toBeCloseTo(_2_MU_2, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(3) }))
            .toBeCloseTo(_3_MU_3, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(4) }))
            .toBeCloseTo(4.23606797749979, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(5) }))
            .toBeCloseTo(5.19258240356725, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(6) }))
            .toBeCloseTo(6.16227766016838, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(7) }))
            .toBeCloseTo(7.14005494464026, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(8) }))
            .toBeCloseTo(8.12310562561766, MET_MOS_PRECISION)
    })

    it('given a metal index and an isotope index, returns the correct value', (): void => {
        expect(computeMetallicValue({ metalIndex: as.Ordinal(1), isotopeIndex: as.Ordinal(0) }))
            .toBeCloseTo(_1_MU_1, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(1), isotopeIndex: as.Ordinal(1) }))
            .toBeCloseTo(_0_MU_1, MET_MOS_PRECISION)

        expect(computeMetallicValue({ metalIndex: as.Ordinal(2), isotopeIndex: as.Ordinal(0) }))
            .toBeCloseTo(_2_MU_2, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(2), isotopeIndex: as.Ordinal(1) }))
            .toBeCloseTo(_1_MU_2, MET_MOS_PRECISION)
        expect(computeMetallicValue({ metalIndex: as.Ordinal(2), isotopeIndex: as.Ordinal(2) }))
            .toBeCloseTo(_0_MU_2, MET_MOS_PRECISION)
    })
})
