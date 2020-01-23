// tslint:disable max-file-line-count

import { Preset } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    ARGENT_TEMPERAMENT_PRESET_ISOTOPE,
    ARGENT_TEMPERAMENT_PRESET_ITERATIONS,
    ARGENT_TEMPERAMENT_PRESET_METAL,
    ARGENT_TEMPERAMENT_PRESET_RATIO,
    FIBONACCI_PRESET_ITERATIONS,
    FIBONACCI_PRESET_LEAN,
    FIBONACCI_PRESET_PARENT,
    FIBONACCI_PRESET_RATIO,
    GOLDEN_MEANTONE_PRESET_ITERATIONS,
    GOLDEN_MEANTONE_PRESET_PARENT,
    GOLDEN_MEANTONE_PRESET_RATIO,
    HANSON_PRESET_ITERATIONS,
    HANSON_PRESET_RATIO,
    IMAGINARY_PRESET_ISOTOPE,
    IMAGINARY_PRESET_METAL,
    IMAGINARY_PRESET_RATIO,
    LUCAS_PRESET_ITERATIONS,
    LUCAS_PRESET_LEAN,
    LUCAS_PRESET_RATIO,
    WILSON_PEPPER_FIFTH_PRESET_ITERATIONS,
    WILSON_PEPPER_FIFTH_PRESET_RATIO,
} from './constants'
import { initialSpecs } from './initials'
import { presetsOrder } from './orders'
import { MetMosPreset, MetMosSpec, MetMosSpecs } from './types'

const presets: ObjectOf<Preset<MetMosSpecs>> = {
    [ MetMosPreset.GOLDEN_MEANTONE ]: {
        description: 'whole step and half step in the ratio of φ; generator (1φ + 1)/(2φ + 3) ≈ 0.419821',
        order: presetsOrder.indexOf(MetMosPreset.GOLDEN_MEANTONE),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.ITERATIONS ]: GOLDEN_MEANTONE_PRESET_ITERATIONS,
            [ MetMosSpec.RATIO ]: GOLDEN_MEANTONE_PRESET_RATIO,
            [ MetMosSpec.PARENT ]: GOLDEN_MEANTONE_PRESET_PARENT,
        },
    },
    [ MetMosPreset.WILSON_PEPPER_FIFTH ]: {
        description: 'tone and the chromatic semitone in the ratio of φ; generator (2φ + 3)/(5φ + 7) ≈ 0.413254',
        order: presetsOrder.indexOf(MetMosPreset.WILSON_PEPPER_FIFTH),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.ITERATIONS ]: WILSON_PEPPER_FIFTH_PRESET_ITERATIONS,
            [ MetMosSpec.RATIO ]: WILSON_PEPPER_FIFTH_PRESET_RATIO,
        },
    },
    [ MetMosPreset.ARGENT_TEMPERAMENT ]: {
        description: 'fifth and the fourth in the ratio of √2; generator (0√2 + 1)/(1√2 + 1) ≈ 0.414214',
        order: presetsOrder.indexOf(MetMosPreset.ARGENT_TEMPERAMENT),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.ITERATIONS ]: ARGENT_TEMPERAMENT_PRESET_ITERATIONS,
            [ MetMosSpec.RATIO ]: ARGENT_TEMPERAMENT_PRESET_RATIO,
            [ MetMosSpec.METAL ]: ARGENT_TEMPERAMENT_PRESET_METAL,
            [ MetMosSpec.ISOTOPE ]: ARGENT_TEMPERAMENT_PRESET_ISOTOPE,
        },
    },
    [ MetMosPreset.IMAGINARY ]: {
        description: 'ratio between generator and remainder of the period is the silver mean; generator (0δs + 1)/(1δs + 1) ≈ 0.292893',
        order: presetsOrder.indexOf(MetMosPreset.IMAGINARY),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.RATIO ]: IMAGINARY_PRESET_RATIO,
            [ MetMosSpec.METAL ]: IMAGINARY_PRESET_METAL,
            [ MetMosSpec.ISOTOPE ]: IMAGINARY_PRESET_ISOTOPE,
        },
    },
    [ MetMosPreset.FIBONACCI ]: {
        description: 'generator is (1 + 1φ)/(2 + 3φ) ≈ 0.381966',
        order: presetsOrder.indexOf(MetMosPreset.FIBONACCI),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.ITERATIONS ]: FIBONACCI_PRESET_ITERATIONS,
            [ MetMosSpec.RATIO ]: FIBONACCI_PRESET_RATIO,
            [ MetMosSpec.PARENT ]: FIBONACCI_PRESET_PARENT,
            [ MetMosSpec.LEAN ]: FIBONACCI_PRESET_LEAN,
        },
    },
    [ MetMosPreset.LUCAS ]: {
        description: 'generator is (1φ + 0)/(3φ + 1) ≈ 0.276393',
        order: presetsOrder.indexOf(MetMosPreset.LUCAS),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.ITERATIONS ]: LUCAS_PRESET_ITERATIONS,
            [ MetMosSpec.RATIO ]: LUCAS_PRESET_RATIO,
            [ MetMosSpec.LEAN ]: LUCAS_PRESET_LEAN,
        },
    },
    [ MetMosPreset.HANSON ]: {
        description: 'generator is (1φ + 3)/(4φ + 11) ≈ 0.264308',
        order: presetsOrder.indexOf(MetMosPreset.HANSON),
        specs: {
            ...initialSpecs,
            [ MetMosSpec.ITERATIONS ]: HANSON_PRESET_ITERATIONS,
            [ MetMosSpec.RATIO ]: HANSON_PRESET_RATIO,
        },
    },
}

export {
    presets,
}
