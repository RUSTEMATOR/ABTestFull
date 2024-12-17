import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { NORWAY_LINKNDB } from '../../../../src/Data/Norway/norwayLinks';
import { EXPECTED_NORWAY_NDB_LINKS } from '../../../../src/Data/Norway/expectedNorwayLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Norway)
})

test.describe('NO', async () => {
    
        test.describe('A/B NDB NO', async  () => {
        
            const Abtest = new RecursiveAbTest()

            test('NO NoDep Stag', async () => {
                await Abtest.recursiveABTest({
                    url: NORWAY_LINKNDB.Stag,
                    expectedLink: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

            test('NO NDB Stag', async () => {
                await Abtest.recursiveABTest({
                    url: NORWAY_LINKNDB.Stag,
                    expectedLink: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

            test('NO NoDep Btag', async () => {
                await Abtest.recursiveABTest({
                    url: NORWAY_LINKNDB.Btag,
                    expectedLink: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNoDep, 
                    expectedComparisonLink1: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

            test('NO NDB Btag', async () => {
                await Abtest.recursiveABTest({
                    url: NORWAY_LINKNDB.Btag,
                    expectedLink: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink1: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNDB, 
                    expectedComparisonLink2: EXPECTED_NORWAY_NDB_LINKS.expectedUrlNoDep, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryATNDB 
                })
            })

        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})