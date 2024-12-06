import {test} from 'playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsDE from '../../../src/methods/Recursions/Positive/recursionsDE';



test.describe('A/B test GermanyWP', () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsDE()


    test.beforeAll(async () => {

        await vpnController.vpnConnnect(LOCATIONS.Germany)
    
        
    })

        test(`Landing WP DE Stag check page and params`, async () => {
            await recursionsDE.recursiveTestWelcomeDEStag(STAGE_LINK)
        })

        test(`Landing WP DE Btag check page and params`, async () => {
            await recursionsDE.recursiveTestWelcomeDEBtag(STAGE_LINK)
        })

        test(`Landing Land DE Stag check page and params`, async () => {
            await recursionsDE.recursiveTestLandDEStag(STAGE_LINK)
        })

        test(`Landing Land DE Btag check page and params`, async () => {
            await recursionsDE.recursiveTestLandDEBtag(STAGE_LINK)
        })



    test.afterAll(async () => {
        await vpnController.vpnDisconnect()
      
    })

})

test.describe('A/B NDB Germany', () => {
    const vpnController = new VpnController()
    const recursionsDE = new RecursionsDE()


    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Germany)
    
    })

    test('Landing No Dep Germany Stag', async () => {
        await recursionsDE.recursiveTestDENoDepStag(STAGE_LINK)
    })

    test('Landing NDB Stag', async () => {
        await recursionsDE.recursiveTestDENDBStag(STAGE_LINK)
    })

    test('Landing No dep Germany Btag', async () => {
        await recursionsDE.recursiveTestDENoDepBtag(STAGE_LINK)
    })

    test('Landing NDB Btag', async () => {
        await recursionsDE.recursiveTestDENDBBtag(STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })

})