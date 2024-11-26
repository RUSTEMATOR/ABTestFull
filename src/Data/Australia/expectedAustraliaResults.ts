
interface IExpectedLinksNDB {
    expectedUrlNDB: string
    expectedUrlNoDep: string
}

interface IExpectedLinksWelcome {
    Welcome: string
    World: string
}

export const EXPECTED_AUSTRALIA_WELCOME_LINKS: IExpectedLinksWelcome = {
    Welcome: 'https://www.kingbillywin19.com/land/en-AU/kings_welcome_pack_1',
    World: 'https://www.kingbillywin19.com/land/en-AU/kings_world_welcome_pack_1'
}


export const EXPECTED_AUSTRALIA_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillywin19.com/land/en-AU/ndb_2',
    expectedUrlNoDep: 'https://www.kingbillywin19.com/land/en-AU/kings_no_dep_2'

}