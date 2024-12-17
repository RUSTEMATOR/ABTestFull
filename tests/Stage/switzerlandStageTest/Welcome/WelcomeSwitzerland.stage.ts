import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { CH_STAGE_LINKS } from '../../../../src/Data/Switzerland/switzerlandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS } from '../../../../src/Data/Switzerland/expectedSwitzerlandLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Switzerland)
    
})

test.describe('A/B Welcome CH Stage', () => {
    const ABtest = new RecursiveAbTest()


    test('CH Welcome Stag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryCH

        })
    })

    test('CH Welcome Btag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryCH

        })
    })

    test('CH Land Stag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryCH

        })
    })

    test('CH Land Btag', async () => {
        await ABtest.recursiveABTest({
            url: CH_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_SWITZERLAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryCH

        })
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})