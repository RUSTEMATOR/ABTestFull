import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { AT_STAGE_LINKS } from '../../../../src/Data/Austria/austriaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS } from '../../../../src/Data/Austria/expectedAustriaLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Austria)
    
})

test.describe('A/B Welcome AT Stage', () => {
    const ABtest = new RecursiveAbTest()


    test('AT Welcome Stag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryAT

        })
    })

    test('AT Welcome Btag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryAT

        })
    })

    test('AT Land Stag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryAT

        })
    })

    test('AT Land Btag', async () => {
        await ABtest.recursiveABTest({
            url: AT_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_AUSTRIA_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryAT

        })
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})