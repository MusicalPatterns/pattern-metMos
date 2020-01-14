import { as } from '@musical-patterns/utilities'
import { calculateTree, TreeRatio } from '../../../../src/indexForTest'

describe('tree', () => {
    const TR_0_1: TreeRatio = {
        level: as.Ordinal(1),
        parentGreater: undefined,
        parentLesser: undefined,
        ratio: as.Fraction([ as.Numerator(0), as.Denominator(1) ]),
    }
    const TR_1_1: TreeRatio = {
        level: as.Ordinal(1),
        parentGreater: undefined,
        parentLesser: undefined,
        ratio: as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
    }
    const TR_1_2: TreeRatio = {
        level: as.Ordinal(2),
        parentGreater: TR_1_1,
        parentLesser: TR_0_1,
        ratio: as.Fraction([ as.Numerator(1), as.Denominator(2) ]),
    }
    const TR_1_3: TreeRatio = {
        level: as.Ordinal(3),
        parentGreater: TR_1_2,
        parentLesser: TR_0_1,
        ratio: as.Fraction([ as.Numerator(1), as.Denominator(3) ]),
    }
    const TR_1_4: TreeRatio = {
        level: as.Ordinal(4),
        parentGreater: TR_1_3,
        parentLesser: TR_0_1,
        ratio: as.Fraction([ as.Numerator(1), as.Denominator(4) ]),
    }
    const TR_2_5: TreeRatio = {
        level: as.Ordinal(4),
        parentGreater: TR_1_2,
        parentLesser: TR_1_3,
        ratio: as.Fraction([ as.Numerator(2), as.Denominator(5) ]),
    }
    const TR_1_5: TreeRatio = {
        level: as.Ordinal(5),
        parentGreater: TR_1_4,
        parentLesser: TR_0_1,
        ratio: as.Fraction([ as.Numerator(1), as.Denominator(5) ]),
    }
    const TR_2_7: TreeRatio = {
        level: as.Ordinal(5),
        parentGreater: TR_1_3,
        parentLesser: TR_1_4,
        ratio: as.Fraction([ as.Numerator(2), as.Denominator(7) ]),

    }
    const TR_3_8: TreeRatio = {
        level: as.Ordinal(5),
        parentGreater: TR_2_5,
        parentLesser: TR_1_3,
        ratio: as.Fraction([ as.Numerator(3), as.Denominator(8) ]),

    }
    const TR_3_7: TreeRatio = {
        level: as.Ordinal(5),
        parentGreater: TR_1_2,
        parentLesser: TR_2_5,
        ratio: as.Fraction([ as.Numerator(3), as.Denominator(7) ]),
    }

    describe('level 1', () => {
        it('contains only 0/1 and 1/1', () => {
            expect(calculateTree(as.Ordinal(1)))
                .toEqual([
                    TR_0_1,
                    TR_1_1,
                ])
        })
    })

    describe('level 2', () => {
        it('introduces 1/2', () => {
            expect(calculateTree(as.Ordinal(2)))
                .toEqual([
                    TR_0_1,
                    TR_1_1,
                    TR_1_2,
                ])
        })
    })

    describe('level 3', () => {
        it('introduces 1/3', () => {
            expect(calculateTree(as.Ordinal(3)))
                .toEqual([
                    TR_0_1,
                    TR_1_1,
                    TR_1_2,
                    TR_1_3,
                ])
        })
    })

    describe('level 4', () => {
        it('introduces 1/4 and 2/5', () => {
            expect(calculateTree(as.Ordinal(4)))
                .toEqual([
                    TR_0_1,
                    TR_1_1,
                    TR_1_2,
                    TR_1_3,
                    TR_1_4,
                    TR_2_5,
                ])
        })
    })

    describe('level 5', () => {
        it('introduces 1/5, 2/7, 3/8, and 3/7', () => {
            expect(calculateTree(as.Ordinal(5)))
                .toEqual([
                    TR_0_1,
                    TR_1_1,
                    TR_1_2,
                    TR_1_3,
                    TR_1_4,
                    TR_2_5,
                    TR_1_5,
                    TR_2_7,
                    TR_3_8,
                    TR_3_7,
                ])
        })
    })
})
