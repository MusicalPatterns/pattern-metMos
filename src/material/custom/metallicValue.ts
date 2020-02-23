import { as, FOUR, Ordinal, quotient, Scalar, SQUARED, SQUARE_ROOT, sum, TWO, use } from '@musical-patterns/utilities'

const computeMetallicValue: (computeMetallicValueParams: { isotopeIndex?: Ordinal, metalIndex?: Ordinal }) => number =
    ({
         metalIndex = as.Ordinal(1),
         isotopeIndex = as.Ordinal(0),
     }: { isotopeIndex?: Ordinal, metalIndex?: Ordinal }): number => {
        const metallicMean: number = quotient(
            sum(
                as.number(metalIndex),
                use.Exponent(
                    sum(
                        use.Power(metalIndex, SQUARED),
                        FOUR,
                    ),
                    SQUARE_ROOT,
                ),
            ),
            TWO,
        )

        return metallicMean - as.number(isotopeIndex)
    }

export {
    computeMetallicValue,
}
