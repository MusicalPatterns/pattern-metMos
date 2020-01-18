import { as, NormalScalar } from '@musical-patterns/utilities'
import { computeMos } from '../../../../src/indexForTest'

describe('moment of symmetry scales', () => {
    it('given a generator and an iterations count, returns that iteration of the MOS scales for that generator', () => {
        const generator: NormalScalar = as.NormalScalar(5 / 12)

        expect(computeMos(generator, as.Cardinal(1)))
            .toBeCloseToArray([ 0, 0.41666666666 ].map(as.Exponent), 10)
        expect(computeMos(generator, as.Cardinal(2)))
            .toBeCloseToArray([ 0, 0.4166666667, 0.8333333333 ].map(as.Exponent), 10)
        expect(computeMos(generator, as.Cardinal(3)))
            .toBeCloseToArray([ 0, 0.25, 0.4166666667, 0.6666666667, 0.8333333333 ].map(as.Exponent), 10)
        expect(computeMos(generator, as.Cardinal(4)))
            .toBeCloseToArray([ 0, 0.0833333333, 0.25, 0.4166666667, 0.5, 0.6666666667, 0.8333333333 ].map(as.Exponent), 10)
    })
})
