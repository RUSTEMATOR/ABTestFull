import { test} from "playwright/test";
import Registration from "../../../../src/methods/Registration/Registration";
import { PHONE_NUMBERS, ERROR_TEXT } from "../../../../src/Data/constants";
import { LOCATIONS } from "../../../../src/Data/constants";
import VpnController from "../../../../src/methods/VpnController/vpnController";
import { CANADA_LINKS_NDB } from "../../../../src/Data/Canada/canadaLinks";
import { EXPECTED_CANADA_LINKS_NDB } from "../../../../src/Data/Canada/expectedCanadaResults.";
import { GERMANY_LINK_NDB } from "../../../../src/Data/Germany/germanyLinks";
import { EXPECTED_GERMANY_NDB_LINKS } from "../../../../src/Data/Germany/expectedGermanyResults";
import { AUSTRIA_LINKNDB } from "../../../../src/Data/Austria/austriaLinks";
import { EXPECTED_AUSTRALIA_NDB_LINKS } from "../../../../src/Data/Australia/expectedAustraliaResults";
import { EXPECTED_AUSTRIA_NDB_LINKS } from "../../../../src/Data/Austria/expectedAustriaLinks";
import { SWITZERLAND_LINKNDB } from "../../../../src/Data/Switzerland/switzerlandLinks";
import { EXPECTED_SWITZERLAND_NDB_LINKS } from "../../../../src/Data/Switzerland/expectedSwitzerlandLinks";



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Switzerland)
})
    


test.describe('Registration part Stage', () => {

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
        const url = SWITZERLAND_LINKNDB.Btag
        const expectedLink = EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB
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
        const url = SWITZERLAND_LINKNDB.Stag
        const expectedLink = EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB
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
        const url = SWITZERLAND_LINKNDB.Btag
        const expectedLink = EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep
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
        const url = SWITZERLAND_LINKNDB.Stag
        const expectedLink = EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep
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
    await vpnController.vpnDisconnect()
})
