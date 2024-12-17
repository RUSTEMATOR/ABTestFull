import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { AT_STAGE_LINKS } from '../../../../src/Data/Austria/austriaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_AUSTRIA_STAGE_NDB_LINKS } from '../../../../src/Data/Austria/expectedAustriaLinks';



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Austria)
   
})

test.describe('A/B NDB AT Stage', () => {
    const ABtest = new RecursiveAbTest()
    

    test('AT NoDep Stag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryATNDB
        })
        
    })

    test('AT NDB Stag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryATNDB
        })
    })

    test('AT NoDep Btag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryATNDB
        })
    })

    test('AT NDB Btag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryATNDB
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})
