import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsDE from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsDE';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)

    
})


test.describe('A/B DE Welcome', () => {
    const vpnController = new VpnController()
    const recursionsDE = new StageRecursionsDE()

        test(`DE Welcome Stag`, async () => {
            await recursionsDE.StageRecursiveTestWelcomeDEStag(DE_STAGE_LINKS.welcomeStag)
        })

        test(`DE Welcome Btag`, async () => {
            await recursionsDE.StageRecursiveTestWelcomeDEBtag(DE_STAGE_LINKS.welcomeBtag)
        })

        test(`DE Welcome Land Stag`, async () => {
            await recursionsDE.StageRecursiveTestLandDEStag(DE_STAGE_LINKS.welcomeStag)
        })

        test(`DE Welcome Land Btag`, async () => {
            await recursionsDE.StageRecursiveTestLandDEBtag(DE_STAGE_LINKS.welcomeBtag)
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
  
})
