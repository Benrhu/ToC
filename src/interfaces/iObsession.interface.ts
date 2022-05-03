export enum obsessions {
    PNL = 'PNL',
    CNV = 'Non-Verbal Communication',
    UNIVERSE = 'Universe laws',
    TIME = 'Time',
    SOCIETY = 'Change society'
}

export enum areaInvolved {
    HEALTH = 'Health',
    MONEY = 'Money',
    ESPIRITUALITY = 'Espirituality',
    KNOWLEDGE = 'Knowledge'
}

export enum priority {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High'
}

export const iObsession = {
    obsessions: obsessions,
    areaInvolved: areaInvolved,
    priority: priority
}

export default { obsessions, areaInvolved, priority, iObsession}