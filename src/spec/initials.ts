import { standardInitialSpecs, StandardSpec } from '@musical-patterns/spec'
import {
    MET_MOS_HZ_PHYSICALIZATION,
    MET_MOS_INITIAL_ISOTOPE,
    MET_MOS_INITIAL_ITERATIONS,
    MET_MOS_INITIAL_LEAN,
    MET_MOS_INITIAL_METAL,
    MET_MOS_INITIAL_PARENT,
    MET_MOS_INITIAL_PERIOD,
    MET_MOS_INITIAL_RATIO,
    MET_MOS_MS_PHYSICALIZATION,
} from './constants'
import { MetMosSpec, MetMosSpecs } from './types'

const initialSpecs: MetMosSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.HZ_PHYSICALIZATION ]: MET_MOS_HZ_PHYSICALIZATION,
    [ StandardSpec.MS_PHYSICALIZATION ]: MET_MOS_MS_PHYSICALIZATION,
    [ MetMosSpec.ITERATIONS ]: MET_MOS_INITIAL_ITERATIONS,
    [ MetMosSpec.PERIOD ]: MET_MOS_INITIAL_PERIOD,
    [ MetMosSpec.RATIO ]: MET_MOS_INITIAL_RATIO,
    [ MetMosSpec.LEAN ]: MET_MOS_INITIAL_LEAN,
    [ MetMosSpec.PARENT ]: MET_MOS_INITIAL_PARENT,
    [ MetMosSpec.METAL ]: MET_MOS_INITIAL_METAL,
    [ MetMosSpec.ISOTOPE ]: MET_MOS_INITIAL_ISOTOPE,
}

export {
    initialSpecs,
}
