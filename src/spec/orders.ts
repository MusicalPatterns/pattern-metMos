import { MetMosPreset, MetMosSpec } from './types'

const specsOrder: MetMosSpec[] = [
    MetMosSpec.METAL,
    MetMosSpec.ISOTOPE,
    MetMosSpec.RATIO,
    MetMosSpec.PARENT,
    MetMosSpec.LEAN,
    MetMosSpec.ITERATIONS,
    MetMosSpec.PERIOD,
]

const presetsOrder: MetMosPreset[] = [
    MetMosPreset.GOLDEN_MEANTONE,
    MetMosPreset.WILSON_PEPPER_FIFTH,
    MetMosPreset.ARGENT_TEMPERAMENT,
    MetMosPreset.IMAGINARY,
    MetMosPreset.FIBONACCI,
    MetMosPreset.LUCAS,
    MetMosPreset.HANSON,
]

export {
    specsOrder,
    presetsOrder,
}
