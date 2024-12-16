
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsAU from '../../../../src/methods/Recursions/Negative/negativeRecursionsAU';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';  

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
    
   
})

test.describe('A/B AU NDB', async  () => {
    const ABtest = new RecursiveAbTest()

    test('AU NoDep Stag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNoDepStag('ross@kingbilly.xyz')
        
    })

    test('AU NDB Stag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNDBStag('ross@kingbilly.xyz')
    })

    test('AU NoDep Btag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNoDepBtag('ross@kingbilly.xyz')
    })

    test('AU NDB Btag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNDBBtag('ross@kingbilly.xyz')
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})