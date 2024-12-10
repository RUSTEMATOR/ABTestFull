
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsAU from '../../../../src/methods/Recursions/Negative/negativeRecursionsAU';
  

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
    
   
})


test.describe('A/B AU Welcome', async  () => {
    const recursionsAU = new NegativeRecursionsAU()


    test('AU Welcome Stag', async () => {    
        await recursionsAU.NegativeRecursiveTestWelcomeAUStag('ross@kingbilly.xyz')
    
    })

    test('AU Welcome Btag', async () => {
        await recursionsAU.NegativeRecursiveTestWelcomeAUBtag('ross@kingbilly.xyz')
    })

    test('AU Land Stag', async () => {
        await recursionsAU.NegativeRecursiveTestWorldAUStag('ross@kingbilly.xyz')
    })

    test('AU Land Btag', async () => {
        await recursionsAU.NegativeRecursiveTestWorldAUBtag('ross@kingbilly.xyz')
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})