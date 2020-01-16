import { forEach, Ordinal, Scalar } from '@musical-patterns/utilities'
import { calculateNewGenerator } from './newGenerator'
import { Generator, Lean, Parent, Tree, TreeLevel, TreeRatio } from './types'

const calculateGenerators: (tree: TreeLevel[], weights: Scalar[]) => Generator[] =
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
                                        calculateNewGenerator({
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
    calculateGenerators,
}
