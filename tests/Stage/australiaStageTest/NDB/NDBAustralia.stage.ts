import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsAU from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsAU';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_AUSTRIA_STAGE_NDB_LINKS, EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS } from '../../../../src/Data/Austria/expectedAustriaLinks';
import { EXPECTED_AUSTRALIA_STAGE_NDB_LINKS } from '../../../../src/Data/Australia/expectedAustraliaResults';



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
   
})

test.describe('A/B NDB AU Stage', () => {
    const ABtest = new RecursiveAbTest()
    

    test('AU NoDep Stag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
        
    })

    test('AU NDB Stag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })

    test('AU NoDep Btag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })

    test('AU NDB Btag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})
