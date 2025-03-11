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
import { EXPECTED_SWITZERLAND_NDB_LINKS, EXPECTED_SWITZERLAND_STAGE_NDB_LINKS } from "../../../../src/Data/Switzerland/expectedSwitzerlandLinks";
import { AU_STAGE_LINKS, AUSTRALIA_LINKNDB } from "../../../../src/Data/Australia/australiaLinks";
import { EXPECTED_AUSTRALIA_STAGE_NDB_LINKS, EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS } from "../../../../src/Data/Australia/expectedAustraliaResults";
import { DE_STAGE_LINKS } from "../../../../src/Data/Germany/germanyLinks";
import { EXPECTED_GERMANY_STAGE_NDB_LINKS } from "../../../../src/Data/Germany/expectedGermanyResults";
import { NZ_STAGE_LINKS } from "../../../../src/Data/NewZealand/newZealandLinks";
import { EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS } from "../../../../src/Data/NewZealand/expectedNewZealandResults";



test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})
    


test.describe('Registration part of the AB test', () => {

    const country = 'CA'
    const typeA = 'NDB'
    const typeB = 'Nodep'
    const typeAOpenRegFormLocator = '.offer__button'
    const typeBOpenRegFormLocator = '.main__button'
    const registration = new Registration()
    const phoneNumbers = PHONE_NUMBERS.Canada

    test.describe(`Registration ${country}`, async () => {

    test(`${country} Registration Test ${typeA} Btag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const depositButton = '.header__deposit'
        const url = CA_STAGE_LINKS.NDBbtag
        const expectedLink = EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB
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
        const url = CA_STAGE_LINKS.NDBstag
        const expectedLink = EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB
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
        const url = CA_STAGE_LINKS.NDBbtag
        const expectedLink = EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep
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
        const url = CA_STAGE_LINKS.NDBstag
        const expectedLink = EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep
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
