import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { NORWAY_LINKS_WELCOME } from '../../../../src/Data/Norway/norwayLinks';
import { EXPECTED_NORWAY_WELCOME_LINKS } from '../../../../src/Data/Norway/expectedNorwayLinks';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Norway)
    
   
})


test.describe('A/B Welcome NO', async  () => {
   
    const Abtest = new RecursiveAbTest()
    

    test('NO Welcome Stag', async () => {    
        await Abtest.recursiveABTest({
            url: NORWAY_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_NORWAY_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_NORWAY_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_NORWAY_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('NO Welcome Btag', async () => {
        await Abtest.recursiveABTest({
            url: NORWAY_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_NORWAY_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_NORWAY_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_NORWAY_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('NO Welcome Land Stag', async () => {
        await Abtest.recursiveABTest({
            url: NORWAY_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_NORWAY_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_NORWAY_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_NORWAY_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

    test('NO Welcome Land Btag', async () => {
        await Abtest.recursiveABTest({
            url: NORWAY_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_NORWAY_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_NORWAY_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_NORWAY_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryAU 
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})