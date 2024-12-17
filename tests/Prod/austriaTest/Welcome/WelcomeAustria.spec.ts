import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { AUSTRIA_LINKS_WELCOME } from '../../../../src/Data/Austria/austriaLinks';
import { EXPECTED_AUSTRIA_WELCOME_LINKS } from '../../../../src/Data/Austria/expectedAustriaLinks';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Austria)
    
   
})


test.describe('A/B Welcome AT', async  () => {
   
    const Abtest = new RecursiveAbTest()
    

    test('AT Welcome Stag', async () => {    
        await Abtest.recursiveABTest({
            url: AUSTRIA_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_AUSTRIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_AUSTRIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRIA_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('AT Welcome Btag', async () => {
        await Abtest.recursiveABTest({
            url: AUSTRIA_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_AUSTRIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_AUSTRIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRIA_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('AT Welcome Land Stag', async () => {
        await Abtest.recursiveABTest({
            url: AUSTRIA_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_AUSTRIA_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_AUSTRIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRIA_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('AT Welcome Land Btag', async () => {
        await Abtest.recursiveABTest({
            url: AUSTRIA_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_AUSTRIA_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_AUSTRIA_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_AUSTRIA_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})