import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { GERMANY_LINK_NDB } from '../../../../src/Data/Germany/germanyLinks';
import { EXPECTED_GERMANY_NDB_LINKS } from '../../../../src/Data/Germany/expectedGermanyResults';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)
})

test.describe('A/B NDB Germany', () => {
    
    const Abtest = new RecursiveAbTest()

    test('DE NoDep Stag', async () => {
        await Abtest.recursiveABTest({
            url: GERMANY_LINK_NDB.Stag,
            expectedLink: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep, 
            expectedComparisonLink1: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQuerryDENDB 
        })
    })

    test('DE NDB Stag', async () => {
        await Abtest.recursiveABTest({
            url: GERMANY_LINK_NDB.Stag,
            expectedLink: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, 
            expectedComparisonLink1: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQuerryDENDB 
        })
    })

    test('DE NoDep Btag', async () => {
        await Abtest.recursiveABTest({
            url: GERMANY_LINK_NDB.Btag,
            expectedLink: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep, 
            expectedComparisonLink1: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQuerryDENDB 
        })
    })

    test('DE NDB Btag', async () => {
        await Abtest.recursiveABTest({
            url: GERMANY_LINK_NDB.Btag,
            expectedLink: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, 
            expectedComparisonLink1: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQuerryDENDB 
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})