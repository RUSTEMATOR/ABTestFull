
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../src/methods/VpnController/vpnController';
import StageNegativeRecursionsAU from '../../../src/methods/Recursions/NegativeStage/StageNegativeRecursionsAU';




test.describe('A/B NDB Australia', async  () => {
    const vpnController = new VpnController()
    const recursionsAU = new StageNegativeRecursionsAU()
    
    
    
    

    test.beforeAll(async () => {
       
        await vpnController.vpnConnnect(LOCATIONS.Australia)
        
       
    })

    // test.beforeEach(async ({page}) => {
    //    const methods = new Methods(page)
    //     methods.sleep(4000)
    // })

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

    test('Landing No Dep Australia Stag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNoDepStag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBstag)
        
    })

    test('Landing NDB Stag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNDBStag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBstag)
    })

    test('Landing No Dep Australia Btag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNoDepBtag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBbtag)
    })

    test('Landing NDB Btag', async () => {
        await recursionsAU.StageNegativeRecursiveTestAUNDBBtag('ross@kingbilly.xyz', AU_STAGE_LINKS.NDBbtag)
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})