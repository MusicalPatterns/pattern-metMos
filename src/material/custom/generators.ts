import { forEach, Ordinal, Scalar } from '@musical-patterns/utilities'
import { Lean, Parent } from '../../types'
import { computeNewGenerator } from './newGenerator'
import { Generator, Tree, TreeLevel, TreeRatio } from './types'

const computeGenerators: (tree: TreeLevel[], weights: Scalar[]) => Generator[] =
    (tree: TreeLevel[], weights: Scalar[]): Generator[] => {
        const generators: Generator[] = []

        forEach(
            tree,
            (level: TreeLevel, levelIndex: Ordinal<Tree>) => {
                level.forEach((treeRatio: TreeRatio) => {
                    Object.values(Lean)
                        .forEach((lean: Lean) => {
                            Object.values(Parent)
                                .forEach((parent: Parent) => {
                                    weights.forEach((weight: Scalar) => {
                                        computeNewGenerator({
                                            generators,
                                            lean,
                                            levelIndex,
                                            parent,
                                            treeRatio,
                                            weight,
                                        })
                                    })
                                })
                        })
                })
            },
        )

        return generators
    }

export {
    computeGenerators,
}
