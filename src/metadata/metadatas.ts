import { Metadata } from '@musical-patterns/metadata'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Met Mos',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2020-01-13T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
