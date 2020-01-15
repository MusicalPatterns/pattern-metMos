import { as, Ordinal } from '@musical-patterns/utilities'
import {
    _1_MU_1,
    _1_MU_2,
    _1_MU_3,
    _2_MU_2,
    _2_MU_3,
    _3_MU_3,
    calculateIntroductions,
    Tree,
} from '../../../../src/indexForTest'

describe('introductions - given a target level and list of means and/or isotopes, gives the count of unique generators introduced per level', () => {
    const testLevelIndex: Ordinal<Tree> = as.Ordinal<Tree>(7)

    it('gives the correct results for the golden mean', () => {
        expect(calculateIntroductions(testLevelIndex, [ _1_MU_1 ].map(as.Scalar)))
            .toEqual([ 0, 1, 1, 2, 4, 8, 16, 32 ].map(as.Cardinal))
    })

    it('gives the correct results for the silver mean and its isotope (individually)', () => {
        expect(calculateIntroductions(testLevelIndex, [ _2_MU_2 ].map(as.Scalar)))
            .toEqual([ 0, 1, 2, 3, 6, 12, 24, 48 ].map(as.Cardinal))
        expect(calculateIntroductions(testLevelIndex, [ _1_MU_2 ].map(as.Scalar)))
            .toEqual([ 0, 1, 2, 3, 6, 12, 24, 48 ].map(as.Cardinal))
    })

    it('gives the correct results for the bronze mean and its isotopes (individually)', () => {
        expect(calculateIntroductions(testLevelIndex, [ _3_MU_3 ].map(as.Scalar)))
            .toEqual([ 0, 1, 2, 4, 7, 14, 28, 56 ].map(as.Cardinal))
        expect(calculateIntroductions(testLevelIndex, [ _2_MU_3 ].map(as.Scalar)))
            .toEqual([ 0, 1, 2, 4, 7, 14, 28, 56 ].map(as.Cardinal))
        expect(calculateIntroductions(testLevelIndex, [ _1_MU_3 ].map(as.Scalar)))
            .toEqual([ 0, 1, 2, 4, 7, 14, 28, 56 ].map(as.Cardinal))
    })

    it('works for the silver mean and its isotope (together)', () => {
        expect(calculateIntroductions(testLevelIndex, [ _2_MU_2, _1_MU_2 ].map(as.Scalar)))
            .toEqual([ 0, 2, 2, 4, 8, 16, 32, 64 ].map(as.Cardinal))
    })

    it('works for the bronze mean and its isotopes (together', () => {
        expect(calculateIntroductions(testLevelIndex, [ _3_MU_3, _2_MU_3, _1_MU_3 ].map(as.Scalar)))
            .toEqual([ 0, 3, 3, 6, 12, 24, 48, 96 ].map(as.Cardinal))
    })
})
