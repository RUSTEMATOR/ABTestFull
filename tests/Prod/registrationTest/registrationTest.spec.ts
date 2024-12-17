import {BrowserContext, chromium, test} from "playwright/test";
import VpnController from "../../../src/methods/VpnController/vpnController";
import { ERROR_TEXT, LOCATIONS, PHONE_NUMBERS } from "../../../src/Data/constants";
import Registration from "../../../src/methods/Registration/Registration";


const redirectLinks = {
    AuBtag: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1173c_&affid=17&siteid=2401&adid=1173&c=',
    AuStag: 'https://refer.kingtraf.com/a5a053d8f',

    AuBtagNDB: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1460c_&affid=17&siteid=2401&adid=1460&c=',
    AuStagNDB: 'https://refer.kingtraf.com/a499163a2',

    AtBtag: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1211c_&affid=17&siteid=2401&adid=1211&c=',
    AtStag: 'https://refer.kingtraf.com/a418723cb',

    AtBtagNDB: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1501c_&affid=17&siteid=2401&adid=1501&c=', 
    AtStagNDB:'https://refer.kingtraf.com/a7ebde21b',

    CaBtag: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1172c_&affid=17&siteid=2401&adid=1172&c=',
    CaStag: 'https://refer.kingtraf.com/a020bc42f',

    CaBtagNDB: 'https://ia.kingbillycasino.com/C.ashx?btag=a_2401b_1490c_&affid=17&siteid=2401&adid=1490&c=',
    CaStagNDB: 'https://refer.kingtraf.com/a0d117a12',

    DeBtag: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1424c_&affid=17&siteid=2401&adid=1424&c=',
    DeStag: 'https://refer.kingtraf.com/a6ac25b2b',

    DeBtagNDB: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1494c_&affid=17&siteid=2401&adid=1494&c=',
    DeStagNDB: 'https://refer.kingtraf.com/a302351d3',

    NzBtag: 'https://ia.kingbillycasino.com/C.ashx?btag=a_2401b_1170c_&affid=17&siteid=2401&adid=1170&c=',
    NzStag: 'https://refer.kingtraf.com/a21e6a75a',

    NzBtagNDB: 'https://ia.kingbillycasino.com/C.ashx?btag=a_2401b_1461c_&affid=17&siteid=2401&adid=1461&c=',
    NzStagNDB: 'https://refer.kingtraf.com/a4ac95a9f'
}

const stageRedirectLinks = {
    AuWelcomeBtag: 'https://www.kingbillycasino1.com/land/en-AU/kings_welcome_pack?btag=a_2401b_1170c_&nofingerprint=1',
    AuWelcomeStag: 'https://www.kingbillycasino1.com/land/en-AU/kings_welcome_pack?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    AuNDBBtag: 'https://www.kingbillycasino1.com/land/en-AU/ndb?btag=a_2401b_1170c_&nofingerprint=1',
    AuNDBStag: 'https://www.kingbillycasino1.com/land/en-AU/ndb?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    AtWelcomeBtag: 'https://www.kingbillycasino1.com/land/at/kings_welcome_pack?btag=a_2401b_1170c_&nofingerprint=1',
    AtWelcomeStag: 'https://www.kingbillycasino1.com/land/at/kings_welcome_pack?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    AtNDBBtag: 'https://www.kingbillycasino1.com/land/at/ndb?btag=a_2401b_1170c_&nofingerprint=1',
    AtNDBStag: 'https://www.kingbillycasino1.com/land/at/ndb?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    CaWelcomeBtag: 'https://www.kingbillycasino1.com/land/en-CA/kings_welcome_pack?btag=a_2401b_1170c_&nofingerprint=1',
    CaWelcomeStag: 'https://www.kingbillycasino1.com/land/en-CA/kings_welcome_pack?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    CaNDBBtag: 'https://www.kingbillycasino1.com/land/en-CA/ndb?btag=a_2401b_1170c_&nofingerprint=1',
    CaNDBStag: 'https://www.kingbillycasino1.com/land/en-CA/ndb?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    DeWelcomeBtag: 'https://www.kingbillycasino1.com/land/de/kings_welcome_pack?btag=a_2401b_1170c_&nofingerprint=1',
    DeWelcomeStag: 'https://www.kingbillycasino1.com/land/de/kings_welcome_pack?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    DeNDBBtag: 'https://www.kingbillycasino1.com/land/de/ndb?btag=a_2401b_1170c_&nofingerprint=1',
    DeNDBStag: 'https://www.kingbillycasino1.com/land/de/ndb?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',
    
    NzWelcomeBtag: 'https://www.kingbillycasino1.com/land/en-NZ/kings_welcome_pack?btag=a_2401b_1170c_&nofingerprint=1',
    NzWelcomeStag: 'https://www.kingbillycasino1.com/land/en-NZ/kings_welcome_pack?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1',

    NZNDBBtag: 'https://www.kingbillycasino1.com/land/en-NZ/ndb?btag=a_2401b_1170c_&nofingerprint=1',
    NZNDBStag: 'https://www.kingbillycasino1.com/land/en-NZ/ndb?stag=221080_66fbd980c308a07[%E2%80%A6]fer.kingtraf.com%2Fa020bc42f&__layerref=&nofingerprint=1'

}

