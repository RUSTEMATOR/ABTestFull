import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS } from '../../../../src/Data/Australia/expectedAustraliaResults';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
    
})

test.describe('A/B Welcome AU Stage', () => {
    const vpnController = new VpnController()
    const ABtest = new RecursiveAbTest()


    test('AU Welcome Stag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.World,
            expectedQuery: EXPECTED_QUERY.expectedQueryAU

        })
    })

    test('AU Welcome Btag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.World,
            expectedQuery: EXPECTED_QUERY.expectedQueryAU

        })
    })

    test('AU Land Stag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.World,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.World,
            expectedQuery: EXPECTED_QUERY.expectedQueryAU

        })
    })

    test('AU Land Btag', async () => {
        await ABtest.recursiveABTest({
            url: AU_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.World,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_STAGE_WELCOME_LINKS.World,
            expectedQuery: EXPECTED_QUERY.expectedQueryAU

        })
    })
})



test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})