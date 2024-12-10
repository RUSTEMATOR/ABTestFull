import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsNZ from '../../../../src/methods/Recursions/Negative/negativeRecursionsNZ';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})

test.describe('A/B NZ Welcome', () => {
    const recursionsNZ = new NegativeRecursionsNZ()
    
        
        test(`NZ Welcome Stag`, async () => {
            await recursionsNZ.NegativeRecursiveTestWelcomeStag('ross@kingbilly.xyz')
            })
        
        test(`NZ Welcome Land Stag`, async () => {
            await recursionsNZ.NegativeRecursiveTestLandStag('ross@kingbilly.xyz')
            })

        test(`NZ Welcome Btag`, async () => {
            await recursionsNZ.NegativeRecursiveTestWelcomeBtag('ross@kingbilly.xyz')
            })
        
        test(`NZ Welcome Land Btag`, async () => {
            await recursionsNZ.NegativeRecursiveTestLandBtag('ross@kingbilly.xyz')
            })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})