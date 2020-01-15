import { as, NormalScalar } from '@musical-patterns/utilities'
import {
    _1_MU_1,
    _1_MU_2,
    _2_MU_2,
    _2_MU_3,
    calculateGenerator,
    Lean,
    Parent,
    TR_1_1,
    TR_1_3,
} from '../../../../src/indexForTest'

describe('calculate generator', () => {
    it('given a value, relative parent size, lean, and weight, returns a generator', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            ratio: TR_1_1,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.381966011250105), 15)
    })

    it('works for a different metallic mean as weight', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            ratio: TR_1_1,
            weight: as.Scalar(_2_MU_2),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.292893218813453), 15)
    })

    it('works for an isotope as weight', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            ratio: TR_1_1,
            weight: as.Scalar(_1_MU_2),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.414213562373095), 15)
    })

    it('works for leaning childward', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.CHILDWARD,
            parent: Parent.LESSER,
            ratio: TR_1_1,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.618033988749895), 15)
    })

    it('works for another ratio', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            ratio: TR_1_3,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.2165423646591), 15)
    })

    it('works for the greater parent', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.GREATER,
            ratio: TR_1_3,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.419821271704536), 15)
    })

    it('works for all the other settings at once', () => {
        const result: NormalScalar = calculateGenerator({
            lean: Lean.CHILDWARD,
            parent: Parent.GREATER,
            ratio: TR_1_3,
            weight: as.Scalar(_2_MU_3),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.370751508101882), 15)
    })
})
