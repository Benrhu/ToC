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

export const iObsession = {
    obsessions: obsessions,
    areaInvolved: areaInvolved,
}

export default { obsessions, areaInvolved, iObsession}