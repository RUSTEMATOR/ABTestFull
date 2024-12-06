
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsAU from '../../../../src/methods/Recursions/Positive/recursionsAU';

    
    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
    
   
})


test.describe('A/B Welcome Australia', async  () => {
   
    const recursionsAU = new RecursionsAU()
    

    test('AU Welcome Stag', async () => {    
        await recursionsAU.recursiveTestWelcomeAUStag()
    
    })

    test('AU Welcome Btag', async () => {
        await recursionsAU.recursiveTestWelcomeAUBtag()
    })

    test('AU Welcome Land Stag', async () => {
        await recursionsAU.recursiveTestWorldAUStag()
    })

    test('AU Welcome Land Btag', async () => {
        await recursionsAU.recursiveTestWorldAUBtag()
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})