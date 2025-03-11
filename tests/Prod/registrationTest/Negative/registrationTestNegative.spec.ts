import { test} from "playwright/test";
import Registration from "../../../../src/methods/Registration/Registration";
import { PHONE_NUMBERS, ERROR_TEXT } from "../../../../src/Data/constants";
import { LOCATIONS } from "../../../../src/Data/constants";
import VpnController from "../../../../src/methods/VpnController/vpnController";
import { CANADA_LINKS_NDB } from "../../../../src/Data/Canada/canadaLinks";
import { EXPECTED_CANADA_LINKS_NDB } from "../../../../src/Data/Canada/expectedCanadaResults.";
import { DE_STAGE_LINKS, GERMANY_LINK_NDB, GERMANY_LINKS } from "../../../../src/Data/Germany/germanyLinks";
import { EXPECTED_GERMANY_LINKS, EXPECTED_GERMANY_NDB_LINKS } from "../../../../src/Data/Germany/expectedGermanyResults";
import { AUSTRIA_LINKNDB, AUSTRIA_LINKS_WELCOME } from "../../../../src/Data/Austria/austriaLinks";
import { EXPECTED_AUSTRIA_NDB_LINKS, EXPECTED_AUSTRIA_WELCOME_LINKS } from "../../../../src/Data/Austria/expectedAustriaLinks";
import { SWITZERLAND_LINKNDB, SWITZERLAND_LINKS_WELCOME } from "../../../../src/Data/Switzerland/switzerlandLinks";
import { EXPECTED_SWITZERLAND_NDB_LINKS, EXPECTED_SWITZERLAND_WELCOME_LINKS } from "../../../../src/Data/Switzerland/expectedSwitzerlandLinks";
import { AUSTRALIA_LINKNDB, AUSTRALIA_LINKS_WELCOME } from "../../../../src/Data/Australia/australiaLinks";
import { EXPECTED_AUSTRALIA_NDB_LINKS, EXPECTED_AUSTRALIA_WELCOME_LINKS } from "../../../../src/Data/Australia/expectedAustraliaResults";
import { NEW_ZEALAND_LINKS_NDB } from "../../../../src/Data/NewZealand/newZealandLinks";
import { EXPECTED_NEW_ZEALAND_LINKS_NDB } from "../../../../src/Data/NewZealand/expectedNewZealandResults";
import { fa } from "@faker-js/faker/.";




test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Switzerland)
})
    


test.describe('Negative Registration Prod', () => {

    const country = 'CH'
    const typeA = 'Welcome'
    const typeB = 'Land'
    const typeAOpenRegFormLocator = '.offer_block-button'
    const typeBOpenRegFormLocator = '.offer_block-button'
    const errorText = ERROR_TEXT.DE
    const errorMessage = `div.error`
    const registration = new Registration()
    const phoneNumbers = PHONE_NUMBERS.Switzerland

        test.describe(`Registration Negative ${country}`, async () => {

        test(`${country} Negative Registration Test ${typeA} Btag`, async () => {
            const openRegFormButton = typeAOpenRegFormLocator
            const url = SWITZERLAND_LINKS_WELCOME.Btag
            const expectedLink = EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome
            const is3step = false


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
            const url = SWITZERLAND_LINKS_WELCOME.Stag
            const expectedLink = EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome
            const is3step = false


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
            const url = SWITZERLAND_LINKS_WELCOME.Btag
            const expectedLink = EXPECTED_SWITZERLAND_WELCOME_LINKS.Land
            const is3step = false


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
            const url = SWITZERLAND_LINKS_WELCOME.Stag
            const expectedLink = EXPECTED_SWITZERLAND_WELCOME_LINKS.Land
            const is3step = false

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
