import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { NEW_ZEALAND_LINKS_NDB } from '../../../../src/Data/NewZealand/newZealandLinks';
import {EXPECTED_NEW_ZEALAND_LINKS_NDB } from '../../../../src/Data/NewZealand/expectedNewZealandResults';
test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})


test.describe('A/B NZ NDB', () => {
    const Abtest = new RecursiveAbTest()

    test('NZ NDB stag', async () => {
            await Abtest.recursiveABTest({
            url: NEW_ZEALAND_LINKS_NDB.Stag,
            expectedLink: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, 
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB 
        })
    })

    test('NZ NDB Btag', async () => {
        await Abtest.recursiveABTest({
            url: NEW_ZEALAND_LINKS_NDB.Btag,
            expectedLink: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, 
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB 
        })
    })

    test('NZ No dep Stag', async () => {
        await Abtest.recursiveABTest({
            url: NEW_ZEALAND_LINKS_NDB.Stag,
            expectedLink: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, 
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB 
        })
    })

    test('NZ No dep Btag', async () => {
        await Abtest.recursiveABTest({
            url: NEW_ZEALAND_LINKS_NDB.Btag,
            expectedLink: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, 
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, 
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, 
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB 
        })
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})