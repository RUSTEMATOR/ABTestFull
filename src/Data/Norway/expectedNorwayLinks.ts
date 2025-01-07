interface IExpectedLinksNDB {
    expectedUrlNDB: string
    expectedUrlNoDep: string
}

interface IExpectedLinksWelcome {
    Welcome: string
    Land: string
}

export const EXPECTED_NORWAY_WELCOME_LINKS: IExpectedLinksWelcome = {
    Welcome: 'https://www.kingbillycasino.com/land/no/kings_welcome_pack_1',
    Land: 'https://www.kingbillycasino.com/land/no/kings_land_1'
}


export const EXPECTED_NORWAY_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino.com/land/no/ndb_1',
    expectedUrlNoDep: 'https://www.kingbillycasino.com/land/no/kings_no_dep_1'

}


export const EXPECTED_NORWAY_STAGE_WELCOME_LINKS: IExpectedLinksWelcome = {
    Welcome: 'https://www.kingbillycasino1.com/land/no/kings_welcome_pack_1',
    Land: 'https://www.kingbillycasino1.com/land/no/kings_land_1'
}


 export const EXPECTED_NORWAY_STAGE_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino1.com/land/no/ndb_1',
    expectedUrlNoDep: 'https://www.kingbillycasino1.com/land/no/kings_no_dep_1'
}

