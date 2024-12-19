import { test} from "playwright/test";
import Registration from "../../../../src/methods/Registration/Registration";
import { PHONE_NUMBERS, ERROR_TEXT } from "../../../../src/Data/constants";
import { LOCATIONS } from "../../../../src/Data/constants";
import VpnController from "../../../../src/methods/VpnController/vpnController";
import { CA_STAGE_LINKS } from "../../../../src/Data/Canada/canadaLinks";
import { EXPECTED_CANADA_STAGE_NDB_LINKS } from "../../../../src/Data/Canada/expectedCanadaResults.";
import { AT_STAGE_LINKS } from "../../../../src/Data/Austria/austriaLinks";
import { EXPECTED_AUSTRIA_STAGE_NDB_LINKS } from "../../../../src/Data/Austria/expectedAustriaLinks";
import { CH_STAGE_LINKS } from "../../../../src/Data/Switzerland/switzerlandLinks";
import { EXPECTED_SWITZERLAND_STAGE_NDB_LINKS } from "../../../../src/Data/Switzerland/expectedSwitzerlandLinks";



test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Switzerland)
})
    


test.describe('Registration part of the AB test', () => {

    const country = 'CH'
    const typeA = 'NDB'
    const typeB = 'NoDep'
    const typeAOpenRegFormLocator = '.offer__button'
    const typeBOpenRegFormLocator = '.main__button'
    const registration = new Registration()
    const phoneNumbers = PHONE_NUMBERS.Switzerland

    test.describe(`${country}`, async () => {

    test(`${country} Registration Test ${typeA} Btag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const depositButton = '.header__deposit'
        const url = CH_STAGE_LINKS.NDBbtag
        const expectedLink = EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB
        const is3step = true


        await registration.recursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step,
            depositButton: depositButton,})
        
    })

    test(`${country} Registration Test ${typeA} Stag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const depositButton = '.header__deposit'
        const url = CH_STAGE_LINKS.NDBstag
        const expectedLink = EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB
        const is3step = true


        await registration.recursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step,
            depositButton: depositButton,})
        
    })

    test(`${country} Registration Test ${typeB} Btag`, async () => {
        const openRegFormButton = typeBOpenRegFormLocator
        const depositButton = '.header__deposit'
        const url = CH_STAGE_LINKS.NDBbtag
        const expectedLink = EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep
        const is3step = true


        await registration.recursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step,
            depositButton: depositButton,})
        
    })

    test(`${country} Registration Test ${typeB} Stag`, async () => {
        const openRegFormButton = typeBOpenRegFormLocator
        const depositButton = '.header__deposit'
        const url = CH_STAGE_LINKS.NDBstag
        const expectedLink = EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep
        const is3step = true


        await registration.recursiveRegistration({url: url,
            expectedLocator: openRegFormButton,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step,
            depositButton: depositButton,})
        
    })

})

})



test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})
