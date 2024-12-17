import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { NO_STAGE_LINKS } from '../../../../src/Data/Norway/norwayLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_NORWAY_STAGE_NDB_LINKS } from '../../../../src/Data/Norway/expectedNorwayLinks';



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Norway)
   
})

test.describe('A/B NDB NO Stage', () => {
    const ABtest = new RecursiveAbTest()
    

    test('NO NoDep Stag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNONDB
        })
        
    })

    test('NO NDB Stag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNONDB
        })
    })

    test('NO NoDep Btag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNONDB
        })
    })

    test('NO NDB Btag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNONDB
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})
