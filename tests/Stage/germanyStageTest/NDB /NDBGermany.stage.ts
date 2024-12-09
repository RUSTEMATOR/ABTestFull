import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { DE_STAGE_LINKS } from '../../../../src/Data/Germany/germanyLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsDE from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsDE';




test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)

})

test.describe('A/B DE NDB', () => {
    const recursionsDE = new StageRecursionsDE()

    test('DE NoDep Stag', async () => {
        await recursionsDE.StageRecursiveTestDENoDepStag(DE_STAGE_LINKS.NDBstag)
    })

    test('DE NDB Stag', async () => {
        await recursionsDE.StageRecursiveTestDENDBStag(DE_STAGE_LINKS.NDBstag)
    })

    test('DE NoDep Btag', async () => {
        await recursionsDE.StageRecursiveTestDENoDepBtag(DE_STAGE_LINKS.NDBbtag)
    })

    test('DE NDB Btag', async () => {
        await recursionsDE.StageRecursiveTestDENDBBtag(DE_STAGE_LINKS.NDBbtag)
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
    
})
