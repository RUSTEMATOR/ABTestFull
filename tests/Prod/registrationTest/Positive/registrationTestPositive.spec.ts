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
import { EXPECTED_AUSTRALIA_NDB_LINKS, EXPECTED_AUSTRALIA_WELCOME_LINKS } from "../../../../src/Data/Australia/expectedAustraliaResults";
import { EXPECTED_AUSTRIA_NDB_LINKS } from "../../../../src/Data/Austria/expectedAustriaLinks";
import { SWITZERLAND_LINKNDB } from "../../../../src/Data/Switzerland/switzerlandLinks";
import { EXPECTED_SWITZERLAND_NDB_LINKS } from "../../../../src/Data/Switzerland/expectedSwitzerlandLinks";
import { AUSTRALIA_LINKS_WELCOME } from "../../../../src/Data/Australia/australiaLinks";
import { NEW_ZEALAND_LINKS_NDB } from "../../../../src/Data/NewZealand/newZealandLinks";
import { EXPECTED_NEW_ZEALAND_LINKS_NDB } from "../../../../src/Data/NewZealand/expectedNewZealandResults";


    


test.describe('Registration part Prod', () => {

    const country = 'DE'
    const typeA = 'NDB'
    const typeB = 'NoDep'
    const typeAOpenRegFormLocator = '.offer__button'
    const typeBOpenRegFormLocator = '.main__button'
    const registration = new Registration()
    const phoneNumbers = PHONE_NUMBERS.Germany

    test.describe(`Registration ${country}`, async () => {

        test.beforeAll(async () => {
            const vpnController = new VpnController()
            await vpnController.vpnConnnect(LOCATIONS.Germany)
        })

    test(`${country} Registration Test ${typeA} Btag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const depositButton = '.header__deposit'
        const url = GERMANY_LINK_NDB.Btag
        const expectedLink = EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB
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
        const url = GERMANY_LINK_NDB.Stag
        const expectedLink = EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB
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
        const url = GERMANY_LINK_NDB.Btag
        const expectedLink = EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep
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
        const url = GERMANY_LINK_NDB.Stag
        const expectedLink = EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep
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

    test.afterAll(async () => {
        const vpnController = new VpnController()
        await vpnController.vpnDisconnect()
    })

})




