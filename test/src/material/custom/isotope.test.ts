import { as } from '@musical-patterns/utilities'
import { _0_MU_1, _0_MU_2, _1_MU_1, _1_MU_2, _2_MU_2, computeIsotope } from '../../../../src/indexForTest'

describe('compute isotope', () => {
    it('given a metal index and an isotope index, returns the correct value', () => {
        expect(computeIsotope({ metalIndex: as.Ordinal(1), isotopeIndex: as.Ordinal(0) }))
            .toBeCloseTo(_1_MU_1)
        expect(computeIsotope({ metalIndex: as.Ordinal(1), isotopeIndex: as.Ordinal(1) }))
            .toBeCloseTo(_0_MU_1)

        expect(computeIsotope({ metalIndex: as.Ordinal(2), isotopeIndex: as.Ordinal(0) }))
            .toBeCloseTo(_2_MU_2)
        expect(computeIsotope({ metalIndex: as.Ordinal(2), isotopeIndex: as.Ordinal(1) }))
            .toBeCloseTo(_1_MU_2)
        expect(computeIsotope({ metalIndex: as.Ordinal(2), isotopeIndex: as.Ordinal(2) }))
            .toBeCloseTo(_0_MU_2)
    })
})
