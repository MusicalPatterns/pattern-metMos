import { Cardinal, Cycle } from '@musical-patterns/utilities'
import { Generator, RatioOptions } from '../types'

type EquivalencePattern = RatioOptions[]

type PeriodicEquivalencePatternSegment = Cycle<RatioOptions>

interface GeneratorsAndIntroductionCounts {
    generators: Generator[],
    introductionCounts: Cardinal[],
}

export {
    EquivalencePattern,
    PeriodicEquivalencePatternSegment,
    GeneratorsAndIntroductionCounts,
}
