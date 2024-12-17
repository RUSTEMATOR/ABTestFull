import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { SWITZERLAND_LINKNDB } from '../../../../src/Data/Switzerland/switzerlandLinks';
import { EXPECTED_SWITZERLAND_NDB_LINKS } from '../../../../src/Data/Switzerland/expectedSwitzerlandLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Switzerland)
})

test.describe('CH', async () => {
    
        test.describe('A/B NDB CH', async  () => {
        
            const Abtest = new RecursiveAbTest()

            test('CH NoDep Stag', async () => {
                await Abtest.recursiveABTest({
                    url: SWITZERLAND_LINKNDB.Stag,
                    expectedLink: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB 
                })
            })

            test('CH NDB Stag', async () => {
                await Abtest.recursiveABTest({
                    url: SWITZERLAND_LINKNDB.Stag,
                    expectedLink: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB 
                })
            })

            test('CH NoDep Btag', async () => {
                await Abtest.recursiveABTest({
                    url: SWITZERLAND_LINKNDB.Btag,
                    expectedLink: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB 
                })
            })

            test('CH NDB Btag', async () => {
                await Abtest.recursiveABTest({
                    url: SWITZERLAND_LINKNDB.Btag,
                    expectedLink: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_SWITZERLAND_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryCHNDB 
                })
            })

        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})