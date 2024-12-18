import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { IE_STAGE_LINKS } from '../../../../src/Data/Ireland/irelandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_IRELAND_STAGE_WELCOME_LINKS } from '../../../../src/Data/Ireland/expectedIrelandLinks';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Ireland)
    
})

test.describe('A/B Welcome IE Stage', () => {
    const ABtest = new RecursiveAbTest()


    test('IE Welcome Stag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryIE

        })
    })

    test('IE Welcome Btag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryIE

        })
    })

    test('IE Land Stag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.welcomeStag,
            expectedLink: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryIE

        })
    })

    test('IE Land Btag', async () => {
        await ABtest.recursiveABTest({
            url: IE_STAGE_LINKS.welcomeBtag,
            expectedLink: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Land,
            expectedComparisonLink1: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Welcome,
            expectedComparisonLink2: EXPECTED_IRELAND_STAGE_WELCOME_LINKS.Land,
            expectedQuery: EXPECTED_QUERY.expectedQueryIE

        })
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
    
})