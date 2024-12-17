import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { NO_STAGE_LINKS } from '../../../../src/Data/Norway/norwayLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_NORWAY_STAGE_WELCOME_LINKS } from '../../../../src/Data/Norway/expectedNorwayLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Norway)
    
})

test.describe('A/B Welcome NO Stage', () => {
    const ABtest = new RecursiveAbTest()


    test('NO Welcome Stag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryNO

        })
    })

    test('NO Welcome Btag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryNO

        })
    })

    test('NO Land Stag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryNO

        })
    })

    test('NO Land Btag', async () => {
        await ABtest.recursiveABTest({
            url: NO_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_NORWAY_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryNO

        })
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})