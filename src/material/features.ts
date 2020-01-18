import { Note, PitchOnly } from '@musical-patterns/material'
import { as, ContourElement, FOUR_FIFTHS, Pitch, Scalar } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note =>
        ({
            envelope: {
                scalar: FOUR_FIFTHS,
            },
            pitch: {
                index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
            },
        })

export {
    computeNote,
}
