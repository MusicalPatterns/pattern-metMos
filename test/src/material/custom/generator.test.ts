import { as, Maybe, NormalScalar } from '@musical-patterns/utilities'
import {
    computeGenerator,
    Lean,
    MET_MOS_PRECISION,
    Parent,
    TR_1_1,
    TR_1_3,
    _1_MU_1,
    _1_MU_2,
    _2_MU_2,
    _2_MU_3,
} from '../../../../src/indexForTest'

describe('compute generator', (): void => {
    it('given a tree ratio, relative parent size, lean, and weight, returns a generator', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            treeRatio: TR_1_1,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.381966011250105), MET_MOS_PRECISION)
    })

    it('works for a different metallic mean as weight', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            treeRatio: TR_1_1,
            weight: as.Scalar(_2_MU_2),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.292893218813453), MET_MOS_PRECISION)
    })

    it('works for an isotope as weight', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            treeRatio: TR_1_1,
            weight: as.Scalar(_1_MU_2),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.414213562373095), MET_MOS_PRECISION)
    })

    it('works for leaning childward', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.CHILDWARD,
            parent: Parent.LESSER,
            treeRatio: TR_1_1,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.618033988749895), MET_MOS_PRECISION)
    })

    it('works for another tree ratio', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.LESSER,
            treeRatio: TR_1_3,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.2165423646591), MET_MOS_PRECISION)
    })

    it('works for the greater parent', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.PARENTWARD,
            parent: Parent.GREATER,
            treeRatio: TR_1_3,
            weight: as.Scalar(_1_MU_1),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.419821271704536), MET_MOS_PRECISION)
    })

    it('works for all the other settings at once', (): void => {
        const result: Maybe<NormalScalar> = computeGenerator({
            lean: Lean.CHILDWARD,
            parent: Parent.GREATER,
            treeRatio: TR_1_3,
            weight: as.Scalar(_2_MU_3),
        })

        expect(result)
            .toBeCloseToTyped(as.NormalScalar(0.370751508101882), MET_MOS_PRECISION)
    })
})
