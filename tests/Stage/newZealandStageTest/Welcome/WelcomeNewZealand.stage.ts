import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { NZ_STAGE_LINKS } from '../../../../src/Data/NewZealand/newZealandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS } from '../../../../src/Data/NewZealand/expectedNewZealandResults';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})


test.describe('A/B NZ Welcome', () => {
    const ABtest = new RecursiveAbTest()
    
    
    test(`NZ Welcome Stag`, async () => {
        await ABtest.recursiveABTest({
                url: NZ_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryNZ
            })
        })
    
    test(`NZ Welcome Land Stag`, async () => {
        await ABtest.recursiveABTest({
                url: NZ_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryNZ
            })
        })

    test(`NZ Welcome Btag`, async () => {
        await ABtest.recursiveABTest({
                url: NZ_STAGE_LINKS.welcomeBtag,
                expectedLink: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryNZ
            })
        })
    
    test(`NZ Welcome Land Btag`, async () => {
        await ABtest.recursiveABTest({
                url: NZ_STAGE_LINKS.welcomeBtag,
                expectedLink: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedComparisonLink1: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_NEW_ZEALAND_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryNZ
            })
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})