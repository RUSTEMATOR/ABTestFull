import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { NZ_STAGE_LINKS } from '../../../../src/Data/NewZealand/newZealandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS } from '../../../../src/Data/NewZealand/expectedNewZealandResults';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NewZealand)
})


test.describe('A/B NZ NDB', () => {
    const Abtest = new RecursiveAbTest()
    

    test('NZ NDB stag', async () => {
        await Abtest.recursiveABTest({
            url: NZ_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB
        })
    })

    test('NZ NDB Btag', async () => {
        await Abtest.recursiveABTest({
            url: NZ_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB
        })
    })

    test('NZ NoDep Stag', async () => {
        await Abtest.recursiveABTest({
            url: NZ_STAGE_LINKS.NDBstag,
            expectedLink: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB
        })
    })

    test('NZ NoDep Btag', async () => {
        await Abtest.recursiveABTest({
            url: NZ_STAGE_LINKS.NDBbtag,
            expectedLink: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryNZNDB
        })
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})