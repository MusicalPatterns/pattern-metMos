import { forEach, logMessageToConsole, Ordinal } from '@musical-patterns/utilities'
import { Equivalence, Generator } from './types'

const logGenerators: (generators: Generator[]) => void =
    (generators: Generator[]): void => {
        generators.forEach((generator: Generator) => {
            logMessageToConsole(`\nvalue: ${String(generator.value)}`)
            forEach(
                generator.equivalences,
                (equivalence: Equivalence, levelIndex: Ordinal<Equivalence[]>) => {
                    logMessageToConsole('level', levelIndex, equivalence)
                },
            )
        })
    }

export {
    logGenerators,
}
