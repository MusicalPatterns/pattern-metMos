import { ComputeValidations, Validation, Validations } from '@musical-patterns/spec'
import { as, Fraction, isUndefined, Ordinal } from '@musical-patterns/utilities'
import { computeTreeRatio } from '../material'
import { GENERATOR_COMPLEMENT_LIMIT } from './constants'
import { MetMosSpec, MetMosSpecs } from './types'

const validateIsotope: (validateIsotopeParams: { isotope: Ordinal, metal: Ordinal }) => Validation =
    ({ isotope, metal }: { isotope: Ordinal, metal: Ordinal }): Validation => {
        if (isotope >= metal) {
            return 'must be less than the metal index in order for weight to be > 1'
        }

        return undefined
    }

const validateRatio: (ratio: Fraction) => Validation =
    (ratio: Fraction): Validation => {
        if (as.number(ratio) > GENERATOR_COMPLEMENT_LIMIT && as.number(ratio) !== 1) {
            return 'must be <= 1/2 or 1/1'
        }

        if (isUndefined(computeTreeRatio(ratio))) {
            return 'must be in the top ten levels of the tree'
        }

        return undefined
    }

const computeValidations: ComputeValidations<MetMosSpecs> =
    ({ isotope, metal, ratio }: MetMosSpecs): Validations<MetMosSpecs> => {
        const validations: Validations<MetMosSpecs> = {}

        const isotopeValidation: Validation = validateIsotope({ isotope, metal })
        if (!isUndefined(isotopeValidation)) {
            validations[ MetMosSpec.ISOTOPE ] = isotopeValidation
        }

        const ratioValidation: Validation = validateRatio(ratio)
        if (!isUndefined(ratioValidation)) {
            validations[ MetMosSpec.RATIO ] = ratioValidation
        }

        return validations

    }

export {
    computeValidations,
}
