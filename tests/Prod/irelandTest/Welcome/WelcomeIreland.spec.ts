import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { IRELAND_LINKS_WELCOME } from '../../../../src/Data/Ireland/irelandLinks';
import { EXPECTED_IRELAND_WELCOME_LINKS } from '../../../../src/Data/Ireland/expectedIrelandLinks';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Ireland)
    
   
})


test.describe('A/B Welcome IE', async  () => {
   
    const Abtest = new RecursiveAbTest()
    

    test('IE Welcome Stag', async () => {    
        await Abtest.recursiveABTest({
            url: IRELAND_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_IRELAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_IRELAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_IRELAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryIE 
        })
    })

    test('IE Welcome Btag', async () => {
        await Abtest.recursiveABTest({
            url: IRELAND_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_IRELAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink1: EXPECTED_IRELAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_IRELAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryIE 
        })
    })

    test('IE Welcome Land Stag', async () => {
        await Abtest.recursiveABTest({
            url: IRELAND_LINKS_WELCOME.Stag,
            expectedLink: EXPECTED_IRELAND_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_IRELAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_IRELAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryIE 
        })
    })

    test('IE Welcome Land Btag', async () => {
        await Abtest.recursiveABTest({
            url: IRELAND_LINKS_WELCOME.Btag,
            expectedLink: EXPECTED_IRELAND_WELCOME_LINKS.Land, 
            expectedComparisonLink1: EXPECTED_IRELAND_WELCOME_LINKS.Welcome, 
            expectedComparisonLink2: EXPECTED_IRELAND_WELCOME_LINKS.Land, 
            expectedQuery: EXPECTED_QUERY.expectedQueryIE 
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})