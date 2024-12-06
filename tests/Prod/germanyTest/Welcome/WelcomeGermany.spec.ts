import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsDE from '../../../../src/methods/Recursions/Positive/recursionsDE';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)    
})

test.describe('A/B Welcome Germany', () => {
    
    const recursionsDE = new RecursionsDE()


        test(`DE Welcome Stag`, async () => {
            await recursionsDE.recursiveTestWelcomeDEStag()
        })

        test(`DE Welcome Btag`, async () => {
            await recursionsDE.recursiveTestWelcomeDEBtag()
        })

        test(`DE Welcome Land Stag`, async () => {
            await recursionsDE.recursiveTestLandDEStag()
        })

        test(`DE Welcome Land Btag`, async () => {
            await recursionsDE.recursiveTestLandDEBtag()
        })

    test.afterAll(async () => {
        const vpnController = new VpnController()
        await vpnController.vpnDisconnect()
      
    })
})
