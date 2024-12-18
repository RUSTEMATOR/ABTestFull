import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { IE_STAGE_LINKS } from '../../../../src/Data/Ireland/irelandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_IRELAND_STAGE_NDB_LINKS } from '../../../../src/Data/Ireland/expectedIrelandLinks';



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Ireland)
   
})

test.describe('A/B NDB IE Stage', () => {
    const ABtest = new RecursiveAbTest()
    

    test('IE NoDep Stag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryIENDB
        })
        
    })

    test('IE NDB Stag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryIENDB
        })
    })

    test('IE NoDep Btag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryIENDB
        })
    })

    test('IE NDB Btag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryIENDB
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})
