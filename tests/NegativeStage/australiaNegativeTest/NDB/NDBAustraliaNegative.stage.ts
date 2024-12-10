
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageNegativeRecursionsAU from '../../../../src/methods/Recursions/NegativeStage/StageNegativeRecursionsAU';



test.beforeAll(async () => {
     const vpnController = new VpnController()
     await vpnController.vpnConnnect(LOCATIONS.Australia)  
 })

test.describe('A/B NDB Australia', async  () => {
    const recursionsAU = new StageNegativeRecursionsAU()
  
    test('Landing NoDep Australia Stag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNoDepStag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBstag)
        
    })

    test('Landing NDB Stag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNDBStag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBstag)
    })

    test('Landing NoDep Australia Btag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNoDepBtag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBbtag)
    })

    test('Landing NDB Btag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNDBBtag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBbtag)
    })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})