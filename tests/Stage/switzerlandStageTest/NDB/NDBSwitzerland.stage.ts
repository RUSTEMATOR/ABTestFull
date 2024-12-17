import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { CH_STAGE_LINKS } from '../../../../src/Data/Switzerland/switzerlandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_SWITZERLAND_STAGE_NDB_LINKS } from '../../../../src/Data/Switzerland/expectedSwitzerlandLinks';



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Switzerland)
   
})

test.describe('A/B NDB CH Stage', () => {
    const ABtest = new RecursiveAbTest()
    

    test('CH NoDep Stag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB
        })
        
    })

    test('CH NDB Stag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB
        })
    })

    test('CH NoDep Btag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB
        })
    })

    test('CH NDB Btag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})
