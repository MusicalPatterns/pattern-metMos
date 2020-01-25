// tslint:disable no-magic-numbers

import {
    as,
    asRational,
    Cardinal,
    Duration,
    Frequency,
    Logarithm,
    musicalAs,
    OCTAVE,
    Ordinal,
    Rational,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Tone,
} from '@musical-patterns/utilities'
import { Lean, Parent } from '../types'

const GENERATOR_COMPLEMENT_LIMIT: number = 0.5

const MET_MOS_INITIAL_PERIOD: Logarithm<Frequency> = OCTAVE
const MET_MOS_INITIAL_ITERATIONS: Cardinal = as.Cardinal(4)
const MET_MOS_INITIAL_RATIO: Rational = asRational(1, 1)
const MET_MOS_INITIAL_LEAN: Lean = Lean.PARENTWARD
const MET_MOS_INITIAL_PARENT: Parent = Parent.LESSER
const MET_MOS_INITIAL_METAL: Ordinal = as.Ordinal(1)
const MET_MOS_INITIAL_ISOTOPE: Ordinal = as.Ordinal(0)
const MET_MOS_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ]
const MET_MOS_MS_PHYSICALIZATION: Duration = musicalAs.Duration(500)

const GOLDEN_MEANTONE_PRESET_ITERATIONS: Cardinal = as.Cardinal(5)
const GOLDEN_MEANTONE_PRESET_RATIO: Rational = asRational(1, 3)
const GOLDEN_MEANTONE_PRESET_PARENT: Parent = Parent.GREATER

const WILSON_PEPPER_FIFTH_PRESET_ITERATIONS: Cardinal = as.Cardinal(5)
const WILSON_PEPPER_FIFTH_PRESET_RATIO: Rational = asRational(3, 7)

const ARGENT_TEMPERAMENT_PRESET_ITERATIONS: Cardinal = as.Cardinal(5)
const ARGENT_TEMPERAMENT_PRESET_RATIO: Rational = asRational(1, 1)
const ARGENT_TEMPERAMENT_PRESET_METAL: Ordinal = as.Ordinal(2)
const ARGENT_TEMPERAMENT_PRESET_ISOTOPE: Ordinal = as.Ordinal(1)

const IMAGINARY_PRESET_RATIO: Rational = asRational(1, 1)
const IMAGINARY_PRESET_METAL: Ordinal = as.Ordinal(2)
const IMAGINARY_PRESET_ISOTOPE: Ordinal = as.Ordinal(0)

const FIBONACCI_PRESET_ITERATIONS: Cardinal = as.Cardinal(5)
const FIBONACCI_PRESET_RATIO: Rational = asRational(1, 3)
const FIBONACCI_PRESET_PARENT: Parent = Parent.GREATER
const FIBONACCI_PRESET_LEAN: Lean = Lean.CHILDWARD

const LUCAS_PRESET_ITERATIONS: Cardinal = as.Cardinal(5)
const LUCAS_PRESET_RATIO: Rational = asRational(1, 3)
const LUCAS_PRESET_LEAN: Lean = Lean.CHILDWARD

const HANSON_PRESET_ITERATIONS: Cardinal = as.Cardinal(5)
const HANSON_PRESET_RATIO: Rational = asRational(3, 11)

export {
    GENERATOR_COMPLEMENT_LIMIT,
    MET_MOS_INITIAL_PERIOD,
    MET_MOS_INITIAL_ITERATIONS,
    MET_MOS_INITIAL_RATIO,
    MET_MOS_INITIAL_LEAN,
    MET_MOS_INITIAL_PARENT,
    MET_MOS_INITIAL_METAL,
    MET_MOS_INITIAL_ISOTOPE,
    MET_MOS_HZ_PHYSICALIZATION,
    MET_MOS_MS_PHYSICALIZATION,
    GOLDEN_MEANTONE_PRESET_ITERATIONS,
    GOLDEN_MEANTONE_PRESET_PARENT,
    GOLDEN_MEANTONE_PRESET_RATIO,
    WILSON_PEPPER_FIFTH_PRESET_ITERATIONS,
    WILSON_PEPPER_FIFTH_PRESET_RATIO,
    ARGENT_TEMPERAMENT_PRESET_ISOTOPE,
    ARGENT_TEMPERAMENT_PRESET_ITERATIONS,
    ARGENT_TEMPERAMENT_PRESET_METAL,
    ARGENT_TEMPERAMENT_PRESET_RATIO,
    IMAGINARY_PRESET_ISOTOPE,
    IMAGINARY_PRESET_METAL,
    IMAGINARY_PRESET_RATIO,
    FIBONACCI_PRESET_PARENT,
    FIBONACCI_PRESET_LEAN,
    FIBONACCI_PRESET_ITERATIONS,
    FIBONACCI_PRESET_RATIO,
    LUCAS_PRESET_LEAN,
    LUCAS_PRESET_ITERATIONS,
    LUCAS_PRESET_RATIO,
    HANSON_PRESET_ITERATIONS,
    HANSON_PRESET_RATIO,
}
