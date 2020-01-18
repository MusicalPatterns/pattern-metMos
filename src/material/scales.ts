import { MaterializeScales, materializeStandardScales, Scales } from '@musical-patterns/material'
import { MetMosSpecs } from '../spec'
import { computeMosScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: MetMosSpecs): Scales =>
        materializeStandardScales(specs, { pitchScalars: computeMosScalars(specs) })

export {
    materializeScales,
}
