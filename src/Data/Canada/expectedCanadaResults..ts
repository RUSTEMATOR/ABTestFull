interface IExpectedLinks {
    expectedUrlWelcome: string
    expectedUrlLand: string
}

interface IExpectedLinksNDB {
    expectedUrlNDB: string
    expectedUrlNoDep: string
}



export const EXPECTED_CANADA_LINKS: IExpectedLinks = {
    expectedUrlWelcome: 'https://www.kingbillycasino.com/land/en-CA/kings_welcome_pack_1',
    expectedUrlLand: 'https://www.kingbillycasino.com/land/en-CA/kings_world_welcome_pack_1'
}

export const EXPECTED_CANADA_LINKS_NDB: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino.com/land/en-CA/ndb_5',
    expectedUrlNoDep: 'https://www.kingbillycasino.com/land/en-CA/kings_no_dep_5'
}



export const EXPECTED_CANADA_STAGE_WELCOME_LINKS: IExpectedLinks = {
    expectedUrlWelcome: 'https://www.kingbillycasino1.com/land/en-CA/kings_welcome_pack_1',
    expectedUrlLand: 'https://www.kingbillycasino1.com/land/en-CA/kings_world_welcome_pack_1'
}


 export const EXPECTED_CANADA_STAGE_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino1.com/land/en-CA/ndb_5',
    expectedUrlNoDep: 'https://www.kingbillycasino1.com/land/en-CA/kings_no_dep_5'
}
