import { as, computeMetallicMean, Ordinal } from '@musical-patterns/utilities'

const computeMetallicValue: (computeMetallicValueParams: { isotopeIndex?: Ordinal, metalIndex?: Ordinal }) => number =
    ({
         metalIndex = as.Ordinal(1),
         isotopeIndex = as.Ordinal(0),
     }: { isotopeIndex?: Ordinal, metalIndex?: Ordinal }): number =>
        computeMetallicMean(metalIndex) - as.number(isotopeIndex)

export {
    computeMetallicValue,
}
