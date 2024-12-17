import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { CANADA_LINKS } from '../../../../src/Data/Canada/canadaLinks';
import { EXPECTED_CANADA_LINKS } from '../../../../src/Data/Canada/expectedCanadaResults.';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Canada)
})
    

test.describe('A/B test Welcome Canada', () => {
    const vpnController = new VpnController()
    const Abtest = new RecursiveAbTest()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`CA Welcome Stag`, async () => {
            await Abtest.recursiveABTest({
                    url: CANADA_LINKS.UrlStag,
                    expectedLink: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                    expectedComparisonLink1: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                    expectedComparisonLink2: EXPECTED_CANADA_LINKS.expectedUrlLand, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryCA 
                })
            })
        
        test(`CA Welcome Land Stag`, async () => {
            await Abtest.recursiveABTest({
                    url: CANADA_LINKS.UrlStag,
                    expectedLink: EXPECTED_CANADA_LINKS.expectedUrlLand, 
                    expectedComparisonLink1: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                    expectedComparisonLink2: EXPECTED_CANADA_LINKS.expectedUrlLand, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryCA 
                })
            })

        test(`CA Welcome Btag`, async () => {
            await Abtest.recursiveABTest({
                url: CANADA_LINKS.UrlBtag,
                expectedLink: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                expectedComparisonLink1: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                expectedComparisonLink2: EXPECTED_CANADA_LINKS.expectedUrlLand, 
                expectedQuery: EXPECTED_QUERY.expectedQueryCA 
            })
            })
        
        test(`CA Welcome Land Btag`, async () => {
            await Abtest.recursiveABTest({
                url: CANADA_LINKS.UrlBtag,
                expectedLink: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                expectedComparisonLink1: EXPECTED_CANADA_LINKS.expectedUrlWelcome, 
                expectedComparisonLink2: EXPECTED_CANADA_LINKS.expectedUrlLand, 
                expectedQuery: EXPECTED_QUERY.expectedQueryCA 
            })
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})