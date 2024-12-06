import {test} from 'playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import NegativeRecursionsDE from '../../../src/methods/Recursions/Negative/negativeRecursionsDE';



test.describe('A/B test GermanyWP', () => {
    const vpnController = new VpnController()
    const recursionsDE = new NegativeRecursionsDE()


    test.beforeAll(async () => {

        await vpnController.vpnConnnect(LOCATIONS.Germany)
    
        
    })

        test(`Landing WP DE Stag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEStag('ross@kingbilly.xyz', STAGE_LINK)
        })

        test(`Landing WP DE Btag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEBtag('ross@kingbilly.xyz', STAGE_LINK)
        })

        test(`Landing Land DE Stag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEStag('ross@kingbilly.xyz', STAGE_LINK)
        })

        test(`Landing Land DE Btag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEBtag('ross@kingbilly.xyz', STAGE_LINK)
        })



    test.afterAll(async () => {
        await vpnController.vpnDisconnect()
      
    })

})

test.describe('A/B NDB Germany', () => {
    const vpnController = new VpnController()
    const recursionsDE = new NegativeRecursionsDE()


    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Germany)
    
    })

    test('Landing No Dep Germany Stag', async () => {
        await recursionsDE.NegativeRecursiveTestDENoDepStag('ross@kingbilly.xyz', STAGE_LINK)
    })

    test('Landing NDB Stag', async () => {
        await recursionsDE.NegativeRecursiveTestDENDBStag('ross@kingbilly.xyz', STAGE_LINK)
    })

    test('Landing No dep Germany Btag', async () => {
        await recursionsDE.NegativeRecursiveTestDENoDepBtag('ross@kingbilly.xyz', STAGE_LINK)
    })

    test('Landing NDB Btag', async () => {
        await recursionsDE.NegativeRecursiveTestDENDBBtag('ross@kingbilly.xyz', STAGE_LINK)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })

})