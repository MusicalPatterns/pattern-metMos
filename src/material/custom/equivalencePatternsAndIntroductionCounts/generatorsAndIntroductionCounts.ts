import {
    arraySet,
    as,
    Cardinal,
    INCREMENT,
    isCloseTo,
    isUndefined,
    map,
    Maybe,
    NormalScalar,
    Ordinal,
    Rational,
    Scalar,
    use,
} from '@musical-patterns/utilities'
import { Lean, Parent } from '../../../types'
import { MET_MOS_PRECISION } from '../constants'
import { computeGenerator } from '../generator'
import { computeTree } from '../tree'
import { Equivalence, Generator, Tree, TreeLevel, TreeRatio } from '../types'
import { isComplementGenerator } from './isComplementGenerator'
import { GeneratorsAndIntroductionCounts } from './types'

const computeGeneratorsAndIntroductionCounts:
    (targetLevel: Ordinal<Tree>, weights: Scalar[]) => GeneratorsAndIntroductionCounts =
    (targetLevel: Ordinal<Tree>, weights: Scalar[]): GeneratorsAndIntroductionCounts => {
        const tree: Tree = computeTree(targetLevel)

        const generators: Generator[] = []

        const introductionCounts: Cardinal[] = map(
            tree,
            (level: TreeLevel, levelIndex: Ordinal<Tree>): Cardinal => {
                let levelIntroductions: Cardinal = as.Cardinal(0)

                level.forEach((treeRatio: TreeRatio): void => {
                    const ratio: Rational = treeRatio.value
                    Object.values(Lean)
                        .forEach((lean: Lean): void => {
                            Object.values(Parent)
                                .forEach((parent: Parent): void => {
                                    weights.forEach((weight: Scalar): void => {
                                        if (isComplementGenerator({ lean, ratio, parent })) {
                                            return
                                        }

                                        const newValue: Maybe<NormalScalar> = computeGenerator({
                                            lean,
                                            parent,
                                            treeRatio,
                                            weight,
                                        })

                                        const equivalence: Equivalence = { lean, parent, ratio, weight }

                                        let foundEquivalentGenerator: boolean = false
                                        generators.forEach((generator: Generator): void => {
                                            if (
                                                !foundEquivalentGenerator &&
                                                !isUndefined(newValue) &&
                                                isCloseTo(generator.value, newValue, MET_MOS_PRECISION)
                                            ) {
                                                arraySet(
                                                    generator.equivalences,
                                                    as.Ordinal<Equivalence[]>(as.number(levelIndex)),
                                                    equivalence,
                                                )
                                                foundEquivalentGenerator = true
                                            }
                                        })
                                        if (!foundEquivalentGenerator) {
                                            const initialEquivalences: Equivalence[] = []
                                            arraySet(
                                                initialEquivalences,
                                                as.Ordinal<Equivalence[]>(as.number(levelIndex)),
                                                equivalence,
                                            )

                                            if (!isUndefined(newValue)) {
                                                generators.push({ value: newValue, equivalences: initialEquivalences })
                                                levelIntroductions = use.Cardinal(levelIntroductions, INCREMENT)
                                            }
                                        }
                                    })
                                })
                        })
                })

                return levelIntroductions
            },
        )

        return { generators, introductionCounts }
    }

export {
    computeGeneratorsAndIntroductionCounts,
}
