import {BrowserContext, chromium, test} from "playwright/test";
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
import { AU_STAGE_LINKS, AUSTRALIA_LINKNDB } from "../../../../src/Data/Australia/australiaLinks";
import { EXPECTED_AUSTRALIA_STAGE_NDB_LINKS, EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS } from "../../../../src/Data/Australia/expectedAustraliaResults";
import { EXPECTED_GERMANY_STAGE_NDB_LINKS } from "../../../../src/Data/Germany/expectedGermanyResults";
import { DE_STAGE_LINKS } from "../../../../src/Data/Germany/germanyLinks";
import { NZ_STAGE_LINKS } from "../../../../src/Data/NewZealand/newZealandLinks";
import { EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS } from "../../../../src/Data/NewZealand/expectedNewZealandResults";



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)
})
    


test.describe('Negative Registration part of the AB test Stage', () => {

    const country = 'DE'
    const typeA = 'NDB'
    const typeB = 'NoDep'
    const typeAOpenRegFormLocator = '.offer__button'
    const typeBOpenRegFormLocator = '.main__button'
    const errorText = ERROR_TEXT.DE
    const errorMessage = `div.error`
    const registration = new Registration()
    const phoneNumbers = PHONE_NUMBERS.Germany

    test.describe(`Registration Negative ${country}`, async () => {

    test(`${country} Negative Registration Test ${typeA} Btag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const url = DE_STAGE_LINKS.NDBbtag
        const expectedLink = EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB
        const is3step = true


        await registration.negativeRecursiveRegistration({url: url,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step, 
            errorMessage: errorMessage,
            errorText: errorText})
        
    })

    test(`${country} Negative Registration Test ${typeA} Stag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const url = DE_STAGE_LINKS.NDBstag
        const expectedLink = EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB
        const is3step = true


        await registration.negativeRecursiveRegistration({url: url,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step, 
            errorMessage: errorMessage,
            errorText: errorText})
        
    })

    test(`${country} Negative Registration Test ${typeB} Btag`, async () => {
        const openRegFormButton = typeBOpenRegFormLocator
        const url = DE_STAGE_LINKS.NDBbtag
        const expectedLink = EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep
        const is3step = true


        await registration.negativeRecursiveRegistration({url: url,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step, 
            errorMessage: errorMessage,
            errorText: errorText})
        
    })

    test(`${country} Negative Registration Test ${typeB} Stag`, async () => {
        const openRegFormButton = typeBOpenRegFormLocator
        const url = DE_STAGE_LINKS.NDBstag
        const expectedLink = EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep
        const is3step = true


        await registration.negativeRecursiveRegistration({url: url,
            PHONE_NUMBERS: phoneNumbers,
            expectedLink: expectedLink,
            openRegFormButton: openRegFormButton,
            is3step: is3step, 
            errorMessage: errorMessage,
            errorText: errorText})
        
    })
})

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})
