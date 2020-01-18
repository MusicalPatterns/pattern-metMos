import { as, Cardinal, Fraction, Frequency, Logarithm, OCTAVE, Ordinal, THREE } from '@musical-patterns/utilities'
import { Lean, Parent } from '../types'

const MET_MOS_INITIAL_PERIOD: Logarithm<Frequency> = OCTAVE
const MET_MOS_INITIAL_ITERATIONS: Cardinal = as.Cardinal(THREE)
const MET_MOS_INITIAL_RATIO: Fraction = as.Fraction([ as.Numerator(1), as.Denominator(1) ])
const MET_MOS_INITIAL_LEAN: Lean = Lean.PARENTWARD
const MET_MOS_INITIAL_PARENT: Parent = Parent.LESSER
const MET_MOS_INITIAL_METAL: Ordinal = as.Ordinal(1)
const MET_MOS_INITIAL_ISOTOPE: Ordinal = as.Ordinal(0)

export {
    MET_MOS_INITIAL_PERIOD,
    MET_MOS_INITIAL_ITERATIONS,
    MET_MOS_INITIAL_RATIO,
    MET_MOS_INITIAL_LEAN,
    MET_MOS_INITIAL_PARENT,
    MET_MOS_INITIAL_METAL,
    MET_MOS_INITIAL_ISOTOPE,
}
