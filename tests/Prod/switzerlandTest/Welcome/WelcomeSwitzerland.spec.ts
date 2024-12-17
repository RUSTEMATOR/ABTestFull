import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { SWITZERLAND_LINKS_WELCOME } from '../../../../src/Data/Switzerland/switzerlandLinks';
import { EXPECTED_SWITZERLAND_WELCOME_LINKS } from '../../../../src/Data/Switzerland/expectedSwitzerlandLinks';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Switzerland)
    
   
})


test.describe('A/B Welcome CH', async  () => {
   
    const Abtest = new RecursiveAbTest()
    

    test('CH Welcome Stag', async () => {    
        await Abtest.recursiveABTest({
            url: SWITZERLAND_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_SWITZERLAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryCH 
        })
    })

    test('CH Welcome Btag', async () => {
        await Abtest.recursiveABTest({
            url: SWITZERLAND_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_SWITZERLAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryCH 
        })
    })

    test('CH Welcome Land Stag', async () => {
        await Abtest.recursiveABTest({
            url: SWITZERLAND_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_SWITZERLAND_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_SWITZERLAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryCH 
        })
    })

    test('CH Welcome Land Btag', async () => {
        await Abtest.recursiveABTest({
            url: SWITZERLAND_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_SWITZERLAND_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_SWITZERLAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_SWITZERLAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryCH 
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})