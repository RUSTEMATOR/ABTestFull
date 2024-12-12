import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsDE from '../../../../src/methods/Recursions/Negative/negativeRecursionsDE';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)

})

test.describe('A/B DE Welcome', () => {
    const recursionsDE = new NegativeRecursionsDE()

        test(`DE Welcome Stag`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEStag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeStag)
        })

        test(`DE Welcome Btag`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEBtag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeBtag)
        })

        test(`DE Welcome Land Stag`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEStag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeStag)
        })

        test(`DE Welcome Land Btag`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEBtag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeBtag)
        })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})