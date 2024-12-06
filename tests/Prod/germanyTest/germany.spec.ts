import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsDE from '../../../src/methods/Recursions/Positive/recursionsDE';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)

    
})

test.describe('A/B test GermanyWP', () => {
    
    const recursionsDE = new RecursionsDE()


        test(`Landing WP DE Stag check page and params`, async () => {
            await recursionsDE.recursiveTestWelcomeDEStag()
        })

        test(`Landing WP DE Btag check page and params`, async () => {
            await recursionsDE.recursiveTestWelcomeDEBtag()
        })

        test(`Landing Land DE Stag check page and params`, async () => {
            await recursionsDE.recursiveTestLandDEStag()
        })

        test(`Landing Land DE Btag check page and params`, async () => {
            await recursionsDE.recursiveTestLandDEBtag()
        })



    test.afterAll(async () => {
        const vpnController = new VpnController()
        await vpnController.vpnDisconnect()
      
    })

})


test.describe('A/B NDB Germany', () => {
    
    const recursionsDE = new RecursionsDE()

    test('Landing No Dep Germany Stag', async () => {
        await recursionsDE.recursiveTestDENoDepStag()
    })

    test('Landing NDB Stag', async () => {
        await recursionsDE.recursiveTestDENDBStag()
    })

    test('Landing No dep Germany Btag', async () => {
        await recursionsDE.recursiveTestDENoDepBtag()
    })

    test('Landing NDB Btag', async () => {
        await recursionsDE.recursiveTestDENDBBtag()
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
  
})