const stageExpectedLinks = {
    AuWelcomeStage: 'https://www.kingbillycasino1.com/land/en-AU/kings_welcome_pack_1',
    AuWorldStage: 'https://www.kingbillycasino1.com/land/en-AU/kings_world_welcome_pack_1',

    AuNDBStage: 'https://www.kingbillywin20.com/land/en-AU/ndb_3', 
    AuNoDepStage: 'https://www.kingbillycasino1.com/land/en-AU/kings_no_dep_3',

    AtWelcomeStage: 'https://www.kingbillycasino1.com/land/at/kings_welcome_pack_1',
    AtLandStage:  'https://www.kingbillycasino1.com/land/at/kings_land_1',

    AtNDBStage: 'https://www.kingbillycasino1.com/land/at/ndb_2',
    AtNoDepStage: 'https://www.kingbillycasino1.com/land/at/kings_no_dep_2',

    CaWelcomeStage: 'https://www.kingbillycasino1.com/land/en-CA/kings_welcome_pack_1',
    CaLandStage: 'https://www.kingbillycasino1.com/land/en-CA/kings_land_1', 

    CaNDBStage: 'https://www.kingbillycasino1.com/land/en-CA/ndb_2', 
    CaNoDepStage: 'https://www.kingbillycasino1.com/land/en-CA/kings_no_dep_2',

    DeWelcomeStage: 'https://www.kingbillycasino1.com/land/de/kings_welcome_pack_1',
    DeLandStage: 'https://www.kingbillycasino1.com/land/de/kings_land_1',

    DeNDBStage: 'https://www.kingbillycasino1.com/land/de/ndb_2', 
    DeNodepStage: 'https://www.kingbillycasino1.com/land/de/kings_no_dep_2',

    NzWelcomeStage: 'https://www.kingbillycasino1.com/land/en-NZ/kings_welcome_pack_1',
    NzLandStage: 'https://www.kingbillycasino1.com/land/en-NZ/kings_land_1',

    NzNDBStage: 'https://www.kingbillycasino1.com/land/en-NZ/ndb_2',
    NzNoDepStage: 'https://www.kingbillycasino1.com/land/en-NZ/kings_no_dep_2'
    
}

const expectedLinks = {
    AuWelcome: 'https://www.kingbillywin20.com/land/en-AU/kings_welcome_pack_1',
    AuWorld: 'https://www.kingbillywin20.com/land/en-AU/kings_world_welcome_pack_1',

    AuNDB: 'https://www.kingbillywin20.com/land/en-AU/ndb_3', 
    AuNoDep: 'https://www.kingbillywin20.com/land/en-AU/kings_no_dep_3',

    AtWelcome: 'https://www.kingbillywin12.com/land/at/kings_welcome_pack_1',
    AtLand:  'https://www.kingbillywin12.com/land/at/kings_land_1',

    AtNDB: 'https://www.kingbillywin12.com/land/at/ndb_2',
    AtNoDep: 'https://www.kingbillywin12.com/land/at/kings_no_dep_2',

    CaWelcome: 'https://www.kingbillycasino.com/land/en-CA/kings_welcome_pack_1',
    CaLand: 'https://www.kingbillycasino.com/land/en-CA/kings_land_1', 

    CaNDB: 'https://www.kingbillycasino.com/land/en-CA/ndb_2', 
    CaNoDep: 'https://www.kingbillycasino.com/land/en-CA/kings_no_dep_2',

    DeWelcome: 'https://www.kingbillycasino12.com/land/de/kings_welcome_pack_1',
    DeLand: 'https://www.kingbillycasino12.com/land/de/kings_land_1',

    DeNDB: 'https://www.kingbillycasino12.com/land/de/ndb_2', 
    DeNodep: 'https://www.kingbillycasino12.com/land/de/kings_no_dep_2',

    NzWelcome: 'https://www.kingbillycasino.com/land/en-NZ/kings_welcome_pack_1',
    NzLand: 'https://www.kingbillycasino.com/land/en-NZ/kings_land_1',

    NzNDB: 'https://www.kingbillycasino.com/land/en-NZ/ndb_2',
    NzNoDep: 'https://www.kingbillycasino.com/land/en-NZ/kings_no_dep_2'
}

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe.skip('Registration part of the AB test', () => {
    const country = ''
    const openRegFormButton = '.main__button'
    const depositButton = '.header__deposit'
    const errorMessage = 'div.error'
    const url = redirectLinks.AuBtag
    const expectedLink = expectedLinks.AuWelcome
    const pass = '193786Az()'
    const registration = new Registration()
    


    test(`${country} Registration Test`, async () => {
        await registration.recursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: PHONE_NUMBERS.Australia,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: true,
            depositButton: depositButton,})
        
    })
    
    test(`${country} Registration Negative Test`, async () =>{
        await registration.negativeRecursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: PHONE_NUMBERS.Australia,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: true,
            errorMessage: errorMessage,
            errorText: ERROR_TEXT.EN
        })
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})
