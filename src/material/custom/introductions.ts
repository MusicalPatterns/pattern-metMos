import { as, Cardinal, INCREMENT, map, Ordinal, Scalar, use } from '@musical-patterns/utilities'
import { Lean, Parent } from '../../types'
import { doesIntroduce } from './doesIntroduce'
import { computeTree } from './tree'
import { Generator, Tree, TreeLevel, TreeRatio } from './types'

const computeIntroductions: (targetLevel: Ordinal<Tree>, weights: Scalar[]) => Cardinal[] =
    (targetLevel: Ordinal<Tree>, weights: Scalar[]): Cardinal[] => {
        const tree: Tree = computeTree(targetLevel)

        const generators: Generator[] = []

        return map(
            tree,
            (level: TreeLevel, levelIndex: Ordinal<Tree>) => {
                let levelIntroductions: Cardinal = as.Cardinal(0)

                level.forEach((treeRatio: TreeRatio) => {
                    Object.values(Lean)
                        .forEach((lean: Lean) => {
                            Object.values(Parent)
                                .forEach((parent: Parent) => {
                                    weights.forEach((weight: Scalar) => {
                                        if (doesIntroduce({
                                            generators,
                                            lean,
                                            levelIndex,
                                            parent,
                                            treeRatio,
                                            weight,
                                        })) {
                                            levelIntroductions = use.Cardinal(levelIntroductions, INCREMENT)
                                        }
                                    })
                                })
                        })
                })

                return levelIntroductions
            },
        )
    }

export {
    computeIntroductions,
}
