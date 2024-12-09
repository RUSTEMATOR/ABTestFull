import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { NZ_STAGE_LINKS } from '../../../../src/Data/NewZealand/newZealandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsNZ from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsNZ';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})


test.describe('A/B NZ Welcome', () => {
    const recursionsNZ = new StageRecursionsNZ()
    
    
    test(`NZ Welcome Stag`, async () => {
        await recursionsNZ.StageRecursiveTestWelcomeStag(NZ_STAGE_LINKS.welcomeStag)
        })
    
    test(`NZ Welcome Land Stag`, async () => {
        await recursionsNZ.StageRecursiveTestLandStag(NZ_STAGE_LINKS.welcomeBtag)
        })

    test(`NZ Welcome Btag`, async () => {
        await recursionsNZ.StageRecursiveTestWelcomeBtag(NZ_STAGE_LINKS.welcomeBtag)
        })
    
    test(`NZ Welcome Land Btag`, async () => {
        await recursionsNZ.StageRecursiveTestLandBtag(NZ_STAGE_LINKS.welcomeBtag)
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})