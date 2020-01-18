import {
    as,
    Cardinal,
    computeDeltas,
    computeLength,
    Delta,
    Exponent,
    filter,
    Frequency,
    INCREMENT,
    NormalScalar,
    Point,
    round,
    TEN,
    TWO,
    uniqueFilter,
    use,
} from '@musical-patterns/utilities'

const computeMos: (generator: NormalScalar, iterations: Cardinal) => Array<Exponent<Frequency>> =
    (generator: NormalScalar, iterations: Cardinal): Array<Exponent<Frequency>> => {
        let iterationsMet: Cardinal = as.Cardinal(0)
        let currentGeneratorPosition: NormalScalar = as.NormalScalar(0)
        const currentGeneratorPositions: Point[] = [ 0 ].map(as.Point)

        while (iterationsMet < iterations) {
            currentGeneratorPosition = as.NormalScalar(use.Modulus(
                as.number(currentGeneratorPosition) + as.number(generator),
                as.Modulus(1),
            ))
            currentGeneratorPositions.push(as.Point(as.number(currentGeneratorPosition)))

            const deltas: Delta[] = computeDeltas([ ...currentGeneratorPositions.sort(), as.Point(1) ])
                .map((delta: Delta) => round(delta, TEN))

            const uniqueDeltas: Delta[] = filter(deltas, uniqueFilter)
            if (computeLength(uniqueDeltas) === as.Cardinal<Delta[]>(TWO)) {
                iterationsMet = use.Cardinal(iterationsMet, INCREMENT)
            }
        }

        return currentGeneratorPositions.sort()
            .map((generatorPosition: Point) => as.Exponent<Frequency>(as.number(generatorPosition)))
    }

export {
    computeMos,
}
