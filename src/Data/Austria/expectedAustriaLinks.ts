interface IExpectedLinksNDB {
    expectedUrlNDB: string
    expectedUrlNoDep: string
}

interface IExpectedLinksWelcome {
    Welcome: string
    Land: string
}

export const EXPECTED_AUSTRIA_WELCOME_LINKS: IExpectedLinksWelcome = {
    Welcome: 'https://www.kingbillycasino12.com/land/at/kings_welcome_pack_1',
    Land: 'https://www.kingbillycasino12.com/land/at/kings_land_1'
}


export const EXPECTED_AUSTRIA_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino12.com/land/de/ndb_3',
    expectedUrlNoDep: 'https://www.kingbillycasino12.com/land/de/kings_no_dep_3'

}


export const EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS: IExpectedLinksWelcome = {
    Welcome: 'https://www.kingbillycasino1.com/land/de/kings_welcome_pack_1',
    Land: 'https://www.kingbillycasino1.com/land/de/kings_land_1'
}


 export const EXPECTED_AUSTRIA_STAGE_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino1.com/land/de/ndb_3',
    expectedUrlNoDep: 'https://www.kingbillycasino1.com/land/de/kings_no_dep_3'
}

