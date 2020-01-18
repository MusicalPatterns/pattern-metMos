import { Note } from '@musical-patterns/material'
import { as, computeLength, Integer, Pitch, range, Scalar } from '@musical-patterns/utilities'
import { MetMosSpecs } from '../spec'
import { computeNote } from './features'
import { computeMosScalars } from './scalars'

const computeNotes: (specs: MetMosSpecs) => Note[] =
    (specs: MetMosSpecs): Note[] => {
        const scalars: Array<Scalar<Pitch>> = computeMosScalars(specs)

        return range(computeLength(scalars))
            .map((integer: Integer) => computeNote(as.ContourElement([ integer ])))
    }

export {
    computeNotes,
}
