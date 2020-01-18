import { Entity, Material, Scales } from '@musical-patterns/material'
import { materializeScales } from './scales'

const material: Material = {
    materializeEntities: (): Entity[] => [],
    materializeScales,
}

export {
    material,
}
