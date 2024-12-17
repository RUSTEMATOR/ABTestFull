import {BrowserContext, chromium, test} from "playwright/test";
import Registration from "../../../src/methods/Registration/Registration";
import { ERROR_TEXT, PHONE_NUMBERS } from "../../../src/Data/constants";
import { LOCATIONS } from "../../../src/Data/constants";
import VpnController from "../../../src/methods/VpnController/vpnController";
import { promiseHooks } from "v8";



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


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)
})
    


test.describe.skip('Registration part of the AB test', () => {
    const country = ''
    const openRegFormButton = '.main__button'
    const depositButton = '.header__deposit'
    const url = stageRedirectLinks.DeNDBBtag
    const expectedLink = stageExpectedLinks.DeNDBStage
    const pass = '193786Az()'
    const registration = new Registration()
    const errorMessage = 'div.error'
    const errorText = ERROR_TEXT.DE
    const phoneNumbers = PHONE_NUMBERS.Germany
    const is3step = true

    test(`${country} Registration Test`, async () => {
        await registration.recursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step,
            depositButton: depositButton,})
        
    })

    test(`${country} Registration Negative Test`, async () =>{
            await registration.negativeRecursiveRegistration({url: url,
                expectedLocator: openRegFormButton,
                PHONE_NUMBERS: phoneNumbers,
                expectedLink: expectedLink,
                openRegFormButton: openRegFormButton,
                is3step: is3step,
                errorMessage: errorMessage,
                errorText: errorText
            })
        })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})
