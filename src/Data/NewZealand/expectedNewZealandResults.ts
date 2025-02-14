interface IExpectedLinks {
    expectedUrlWelcome: string
    expectedUrlLand: string
}

interface IExpectedLinksNDB {
    expectedUrlNDB: string
    expectedUrlNoDep: string
}

export const EXPECTED_NEW_ZEALAND_LINKS: IExpectedLinks = {
    expectedUrlWelcome: 'https://www.kingbillycasino.com/land/en-NZ/kings_welcome_pack_1',
    expectedUrlLand: 'https://www.kingbillycasino.com/land/en-NZ/kings_land_1'
}

export const EXPECTED_NEW_ZEALAND_LINKS_NDB: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino.com/land/en-NZ/ndb_3',
    expectedUrlNoDep: 'https://www.kingbillycasino.com/land/en-NZ/kings_no_dep_3'
}


export const EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS: IExpectedLinks = {
    expectedUrlWelcome: 'https://www.kingbillycasino1.com/land/en-NZ/kings_welcome_pack_1',
    expectedUrlLand: 'https://www.kingbillycasino1.com/land/en-NZ/kings_land_1'
}


 export const EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino1.com/land/en-NZ/ndb_3',
    expectedUrlNoDep: 'https://www.kingbillycasino1.com/land/en-NZ/kings_no_dep_3'
}
