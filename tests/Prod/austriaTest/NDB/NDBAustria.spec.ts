import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { AUSTRIA_LINKNDB } from '../../../../src/Data/Austria/austriaLinks';
import { EXPECTED_AUSTRIA_NDB_LINKS } from '../../../../src/Data/Austria/expectedAustriaLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Austria)
})

test.describe('AT', async () => {
    
        test.describe('A/B NDB AT', async  () => {
        
            const Abtest = new RecursiveAbTest()

            test('AT NoDep Stag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRIA_LINKNDB.Stag,
                    expectedLink: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

            test('AT NDB Stag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRIA_LINKNDB.Stag,
                    expectedLink: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

            test('AT NoDep Btag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRIA_LINKNDB.Btag,
                    expectedLink: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

            test('AT NDB Btag', async () => {
                await Abtest.recursiveABTest({
                    url: AUSTRIA_LINKNDB.Btag,
                    expectedLink: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_AUSTRIA_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})