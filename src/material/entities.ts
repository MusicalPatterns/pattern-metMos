import { Entity, TimbreNameEnum } from '@musical-patterns/material'
import { MetMosSpecs } from '../spec'
import { computeNotes } from './notes'

const materializeEntities: (specs: MetMosSpecs) => Entity[] =
    (specs: MetMosSpecs): Entity[] => [
        {
            sections: [
                {
                    notes: computeNotes(specs),
                },
            ],
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        },
    ]

export {
    materializeEntities,
}
