import { as, asRational } from '@musical-patterns/utilities'
import { computeTree, Tree, TreeRatio, TR_0_1, TR_1_1, TR_1_2, TR_1_3 } from '../../../../src/indexForTest'

describe('tree', (): void => {
    const TR_1_4: TreeRatio = {
        parentGreater: TR_1_3,
        parentLesser: TR_0_1,
        value: asRational(1, 4),
    }
    const TR_2_5: TreeRatio = {
        parentGreater: TR_1_2,
        parentLesser: TR_1_3,
        value: asRational(2, 5),
    }
    const TR_1_5: TreeRatio = {
        parentGreater: TR_1_4,
        parentLesser: TR_0_1,
        value: asRational(1, 5),
    }
    const TR_2_7: TreeRatio = {
        parentGreater: TR_1_3,
        parentLesser: TR_1_4,
        value: asRational(2, 7),
    }
    const TR_3_8: TreeRatio = {
        parentGreater: TR_2_5,
        parentLesser: TR_1_3,
        value: asRational(3, 8),
    }
    const TR_3_7: TreeRatio = {
        parentGreater: TR_1_2,
        parentLesser: TR_2_5,
        value: asRational(3, 7),
    }

    describe('level 0', (): void => {
        it('contains only 0/1', (): void => {
            expect(computeTree(as.Ordinal<Tree>(0)))
                .toEqual([
                    [
                        TR_0_1,
                    ],
                ])
        })
    })

    describe('level 1', (): void => {
        it('introduces 1/1', (): void => {
            expect(computeTree(as.Ordinal<Tree>(1)))
                .toEqual([
                    [
                        TR_0_1,
                    ],
                    [
                        TR_1_1,
                    ],
                ])
        })
    })

    describe('level 2', (): void => {
        it('introduces 1/2', (): void => {
            expect(computeTree(as.Ordinal<Tree>(2)))
                .toEqual([
                    [
                        TR_0_1,
                    ],
                    [
                        TR_1_1,
                    ],
                    [
                        TR_1_2,
                    ],
                ])
        })
    })

    describe('level 3', (): void => {
        it('introduces 1/3', (): void => {
            expect(computeTree(as.Ordinal<Tree>(3)))
                .toEqual([
                    [
                        TR_0_1,
                    ],
                    [
                        TR_1_1,
                    ],
                    [
                        TR_1_2,
                    ],
                    [
                        TR_1_3,
                    ],
                ])
        })
    })

    describe('level 4', (): void => {
        it('introduces 1/4 and 2/5', (): void => {
            expect(computeTree(as.Ordinal<Tree>(4)))
                .toEqual([
                    [
                        TR_0_1,
                    ],
                    [
                        TR_1_1,
                    ],
                    [
                        TR_1_2,
                    ],
                    [
                        TR_1_3,
                    ],
                    [
                        TR_1_4,
                        TR_2_5,
                    ],
                ])
        })
    })

    describe('level 5', (): void => {
        it('introduces 1/5, 2/7, 3/8, and 3/7', (): void => {
            expect(computeTree(as.Ordinal<Tree>(5)))
                .toEqual([
                    [
                        TR_0_1,
                    ],
                    [
                        TR_1_1,
                    ],
                    [
                        TR_1_2,
                    ],
                    [
                        TR_1_3,
                    ],
                    [
                        TR_1_4,
                        TR_2_5,
                    ],
                    [
                        TR_1_5,
                        TR_2_7,
                        TR_3_8,
                        TR_3_7,
                    ],
                ])
        })
    })
})
