import {test} from 'playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import { Methods } from '../../../src/methods/methods';
import RecursionsAU from '../../../src/methods/Recursions/Positive/recursionsAU';


test.describe('A/B NDB Australia', () => {
    const vpnController = new VpnController()
    const recursionsAU = new RecursionsAU()
    

    test.beforeAll(async () => {
       
        await vpnController.vpnConnnect(LOCATIONS.Australia)
       
    })

    // test.beforeEach(async ({page}) => {
    //    const methods = new Methods(page)
    //     methods.sleep(4000)
    // })

    test('AU Welcome Stag', async () => {
        await recursionsAU.recursiveTestWelcomeAUStag(STAGE_LINK)
    })

    test('AU Welcome Btag', async () => {
        await recursionsAU.recursiveTestWelcomeAUBtag(STAGE_LINK)
    })

    test('AU Land Stag', async () => {
        await recursionsAU.recursiveTestWorldAUStag(STAGE_LINK)
    })

    test('AU Land Btag', async () => {
        await recursionsAU.recursiveTestWorldAUBtag(STAGE_LINK)
    })

    test('Landing No Dep Australia Stag', async () => {
        await recursionsAU.recursiveTestAUNoDepStag(STAGE_LINK)
        
    })

    test('Landing NDB Stag', async () => {
        await recursionsAU.recursiveTestAUNDBStag(STAGE_LINK)
    })

    test('Landing No Dep Australia Btag', async () => {
        await recursionsAU.recursiveTestAUNoDepBtag(STAGE_LINK)
    })

    test('Landing NDB Btag', async () => {
        await recursionsAU.recursiveTestAUNDBBtag(STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })
})