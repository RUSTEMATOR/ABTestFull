
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import NegativeRecursionsAU from '../../../src/methods/Recursions/Negative/negativeRecursionsAU';




test.describe('A/B NDB Australia', async  () => {
    const vpnController = new VpnController()
    const recursionsAU = new NegativeRecursionsAU()
    
    
    
    

    test.beforeAll(async () => {
       
        await vpnController.vpnConnnect(LOCATIONS.Australia)
        
       
    })

    // test.beforeEach(async ({page}) => {
    //    const methods = new Methods(page)
    //     methods.sleep(4000)
    // })

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

    test('Landing No Dep Australia Stag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNoDepStag('ross@kingbilly.xyz')
        
    })

    test('Landing NDB Stag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNDBStag('ross@kingbilly.xyz')
    })

    test('Landing No Dep Australia Btag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNoDepBtag('ross@kingbilly.xyz')
    })

    test('Landing NDB Btag', async () => {
        await recursionsAU.NegativeRecursiveTestAUNDBBtag('ross@kingbilly.xyz')
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
    })
})