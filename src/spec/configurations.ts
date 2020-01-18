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
        },
        description: '',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.ITERATIONS),
    },
    [ MetMosSpec.PERIOD ]: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        description: '',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.PERIOD),
    },
    [ MetMosSpec.RATIO ]: {
        arrayedConstraint: {
            maxLength: 2,
            minLength: 2,
        },
        constraint: {
            integer: true,
            min: 1,
        },
        description: '',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
        order: specsOrder.indexOf(MetMosSpec.RATIO),
    },
    [ MetMosSpec.LEAN ]: {
        constraint: computeBasicOptionedConstraintFromEnum(Lean),
        description: '',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(MetMosSpec.LEAN),
    },
    [ MetMosSpec.PARENT ]: {
        constraint: computeBasicOptionedConstraintFromEnum(Parent),
        description: '',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(MetMosSpec.PARENT),
    },
    [ MetMosSpec.METAL ]: {
        constraint: {
            integer: true,
            min: 1,
        },
        description: '',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.METAL),
    },
    [ MetMosSpec.ISOTOPE ]: {
        constraint: {
            integer: true,
            min: 0,
        },
        description: '',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(MetMosSpec.ISOTOPE),
    },
}

export {
    configurations,
}
