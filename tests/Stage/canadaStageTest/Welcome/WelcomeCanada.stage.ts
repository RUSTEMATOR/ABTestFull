import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { CA_STAGE_LINKS } from '../../../../src/Data/Canada/canadaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_CANADA_STAGE_WELCOME_LINKS } from '../../../../src/Data/Canada/expectedCanadaResults.';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA Welcome Stage', () => {
    const ABtest = new RecursiveAbTest()

        
        test(`CA Welcome Stag`, async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlWelcome ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedQuery: EXPECTED_QUERY.expectedQueryCA
            })
            })
        
        test(`CA Welcome Land Stag`, async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlWelcome ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedQuery: EXPECTED_QUERY.expectedQueryCA
            })
            })

        test(`CA Welcome Btag`, async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlWelcome ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedQuery: EXPECTED_QUERY.expectedQueryCA
            })
            })
        
        test(`CA Welcome Land Btag`, async () => {
            await ABtest.recursiveABTest({
                url: CA_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedComparisonLink1: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlWelcome ,
                expectedComparisonLink2: EXPECTED_CANADA_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedQuery: EXPECTED_QUERY.expectedQueryCA
            })
        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})