import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { IRELAND_LINKNDB } from '../../../../src/Data/Ireland/irelandLinks';
import { EXPECTED_IRELAND_NDB_LINKS } from '../../../../src/Data/Ireland/expectedIrelandLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Ireland)
})

test.describe('IE', async () => {
    
        test.describe('A/B NDB IE', async  () => {
        
            const Abtest = new RecursiveAbTest()

            test('IE NoDep Stag', async () => {
                await Abtest.recursiveABTest({
                    url: IRELAND_LINKNDB.Stag,
                    expectedLink: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryIENDB 
                })
            })

            test('IE NDB Stag', async () => {
                await Abtest.recursiveABTest({
                    url: IRELAND_LINKNDB.Stag,
                    expectedLink: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryIENDB 
                })
            })

            test('IE NoDep Btag', async () => {
                await Abtest.recursiveABTest({
                    url: IRELAND_LINKNDB.Btag,
                    expectedLink: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryIENDB 
                })
            })

            test('IE NDB Btag', async () => {
                await Abtest.recursiveABTest({
                    url: IRELAND_LINKNDB.Btag,
                    expectedLink: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_IRELAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryIENDB 
                })
            })

        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})