import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { CA_STAGE_LINKS } from '../../../../src/Data/Canada/canadaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_CANADA_STAGE_NDB_LINKS } from '../../../../src/Data/Canada/expectedCanadaResults.';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA NDB', () => {
    const ABtest = new RecursiveAbTest()

        test('CA NDB Stag', async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.NDBstag,
                expectedLink: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep,
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB
            })
        })

        test('CA NDB Btag', async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.NDBbtag,
                expectedLink: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep,
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB
            })
        })

        test('CA NoDep Stag', async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.NDBstag,
                expectedLink: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep,
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB
            })
        })

        test('CA NoDep Btag', async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.NDBbtag,
                expectedLink: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNDB ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_NDB_LINKS.expectedUrlNoDep,
                expectedQuery: EXPECTED_QUERY.expectedQueryCANDB
            })
        })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})