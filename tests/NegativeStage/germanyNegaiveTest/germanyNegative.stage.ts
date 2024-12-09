import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../src/methods/VpnController/vpnController';
import NegativeRecursionsDE from '../../../src/methods/Recursions/Negative/negativeRecursionsDE';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)

})

test.describe('A/B test GermanyWP', () => {
    const recursionsDE = new NegativeRecursionsDE()

        test(`Landing WP DE Stag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEStag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeStag)
        })

        test(`Landing WP DE Btag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEBtag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeBtag)
        })

        test(`Landing Land DE Stag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEStag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeStag)
        })

        test(`Landing Land DE Btag check page and params`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEBtag('ross@kingbilly.xyz', DE_STAGE_LINKS.welcomeBtag)
        })
})


test.describe('A/B NDB Germany', () => {
    const recursionsDE = new NegativeRecursionsDE()


    test('Landing No Dep Germany Stag', async () => {
        await recursionsDE.NegativeRecursiveTestDENoDepStag('ross@kingbilly.xyz', DE_STAGE_LINKS.NDBstag)
    })

    test('Landing NDB Stag', async () => {
        await recursionsDE.NegativeRecursiveTestDENDBStag('ross@kingbilly.xyz', DE_STAGE_LINKS.NDBstag)
    })

    test('Landing No dep Germany Btag', async () => {
        await recursionsDE.NegativeRecursiveTestDENoDepBtag('ross@kingbilly.xyz', DE_STAGE_LINKS.NDBbtag)
    })

    test('Landing NDB Btag', async () => {
        await recursionsDE.NegativeRecursiveTestDENDBBtag('ross@kingbilly.xyz', DE_STAGE_LINKS.NDBbtag)
    })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})