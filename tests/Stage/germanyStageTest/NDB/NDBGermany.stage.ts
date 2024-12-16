import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_GERMANY_STAGE_NDB_LINKS } from '../../../../src/Data/Germany/expectedGermanyResults';




test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)

})

test.describe('A/B DE NDB', () => {
    const ABtest = new RecursiveAbTest()

    test('DE NoDep Stag', async () => {
        await ABtest.recursiveABTest({
            url: DE_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })

    test('DE NDB Stag', async () => {
        await ABtest.recursiveABTest({
            url: DE_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })

    test('DE NoDep Btag', async () => {
        await ABtest.recursiveABTest({
            url: DE_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })

    test('DE NDB Btag', async () => {
        await ABtest.recursiveABTest({
            url: DE_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_GERMANY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})
