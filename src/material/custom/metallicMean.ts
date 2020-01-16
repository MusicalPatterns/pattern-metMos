import { as, FOUR, Ordinal, quotient, SQUARE_ROOT, SQUARED, sum, TWO, use } from '@musical-patterns/utilities'

const calculateMetallicMean: (nthMetal: Ordinal) => number =
    (nthMetal: Ordinal): number =>
        quotient(
            sum(
                as.number(nthMetal),
                use.Exponent(
                    sum(
                        use.Power(nthMetal, SQUARED),
                        FOUR,
                    ),
                    SQUARE_ROOT,
                ),
            ),
            TWO,
        )

export {
    calculateMetallicMean,
}
