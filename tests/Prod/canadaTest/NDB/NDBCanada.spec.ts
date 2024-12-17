import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { CANADA_LINKS, CANADA_LINKS_NDB } from '../../../../src/Data/Canada/canadaLinks';
import { EXPECTED_CANADA_LINKS_NDB } from '../../../../src/Data/Canada/expectedCanadaResults.';

    
test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Canada)
})
    

test.describe('A/B test NDB Canada', () => {
    const Abtest = new RecursiveAbTest()

        test('CA NDB Stag', async () => {
            await Abtest.recursiveABTest({
                url: CANADA_LINKS_NDB.Stag,
                expectedLink: EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB, 
                expectedComparisonLink1: EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB, 
                expectedComparisonLink2: EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep, 
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB 
            })
        })

        test('CA NDB Btag', async () => {
            await Abtest.recursiveABTest({
                url: CANADA_LINKS_NDB.Btag,
                expectedLink: EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB, 
                expectedComparisonLink1: EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB, 
                expectedComparisonLink2: EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep, 
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB 
            })
        })

        test('CA NoDep Stag', async () => {
            await Abtest.recursiveABTest({
                url: CANADA_LINKS_NDB.Stag,
                expectedLink: EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep, 
                expectedComparisonLink1: EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB, 
                expectedComparisonLink2: EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep, 
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB 
            })
        })

        test('CA NoDep Btag', async () => {
            await Abtest.recursiveABTest({
                url: CANADA_LINKS_NDB.Btag,
                expectedLink: EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep, 
                expectedComparisonLink1: EXPECTED_CANADA_LINKS_NDB.expectedUrlNDB, 
                expectedComparisonLink2: EXPECTED_CANADA_LINKS_NDB.expectedUrlNoDep, 
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB 
            })
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})