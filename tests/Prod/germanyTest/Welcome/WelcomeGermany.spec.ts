import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { GERMANY_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import { EXPECTED_GERMANY_LINKS } from '../../../../src/Data/Germany/expectedGermanyResults';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)    
})

test.describe('A/B Welcome Germany', () => {
    
    const Abtest = new RecursiveAbTest()


        test(`DE Welcome Stag`, async () => {
            await Abtest.recursiveABTest({
                url: GERMANY_LINKS.UrlStag,
                expectedLink: EXPECTED_GERMANY_LINKS.expectedUrlWelcome, 
                expectedComparisonLink1: EXPECTED_GERMANY_LINKS.expectedUrlLand, 
                expectedComparisonLink2: EXPECTED_GERMANY_LINKS.expectedUrlWelcome, 
                expectedQuery: EXPECTED_QUERY.expectedQueryDE 
            })
        })

        test(`DE Welcome Btag`, async () => {
            await Abtest.recursiveABTest({
                url: GERMANY_LINKS.UrlBtag,
                expectedLink: EXPECTED_GERMANY_LINKS.expectedUrlWelcome, 
                expectedComparisonLink1: EXPECTED_GERMANY_LINKS.expectedUrlLand, 
                expectedComparisonLink2: EXPECTED_GERMANY_LINKS.expectedUrlWelcome, 
                expectedQuery: EXPECTED_QUERY.expectedQueryDE 
            })
        })

        test(`DE Welcome Land Stag`, async () => {
            await Abtest.recursiveABTest({
                url: GERMANY_LINKS.UrlBtag,
                expectedLink: EXPECTED_GERMANY_LINKS.expectedUrlLand, 
                expectedComparisonLink1: EXPECTED_GERMANY_LINKS.expectedUrlLand, 
                expectedComparisonLink2: EXPECTED_GERMANY_LINKS.expectedUrlWelcome, 
                expectedQuery: EXPECTED_QUERY.expectedQueryDE 
            })
        })

        test(`DE Welcome Land Btag`, async () => {
            await Abtest.recursiveABTest({
                url: GERMANY_LINKS.UrlBtag,
                expectedLink: EXPECTED_GERMANY_LINKS.expectedUrlLand, 
                expectedComparisonLink1: EXPECTED_GERMANY_LINKS.expectedUrlLand, 
                expectedComparisonLink2: EXPECTED_GERMANY_LINKS.expectedUrlWelcome, 
                expectedQuery: EXPECTED_QUERY.expectedQueryDE 
            })
        })

    test.afterAll(async () => {
        const vpnController = new VpnController()
        await vpnController.vpnDisconnect()
      
    })
})
