
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsAU from '../../../src/methods/Recursions/Positive/recursionsAU';




test.describe('A/B NDB Australia', async  () => {
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
        await recursionsAU.recursiveTestWelcomeAUStag()
    
    })

    test('AU Welcome Btag', async () => {
        await recursionsAU.recursiveTestWelcomeAUBtag()
    })

    test('AU Land Stag', async () => {
        await recursionsAU.recursiveTestWorldAUStag()
    })

    test('AU Land Btag', async () => {
        await recursionsAU.recursiveTestWorldAUBtag()
    })

    test('Landing No Dep Australia Stag', async () => {
        await recursionsAU.recursiveTestAUNoDepStag()
        
    })

    test('Landing NDB Stag', async () => {
        await recursionsAU.recursiveTestAUNDBStag()
    })

    test('Landing No Dep Australia Btag', async () => {
        await recursionsAU.recursiveTestAUNoDepBtag()
    })

    test('Landing NDB Btag', async () => {
        await recursionsAU.recursiveTestAUNDBBtag()
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})