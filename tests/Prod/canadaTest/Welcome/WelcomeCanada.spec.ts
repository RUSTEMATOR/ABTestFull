import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsCA from '../../../../src/methods/Recursions/Positive/recursionsCA';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})
    

test.describe('A/B test Welcome Canada', () => {
    const vpnController = new VpnController()
    const recursionsCA = new RecursionsCA()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`CA Welcome Stag`, async () => {
            await recursionsCA.recursiveTestWelcomeStag()
            })
        
        test(`CA Welcome Land Stag`, async () => {
            await recursionsCA.recursiveTestLandStag()
            })

        test(`CA Welcome Btag`, async () => {
            await recursionsCA.recursiveTestWelcomeBtag()
            })
        
        test(`CA Welcome Land Btag`, async () => {
            await recursionsCA.recursiveTestLandBtag()
            })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
   
    })