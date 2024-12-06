import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import { AU_STAGE_LINKS } from '../../../src/Data/Australia/australiaLinks';
import VpnController from '../../../src/methods/VpnController/vpnController';
import { Methods } from '../../../src/methods/methods';
import StageRecursionsAU from '../../../src/methods/Recursions/PositiveStage/StageRecursionsAU';


test.describe('A/B NDB Australia', () => {
    const vpnController = new VpnController()
    const recursionsAU = new StageRecursionsAU()
    

    test.beforeAll(async () => {
       
        await vpnController.vpnConnnect(LOCATIONS.Australia)
       
    })

    // test.beforeEach(async ({page}) => {
    //    const methods = new Methods(page)
    //     methods.sleep(4000)
    // })

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

    test('Landing No Dep Australia Stag', async () => {
        await recursionsAU.StageRecursiveTestAUNoDepStag(AU_STAGE_LINKS.NDBstag)
        
    })

    test('Landing NDB Stag', async () => {
        await recursionsAU.StageRecursiveTestAUNDBStag(AU_STAGE_LINKS.NDBstag)
    })

    test('Landing No Dep Australia Btag', async () => {
        await recursionsAU.StageRecursiveTestAUNoDepBtag(AU_STAGE_LINKS.NDBbtag)
    })

    test('Landing NDB Btag', async () => {
        await recursionsAU.StageRecursiveTestAUNDBBtag(AU_STAGE_LINKS.NDBbtag)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })
})