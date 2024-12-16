import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { EXPECTED_GERMANY_STAGE_WELCOME_LINKS } from '../../../../src/Data/Germany/expectedGermanyResults';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)

    
})


test.describe('A/B DE Welcome', () => {
    const Abtest = new RecursiveAbTest()

        test(`DE Welcome Stag`, async () => {
            await Abtest.recursiveABTest({
                url: DE_STAGE_LINKS.welcomeStag,
                expectedLink: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedComparisonLink1: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryDE
            })
        })

        test(`DE Welcome Btag`, async () => {
            await Abtest.recursiveABTest({
                url: DE_STAGE_LINKS.welcomeBtag,
                expectedLink: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedComparisonLink1: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryDE
            })
        })

        test(`DE Welcome Land Stag`, async () => {
            await Abtest.recursiveABTest({
                url: DE_STAGE_LINKS.welcomeBtag,
                expectedLink: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedComparisonLink1: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryDE
            })
        })

        test(`DE Welcome Land Btag`, async () => {
            await Abtest.recursiveABTest({
                url: DE_STAGE_LINKS.welcomeBtag,
                expectedLink: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlLand,
                expectedComparisonLink1: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlLand ,
                expectedComparisonLink2: EXPECTED_GERMANY_STAGE_WELCOME_LINKS.expectedUrlWelcome,
                expectedQuery: EXPECTED_QUERY.expectedQueryDE
            })
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
  
})
