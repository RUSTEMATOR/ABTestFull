
import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { AUSTRALIA_LINKNDB } from '../../../../src/Data/Australia/australiaLinks';
import { EXPECTED_AUSTRALIA_NDB_LINKS } from '../../../../src/Data/Australia/expectedAustraliaResults';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
})

test.describe.only('Australia', async () => {
    
        test.describe('A/B NDB Australia', async  () => {
        
            const Abtest = new RecursiveAbTest()

            test('AU NoDep Stag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRALIA_LINKNDB.Stag,
                    expectedLink: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB 
                })
            })

            test('AU NDB Stag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRALIA_LINKNDB.Stag,
                    expectedLink: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB 
                })
            })

            test('AU NoDep Btag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRALIA_LINKNDB.Btag,
                    expectedLink: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB 
                })
            })

            test('AU NDB Btag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRALIA_LINKNDB.Btag,
                    expectedLink: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB 
                })
            })

        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})

