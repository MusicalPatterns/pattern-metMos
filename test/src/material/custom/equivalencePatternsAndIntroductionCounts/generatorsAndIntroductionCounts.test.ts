import { as, Ordinal, Scalar } from '@musical-patterns/utilities'
import {
    _1_MU_1,
    _1_MU_2,
    _1_MU_3,
    _2_MU_2,
    _2_MU_3,
    _3_MU_3,
    computeGeneratorsAndIntroductionCounts,
    computeMetallicValue,
    Tree,
} from '../../../../../src/indexForTest'

describe('introduction counts - given a target level and list of means and/or isotopes, gives the count of unique generators introduced per level', () => {
    const testLevelIndex: Ordinal<Tree> = as.Ordinal<Tree>(7)

    it('gives the correct results for the golden mean', () => {
        expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _1_MU_1 ].map(as.Scalar)).introductionCounts)
            .toEqual([ 0, 1, 1, 2, 4, 8, 16, 32 ].map(as.Cardinal))
    })

    describe('beyond golden means and their isotopes, individually', () => {
        it('gives the correct results for the silver mean and its isotope', () => {
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _2_MU_2 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 3, 6, 12, 24, 48 ].map(as.Cardinal))
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _1_MU_2 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 3, 6, 12, 24, 48 ].map(as.Cardinal))
        })

        it('gives the correct results for the bronze mean and its isotopes', () => {
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _3_MU_3 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 7, 14, 28, 56 ].map(as.Cardinal))
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _2_MU_3 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 7, 14, 28, 56 ].map(as.Cardinal))
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _1_MU_3 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 7, 14, 28, 56 ].map(as.Cardinal))
        })

        it('gives the correct results for the 4th metallic mean and its isotopes', () => {
            const fourthMetallicMean: number = computeMetallicValue({ metalIndex: as.Ordinal(4) })

            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ fourthMetallicMean ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 8, 15, 30, 60 ].map(as.Cardinal))
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ fourthMetallicMean - 1 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 8, 15, 30, 60 ].map(as.Cardinal))
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ fourthMetallicMean - 2 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 8, 15, 30, 60 ].map(as.Cardinal))
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ fourthMetallicMean - 3 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 1, 2, 4, 8, 15, 30, 60 ].map(as.Cardinal))
        })
    })

    describe('beyond golden means and their isotopes, together', () => {
        it('gives the correct results for the silver mean and its isotope', () => {
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _2_MU_2, _1_MU_2 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 2, 2, 4, 8, 16, 32, 64 ].map(as.Cardinal))
        })

        it('gives the correct results for the bronze mean and its isotopes', () => {
            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, [ _3_MU_3, _2_MU_3, _1_MU_3 ].map(as.Scalar)).introductionCounts)
                .toEqual([ 0, 3, 3, 6, 12, 24, 48, 96 ].map(as.Cardinal))
        })

        it('gives the correct results for the 4th metallic mean and its isotopes', () => {
            const fourthMetallicMean: number = computeMetallicValue({ metalIndex: as.Ordinal(4) })
            const weights: Scalar[] = [
                fourthMetallicMean,
                fourthMetallicMean - 1,
                fourthMetallicMean - 2,
                fourthMetallicMean - 3,
            ].map(as.Scalar)

            expect(computeGeneratorsAndIntroductionCounts(testLevelIndex, weights).introductionCounts)
                .toEqual([ 0, 4, 4, 8, 16, 32, 64, 128 ].map(as.Cardinal))
        })
    })
})
