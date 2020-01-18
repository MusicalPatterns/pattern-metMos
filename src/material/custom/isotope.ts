import { as, Ordinal, Scalar } from '@musical-patterns/utilities'
import { computeMetallicMean } from './metallicMean'

const computeIsotope: (computeIsotopeParams: { isotopeIndex: Ordinal, metalIndex: Ordinal }) => Scalar =
    ({ metalIndex, isotopeIndex }: { isotopeIndex: Ordinal, metalIndex: Ordinal }): Scalar => {
        const metallicMean: number = computeMetallicMean(metalIndex)

        return as.Scalar(metallicMean - as.number(isotopeIndex))
    }

export {
    computeIsotope,
}
