import { Configurations, Spec, Specs, standardConfigurations, standardInitialSpecs } from '@musical-patterns/spec'
import { as } from '@musical-patterns/utilities'
import {
    MET_MOS_INITIAL_ITERATIONS,
    MET_MOS_INITIAL_LEAN,
    MET_MOS_INITIAL_METAL,
    MET_MOS_INITIAL_PARENT,
    MET_MOS_INITIAL_PERIOD,
    MET_MOS_INITIAL_RATIO,
} from './constants'
import { MetMosSpec } from './types'

const initialSpecs: Specs = {
    ...standardInitialSpecs,
    [ MetMosSpec.ITERATIONS ]: MET_MOS_INITIAL_ITERATIONS,
    [ MetMosSpec.PERIOD ]: MET_MOS_INITIAL_PERIOD,
    [ MetMosSpec.RATIO ]: MET_MOS_INITIAL_RATIO,
    [ MetMosSpec.LEAN ]: MET_MOS_INITIAL_LEAN,
    [ MetMosSpec.PARENT ]: MET_MOS_INITIAL_PARENT,
    [ MetMosSpec.METAL ]: MET_MOS_INITIAL_METAL,
    [ MetMosSpec.ISOTOPE ]: as.Ordinal(0),
}

const configurations: Configurations = {
    ...standardConfigurations,
}

const spec: Spec = {
    configurations,
    initialSpecs,
}

export {
    spec,
}
