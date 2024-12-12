import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsDE from '../../../../src/methods/Recursions/Negative/negativeRecursionsDE';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)

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