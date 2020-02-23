import { deepEqual, indexJustBeyondFinalElement, INITIAL, Ordinal, Scalar, slice } from '@musical-patterns/utilities'
import { Equivalence, Generator, Tree } from '../types'
import { computeGeneratorsAndIntroductionCounts } from './generatorsAndIntroductionCounts'
import { EquivalencePattern } from './types'

const equivalencePatternContainsMaybeNewOne:
    (foundEquivalencePattern: EquivalencePattern, maybeNewEquivalencePattern: EquivalencePattern) => boolean =
    (foundEquivalencePattern: EquivalencePattern, maybeNewEquivalencePattern: EquivalencePattern): boolean =>
        deepEqual(
            slice(foundEquivalencePattern, INITIAL, indexJustBeyondFinalElement(maybeNewEquivalencePattern)),
            maybeNewEquivalencePattern,
        )

const computeMaybeNewEquivalencePattern: (equivalences: Equivalence[]) => EquivalencePattern =
    (equivalences: Equivalence[]): EquivalencePattern => {
        const maybeNewEquivalencePattern: EquivalencePattern = []
        equivalences.forEach((equivalence: Equivalence): void => {
            if (!equivalence) {
                return
            }
            maybeNewEquivalencePattern.push({
                lean: equivalence.lean,
                parent: equivalence.parent,
                weight: equivalence.weight,
            })
        })

        return maybeNewEquivalencePattern
    }

const alreadyFoundEquivalencePattern:
    (equivalencePatterns: EquivalencePattern[], maybeNewEquivalencePattern: EquivalencePattern) => boolean =
    (equivalencePatterns: EquivalencePattern[], maybeNewEquivalencePattern: EquivalencePattern): boolean => {
        let alreadyFound: boolean = false
        equivalencePatterns.forEach((equivalencePattern: EquivalencePattern): void => {
            if (
                !alreadyFound &&
                equivalencePatternContainsMaybeNewOne(equivalencePattern, maybeNewEquivalencePattern)
            ) {
                alreadyFound = true
            }
        })

        return alreadyFound
    }

const computeEquivalencePatterns: (targetLevel: Ordinal<Tree>, weights: Scalar[]) => EquivalencePattern[] =
    (targetLevel: Ordinal<Tree>, weights: Scalar[]): EquivalencePattern[] => {
        const generators: Generator[] = computeGeneratorsAndIntroductionCounts(targetLevel, weights).generators

        const equivalencePatterns: EquivalencePattern[] = []

        generators.forEach(({ equivalences }: Generator): void => {
            const maybeNewEquivalencePattern: EquivalencePattern = computeMaybeNewEquivalencePattern(equivalences)

            if (!alreadyFoundEquivalencePattern(equivalencePatterns, maybeNewEquivalencePattern)) {
                equivalencePatterns.push(maybeNewEquivalencePattern)
            }
        })

        return equivalencePatterns
    }

export {
    computeEquivalencePatterns,
}
