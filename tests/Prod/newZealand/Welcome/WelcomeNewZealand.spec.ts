import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsNZ from '../../../../src/methods/Recursions/Positive/recursionsNZ';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})

test.describe('A/B NZ Welcome', () => {
    
    const recursionsNZ = new RecursionsNZ()
    
        
        test(`NZ Welcome Stag`, async () => {
            await recursionsNZ.recursiveTestWelcomeStag()
            })
        
        test(`NZ Welcome Land Stag`, async () => {
            await recursionsNZ.recursiveTestLandStag()
            })

        test(`NZ Welcome Btag`, async () => {
            await recursionsNZ.recursiveTestWelcomeBtag()
            })
        
        test(`NZ Welcome Land Stag`, async () => {
            await recursionsNZ.recursiveTestLandBtag()
            })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
   
})