import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../src/methods/VpnController/vpnController';
import StageRecursionsDE from '../../../src/methods/Recursions/PositiveStage/StageRecursionsDE';



test.describe('A/B test GermanyWP', () => {
    const vpnController = new VpnController()
    const recursionsDE = new StageRecursionsDE()


    test.beforeAll(async () => {

        await vpnController.vpnConnnect(LOCATIONS.Germany)
    
        
    })

        test(`Landing WP DE Stag check page and params`, async () => {
            await recursionsDE.StageRecursiveTestWelcomeDEStag(DE_STAGE_LINKS.welcomeStag)
        })

        test(`Landing WP DE Btag check page and params`, async () => {
            await recursionsDE.StageRecursiveTestWelcomeDEBtag(DE_STAGE_LINKS.welcomeBtag)
        })

        test(`Landing Land DE Stag check page and params`, async () => {
            await recursionsDE.StageRecursiveTestLandDEStag(DE_STAGE_LINKS.welcomeStag)
        })

        test(`Landing Land DE Btag check page and params`, async () => {
            await recursionsDE.StageRecursiveTestLandDEBtag(DE_STAGE_LINKS.welcomeBtag)
        })



    test.afterAll(async () => {
        await vpnController.vpnDisconnect()
      
    })

})

test.describe('A/B NDB Germany', () => {
    const vpnController = new VpnController()
    const recursionsDE = new StageRecursionsDE()


    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Germany)
    
    })

    test('Landing No Dep Germany Stag', async () => {
        await recursionsDE.StageRecursiveTestDENoDepStag(DE_STAGE_LINKS.NDBstag)
    })

    test('Landing NDB Stag', async () => {
        await recursionsDE.StageRecursiveTestDENDBStag(DE_STAGE_LINKS.NDBstag)
    })

    test('Landing No dep Germany Btag', async () => {
        await recursionsDE.StageRecursiveTestDENoDepBtag(DE_STAGE_LINKS.NDBbtag)
    })

    test('Landing NDB Btag', async () => {
        await recursionsDE.StageRecursiveTestDENDBBtag(DE_STAGE_LINKS.NDBbtag)
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })

})