
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageNegativeRecursionsAU from '../../../../src/methods/Recursions/NegativeStage/StageNegativeRecursionsAU';



test.beforeAll(async () => {
     const vpnController = new VpnController()
     await vpnController.vpnConnnect(LOCATIONS.Australia)  
 })

test.describe('A/B AU Welcome', async  () => {
    const recursionsAU = new StageNegativeRecursionsAU()
    

    test('AU Welcome Stag', async () => {    
        await recursionsAU.StageNegativeRecursiveTestWelcomeAUStag('ross@kingbilly.xyz', AU_STAGE_LINKS.welcomeStag)
    
    })

    test('AU Welcome Btag', async () => {
        await recursionsAU.StageNegativeRecursiveTestWelcomeAUBtag('ross@kingbilly.xyz', AU_STAGE_LINKS.welcomeBtag)
    })

    test('AU Land Stag', async () => {
        await recursionsAU.StageNegativeRecursiveTestWorldAUStag('ross@kingbilly.xyz', AU_STAGE_LINKS.welcomeStag)
    })

    test('AU Land Btag', async () => {
        await recursionsAU.StageNegativeRecursiveTestWorldAUBtag('ross@kingbilly.xyz', AU_STAGE_LINKS.welcomeBtag)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})