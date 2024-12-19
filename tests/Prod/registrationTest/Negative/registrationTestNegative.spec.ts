import { test} from "playwright/test";
import Registration from "../../../../src/methods/Registration/Registration";
import { PHONE_NUMBERS, ERROR_TEXT } from "../../../../src/Data/constants";
import { LOCATIONS } from "../../../../src/Data/constants";
import VpnController from "../../../../src/methods/VpnController/vpnController";
import { CANADA_LINKS_NDB } from "../../../../src/Data/Canada/canadaLinks";
import { EXPECTED_CANADA_LINKS_NDB } from "../../../../src/Data/Canada/expectedCanadaResults.";




test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Canada)
})
    


test.describe('Registration part of the AB test', () => {

    const country = 'CA'
    const typeA = 'NDB'
    const typeB = 'NoDep'
    const typeAOpenRegFormLocator = '.offer__button'
    const typeBOpenRegFormLocator = '.main__button'
    const errorText = ERROR_TEXT.EN
    const errorMessage = `div.error`
    const registration = new Registration()
    const phoneNumbers = PHONE_NUMBERS.Canada

    test(`${country} Negative Registration Test ${typeA} Btag`, async () => {
        const openRegFormButton = typeAOpenRegFormLocator
        const url = CANADA_LINKS_NDB.Btag
        const expectedLink = EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB
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
        const url = CANADA_LINKS_NDB.Stag
        const expectedLink = EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB
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
        const url = CANADA_LINKS_NDB.Btag
        const expectedLink = EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep
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
        const url = CANADA_LINKS_NDB.Stag
        const expectedLink = EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep
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



test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})
