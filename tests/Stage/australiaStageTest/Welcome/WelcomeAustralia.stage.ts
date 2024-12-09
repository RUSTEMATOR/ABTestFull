import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';

import StageRecursionsAU from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsAU';

test.beforeAll(() => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Australia)
    
})

test.describe('A/B Welcome AU Stage', () => {
    const vpnController = new VpnController()
    const recursionsAU = new StageRecursionsAU()


    test('AU Welcome Stag', async () => {
        await recursionsAU.StageRecursiveTestWelcomeAUStag(AU_STAGE_LINKS.welcomeStag)
    })

    test('AU Welcome Btag', async () => {
        await recursionsAU.StageRecursiveTestWelcomeAUBtag(AU_STAGE_LINKS.welcomeBtag)
    })

    test('AU Land Stag', async () => {
        await recursionsAU.StageRecursiveTestWorldAUStag(AU_STAGE_LINKS.welcomeStag)
    })

    test('AU Land Btag', async () => {
        await recursionsAU.StageRecursiveTestWorldAUBtag(AU_STAGE_LINKS.welcomeBtag)
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })
})



test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})