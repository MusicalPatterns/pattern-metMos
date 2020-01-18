import { Configurations, OptionedConfiguration, RangedConfiguration, Specs } from '@musical-patterns/spec'
import { Cardinal, Fraction, Frequency, Logarithm, Ordinal } from '@musical-patterns/utilities'
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
    [ MetMosSpec.RATIO ]: Fraction,
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

export {
    MetMosSpecs,
    MetMosSpec,
    MetMosConfigurations,
}
