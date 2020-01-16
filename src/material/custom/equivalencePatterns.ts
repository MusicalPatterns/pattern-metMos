import { deepEqual, indexJustBeyondFinalElement, INITIAL, Ordinal, Scalar, slice } from '@musical-patterns/utilities'
import { calculateGenerators } from './generators'
import { calculateTree } from './tree'
import { Equivalence, EquivalencePattern, Generator, Tree } from './types'

const equivalencePatternContainsMaybeNewOne:
    (foundEquivalencePattern: EquivalencePattern, maybeNewEquivalencePattern: EquivalencePattern) => boolean =
    (foundEquivalencePattern: EquivalencePattern, maybeNewEquivalencePattern: EquivalencePattern): boolean =>
        deepEqual(
            slice(foundEquivalencePattern, INITIAL, indexJustBeyondFinalElement(maybeNewEquivalencePattern)),
            maybeNewEquivalencePattern,
        )

const calculateMaybeNewEquivalencePattern: (equivalences: Equivalence[]) => EquivalencePattern =
    (equivalences: Equivalence[]): EquivalencePattern => {
        const maybeNewEquivalencePattern: EquivalencePattern = []
        equivalences.forEach((equivalence: Equivalence) => {
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
        equivalencePatterns.forEach((equivalencePattern: EquivalencePattern) => {
            if (
                !alreadyFound &&
                equivalencePatternContainsMaybeNewOne(equivalencePattern, maybeNewEquivalencePattern)
            ) {
                alreadyFound = true
            }
        })

        return alreadyFound
    }

const calculateEquivalencePatterns: (targetLevel: Ordinal<Tree>, weights: Scalar[]) => EquivalencePattern[] =
    (targetLevel: Ordinal<Tree>, weights: Scalar[]): EquivalencePattern[] => {
        const generators: Generator[] = calculateGenerators(calculateTree(targetLevel), weights)

        const equivalencePatterns: EquivalencePattern[] = []

        generators.forEach(({ equivalences }: Generator) => {
            const maybeNewEquivalencePattern: EquivalencePattern = calculateMaybeNewEquivalencePattern(equivalences)

            if (!alreadyFoundEquivalencePattern(equivalencePatterns, maybeNewEquivalencePattern)) {
                equivalencePatterns.push(maybeNewEquivalencePattern)
            }
        })

        return equivalencePatterns
    }

export {
    calculateEquivalencePatterns,
}
