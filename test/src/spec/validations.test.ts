// tslint:disable no-duplicate-string

import { Validations } from '@musical-patterns/spec'
import { as, asRational } from '@musical-patterns/utilities'
import { computeValidations, initialSpecs, MetMosSpec, MetMosSpecs } from '../../../src/indexForTest'

describe('validations', () => {
    describe('isotopes must be > 1', () => {
        it('works for golden', () => {
            const specs: MetMosSpecs = {
                ...initialSpecs,
                [ MetMosSpec.ISOTOPE ]: as.Ordinal(1),
            }

            const validations: Validations<MetMosSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ MetMosSpec.ISOTOPE ]: 'must be less than the metal index in order for weight to be > 1',
                })
        })

        it('works for silver', () => {
            const specs: MetMosSpecs = {
                ...initialSpecs,
                [ MetMosSpec.ISOTOPE ]: as.Ordinal(2),
            }

            const validations: Validations<MetMosSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ MetMosSpec.ISOTOPE ]: 'must be less than the metal index in order for weight to be > 1',
                })
        })

        it('works for bronze', () => {
            const specs: MetMosSpecs = {
                ...initialSpecs,
                [ MetMosSpec.ISOTOPE ]: as.Ordinal(3),
            }

            const validations: Validations<MetMosSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ MetMosSpec.ISOTOPE ]: 'must be less than the metal index in order for weight to be > 1',
                })
        })
    })

    describe('ratio', () => {
        it('must be less than 1/2 (> 1/2 are complement generators)', () => {
            const specs: MetMosSpecs = {
                ...initialSpecs,
                [ MetMosSpec.RATIO ]: asRational(3, 5),
            }

            const validations: Validations<MetMosSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ MetMosSpec.RATIO ]: 'must be <= 1/2 or 1/1',
                })
        })

        it('must be found in the top ten levels of the tree', () => {
            const specs: MetMosSpecs = {
                ...initialSpecs,
                [ MetMosSpec.RATIO ]: asRational(1575, 4646),
            }

            const validations: Validations<MetMosSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    [ MetMosSpec.RATIO ]: 'must be in the top ten levels of the tree',
                })
        })
    })
})
