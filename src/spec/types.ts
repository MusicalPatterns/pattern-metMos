import { Configurations, OptionedConfiguration, RangedConfiguration, Specs } from '@musical-patterns/spec'
import { Cardinal, Frequency, Logarithm, Ordinal, Rational } from '@musical-patterns/utilities'
import { Lean, Parent } from '../types'

enum MetMosSpec {
    ITERATIONS = 'iterations',
    PERIOD = 'period',
    RATIO = 'ratio',
    LEAN = 'lean',
    PARENT = 'parent',
    METAL = 'metal',
    ISOTOPE = 'isotope',
}

interface MetMosSpecs extends Specs {
    [ MetMosSpec.ITERATIONS ]: Cardinal,
    [ MetMosSpec.PERIOD ]: Logarithm<Frequency>,
    [ MetMosSpec.RATIO ]: Rational,
    [ MetMosSpec.LEAN ]: Lean,
    [ MetMosSpec.PARENT ]: Parent,
    [ MetMosSpec.METAL ]: Ordinal,
    [ MetMosSpec.ISOTOPE ]: Ordinal,
}

interface MetMosConfigurations extends Configurations {
    [ MetMosSpec.ITERATIONS ]: RangedConfiguration,
    [ MetMosSpec.PERIOD ]: RangedConfiguration,
    [ MetMosSpec.RATIO ]: RangedConfiguration,
    [ MetMosSpec.LEAN ]: OptionedConfiguration,
    [ MetMosSpec.PARENT ]: OptionedConfiguration,
    [ MetMosSpec.METAL ]: RangedConfiguration,
    [ MetMosSpec.ISOTOPE ]: RangedConfiguration,
}

enum MetMosPreset {
    GOLDEN_MEANTONE = 'GOLDEN_MEANTONE',
    WILSON_PEPPER_FIFTH = 'WILSON_PEPPER_FIFTH',
    ARGENT_TEMPERAMENT = 'ARGENT_TEMPERAMENT',
    IMAGINARY = 'IMAGINARY',
    FIBONACCI = 'FIBONACCI',
    LUCAS = 'LUCAS',
    HANSON = 'HANSON',
}

export {
    MetMosSpecs,
    MetMosSpec,
    MetMosConfigurations,
    MetMosPreset,
}
