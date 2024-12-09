import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsAU from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsAU';



test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
   
})

test.describe('A/B NDB AU Stage', () => {
    const recursionsAU = new StageRecursionsAU()
    

    test('AU NoDep Stag', async () => {
        await recursionsAU.StageRecursiveTestAUNoDepStag(AU_STAGE_LINKS.NDBstag)
        
    })

    test('AU NDB Stag', async () => {
        await recursionsAU.StageRecursiveTestAUNDBStag(AU_STAGE_LINKS.NDBstag)
    })

    test('AU NoDep Btag', async () => {
        await recursionsAU.StageRecursiveTestAUNoDepBtag(AU_STAGE_LINKS.NDBbtag)
    })

    test('AU NDB Btag', async () => {
        await recursionsAU.StageRecursiveTestAUNDBBtag(AU_STAGE_LINKS.NDBbtag)
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})
