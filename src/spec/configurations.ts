import {
    computeBasicOptionedConstraintFromEnum,
    InputType,
    RangedInputType,
    standardConfigurations,
} from '@musical-patterns/spec'
import { Lean, Parent } from '../types'
import { specsOrder } from './orders'
import { MetMosConfigurations, MetMosSpec } from './types'

const configurations: MetMosConfigurations = {
    ...standardConfigurations,
    [ MetMosSpec.ITERATIONS ]: {
        constraint: {
            integer: true,
            min: 1,
            required: true,
        },
        description: 'what ring of the MOS scale horogram to use; how many times to iterate to the next MOS scale',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.ITERATIONS),
    },
    [ MetMosSpec.PERIOD ]: {
        constraint: {
            excludeMin: true,
            min: 1,
            required: true,
        },
        description: 'what frequency ratio the MOS scale will be applied to i.e. repeat at (default is the octave)',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.PERIOD),
    },
    [ MetMosSpec.RATIO ]: {
        arrayedConstraint: {
            maxLength: 2,
            minLength: 2,
            required: true,
        },
        constraint: {
            integer: true,
            min: 1,
            required: true,
        },
        description: 'on the Stern-Brocot tree, what ratio will be the child ratio',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
        order: specsOrder.indexOf(MetMosSpec.RATIO),
    },
    [ MetMosSpec.LEAN ]: {
        constraint: computeBasicOptionedConstraintFromEnum(Lean, { required: true }),
        description: 'whether the weight will be applied to the parent or child ratio',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(MetMosSpec.LEAN),
    },
    [ MetMosSpec.PARENT ]: {
        constraint: computeBasicOptionedConstraintFromEnum(Parent, { required: true }),
        description: 'whether the parent ratio will be the one lesser than the child, or greater than it',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(MetMosSpec.PARENT),
    },
    [ MetMosSpec.METAL ]: {
        constraint: {
            integer: true,
            min: 1,
            required: true,
        },
        description: 'which metal to use (1=golden, 2=silver, etc.)',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.METAL),
    },
    [ MetMosSpec.ISOTOPE ]: {
        constraint: {
            integer: true,
            min: 0,
            required: true,
        },
        description: 'which isotope of the metal to use (0=mean itself, 1=first isotope, etc.)',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.ISOTOPE),
    },
}

export {
    configurations,
}
