
import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { AUSTRALIA_LINKS_WELCOME } from '../../../../src/Data/Australia/australiaLinks';
import { EXPECTED_AUSTRALIA_WELCOME_LINKS } from '../../../../src/Data/Australia/expectedAustraliaResults';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
    
   
})


test.describe('A/B Welcome Australia', async  () => {
   
    const Abtest = new RecursiveAbTest()
    

    test('AU Welcome Stag', async () => {    
        await Abtest.recursiveABTest({
            url: AUSTRALIA_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRALIA_WELCOME_LINKS.World, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('AU Welcome Btag', async () => {
        await Abtest.recursiveABTest({
            url: AUSTRALIA_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRALIA_WELCOME_LINKS.World, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('AU Welcome Land Stag', async () => {
        await Abtest.recursiveABTest({
            url: AUSTRALIA_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_AUSTRALIA_WELCOME_LINKS.World, 
            expectedComparisonLink1: EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRALIA_WELCOME_LINKS.World, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('AU Welcome Land Btag', async () => {
        await Abtest.recursiveABTest({
            url: AUSTRALIA_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_AUSTRALIA_WELCOME_LINKS.World, 
            expectedComparisonLink1: EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRALIA_WELCOME_LINKS.World, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})