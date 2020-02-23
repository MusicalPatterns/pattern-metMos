// tslint:disable no-duplicate-string //

import {
    as,
    Cardinal,
    computeLength,
    every,
    indexJustBeyondFinalElement,
    INITIAL,
    repeat,
    sequence,
    slice,
    use,
} from '@musical-patterns/utilities'
import {
    computeEquivalencePatterns,
    computeMetallicValue,
    EquivalencePattern,
    Lean,
    Parent,
    PeriodicEquivalencePatternSegment,
    Tree,
    _1_MU_1,
    _1_MU_2,
    _1_MU_3,
    _2_MU_2,
    _2_MU_3,
    _3_MU_3,
} from '../../../../../src/indexForTest'

describe('equivalence patterns - given a target level and list of means and/or isotopes, gives all unique equivalence patterns for the resultant generators', (): void => {
    const repeatEnoughTimes: Cardinal<EquivalencePattern> = as.Cardinal<EquivalencePattern>(9)

    const expectToEqualSoFar: <T>(actual: T[], expected: T[]) => void =
        <T>(actual: T[], expected: T[]): void => {
            expect(actual)
                .toEqual(slice(expected, INITIAL, indexJustBeyondFinalElement(actual)))
        }

    const expectTreeDeepEnoughToProveEquivalencePatternCompletion:
        (equivalencePatterns: EquivalencePattern[], expectedPeriodicEquivalencePatternSegment: PeriodicEquivalencePatternSegment) => void =
        (equivalencePatterns: EquivalencePattern[], expectedPeriodicEquivalencePatternSegment: PeriodicEquivalencePatternSegment): void => {
            expect(every(
                equivalencePatterns,
                (equivalencePattern: EquivalencePattern): boolean =>
                    computeLength(equivalencePattern) > computeLength(expectedPeriodicEquivalencePatternSegment),
            ))
                .toBeTrue()
        }

    describe('golden mean', (): void => {
        let equivalencePatterns: EquivalencePattern[]
        const expectedPeriodicEquivalencePatternSegment: PeriodicEquivalencePatternSegment = as.Cycle([
            { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_1) },
            { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_1) },
        ])

        beforeAll((): void => {
            equivalencePatterns = computeEquivalencePatterns(
                as.Ordinal<Tree>(5),
                [ _1_MU_1 ].map(as.Scalar),
            )

            expectTreeDeepEnoughToProveEquivalencePatternCompletion(
                equivalencePatterns,
                expectedPeriodicEquivalencePatternSegment,
            )
        })

        it('has two possible equivalence patterns', (): void => {
            expect(computeLength(equivalencePatterns))
                .toBe(as.Cardinal<EquivalencePattern[]>(2))
        })

        it('has one equivalence pattern for each mean and isotope which begins with parentward & the lesser parent (in the interval 0/1 to 1/1)', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(0)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_1) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })

        it('has one equivalence pattern for each remaining entry point to the periodic segment', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(1)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_1) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(1),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })
    })

    describe('silver mean and isotopes', (): void => {
        let equivalencePatterns: EquivalencePattern[]
        const expectedPeriodicEquivalencePatternSegment: PeriodicEquivalencePatternSegment = as.Cycle([
            { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_2) },
            { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_2_MU_2) },
            { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_2) },
            { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_2_MU_2) },
        ])
        beforeAll((): void => {
            equivalencePatterns = computeEquivalencePatterns(
                as.Ordinal<Tree>(7),
                [ _2_MU_2, _1_MU_2 ].map(as.Scalar),
            )

            expectTreeDeepEnoughToProveEquivalencePatternCompletion(
                equivalencePatterns,
                expectedPeriodicEquivalencePatternSegment,
            )
        })

        it('has five possible equivalence patterns', (): void => {
            expect(computeLength(equivalencePatterns))
                .toBe(as.Cardinal<EquivalencePattern[]>(5))
        })

        it('has one equivalence pattern for each mean and isotope which begins with parentward & the lesser parent (in the interval 0/1 to 1/1)', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(0)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_2_MU_2) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(1)),
                sequence(
                    [],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })

        it('has one equivalence pattern for each remaining entry point to the periodic segment', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(2)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_2) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(1),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(3)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_2) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(3),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(4)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_2_MU_2) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(2),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })
    })

    describe('bronze mean and isotopes', (): void => {
        let equivalencePatterns: EquivalencePattern[]
        const expectedPeriodicEquivalencePatternSegment: PeriodicEquivalencePatternSegment = as.Cycle([
            { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_2_MU_3) },
            { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_3) },
            { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_3_MU_3) },
            { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_2_MU_3) },
            { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_3) },
            { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_3_MU_3) },
        ])
        beforeAll((): void => {
            equivalencePatterns = computeEquivalencePatterns(
                as.Ordinal<Tree>(9),
                [ _3_MU_3, _2_MU_3, _1_MU_3 ].map(as.Scalar),
            )

            expectTreeDeepEnoughToProveEquivalencePatternCompletion(
                equivalencePatterns,
                expectedPeriodicEquivalencePatternSegment,
            )
        })

        it('has eight possible equivalence patterns', (): void => {
            expect(computeLength(equivalencePatterns))
                .toBe(as.Cardinal<EquivalencePattern[]>(8))
        })

        it('has one equivalence pattern for each mean and isotope which begins with parentward & the lesser parent (in the interval 0/1 to 1/1)', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(0)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_3_MU_3) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(1)),
                sequence(
                    [],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(2)),
                sequence(
                    [],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(5),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })

        it('has one equivalence pattern for each remaining entry point to the periodic segment', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(3)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_2_MU_3) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(2),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(4)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_3) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(1),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(5)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_2_MU_3) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(5),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(6)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_3) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(4),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(7)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_3_MU_3) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(3),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })
    })

    describe('fourth metallic mean and isotopes', (): void => {
        let equivalencePatterns: EquivalencePattern[]
        const _4_MU_4: number = computeMetallicValue({ metalIndex: as.Ordinal(4) })
        const _3_MU_4: number = _4_MU_4 - 1
        const _2_MU_4: number = _3_MU_4 - 1
        const _1_MU_4: number = _2_MU_4 - 1
        const expectedPeriodicEquivalencePatternSegment: PeriodicEquivalencePatternSegment = as.Cycle([
            { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_3_MU_4) },
            { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_2_MU_4) },
            { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_4) },
            { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_4_MU_4) },
            { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_3_MU_4) },
            { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_2_MU_4) },
            { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_4) },
            { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_4_MU_4) },
        ])
        beforeAll((): void => {
            equivalencePatterns = computeEquivalencePatterns(
                as.Ordinal<Tree>(11),
                [ _4_MU_4, _3_MU_4, _2_MU_4, _1_MU_4 ].map(as.Scalar),
            )

            expectTreeDeepEnoughToProveEquivalencePatternCompletion(
                equivalencePatterns,
                expectedPeriodicEquivalencePatternSegment,
            )
        })

        it('has 11 possible equivalence patterns', (): void => {
            expect(computeLength(equivalencePatterns))
                .toBe(as.Cardinal<EquivalencePattern[]>(11))
        })

        it('has one equivalence pattern for each mean and isotope which begins with parentward & the lesser parent (in the interval 0/1 to 1/1)', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(0)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.LESSER, weight: as.Scalar(_4_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(1)),
                sequence(
                    [ ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(0),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(2)),
                sequence(
                    [ ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(7),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(3)),
                sequence(
                    [ ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(6),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })

        it('has one equivalence pattern for each remaining entry point to the periodic segment', (): void => {
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(4)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_3_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(3),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(5)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_2_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(2),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(6)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.LESSER, weight: as.Scalar(_1_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(1),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(7)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_3_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(7),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(8)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_2_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(6),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(9)),
                sequence(
                    [ { lean: Lean.CHILDWARD, parent: Parent.GREATER, weight: as.Scalar(_1_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(5),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
            expectToEqualSoFar(
                use.Ordinal(equivalencePatterns, as.Ordinal<EquivalencePattern[]>(10)),
                sequence(
                    [ { lean: Lean.PARENTWARD, parent: Parent.GREATER, weight: as.Scalar(_4_MU_4) } ],
                    repeat(
                        use.Cardinal(
                            expectedPeriodicEquivalencePatternSegment,
                            as.Cardinal<PeriodicEquivalencePatternSegment>(4),
                        ),
                        repeatEnoughTimes,
                    ),
                ),
            )
        })
    })
})
