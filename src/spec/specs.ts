import {
    Configurations,
    Spec,
    Specs,
    standardConfigurations,
    standardInitialSpecs,
} from '@musical-patterns/spec'

const initialSpecs: Specs = {
    ...standardInitialSpecs,
}

const configurations: Configurations = {
    ...standardConfigurations,
}

const spec: Spec = {
    configurations,
    initialSpecs,
}

export {
    spec,
}
