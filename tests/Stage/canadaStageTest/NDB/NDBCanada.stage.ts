import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { CA_STAGE_LINKS } from '../../../../src/Data/Canada/canadaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsCA from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsCA';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA NDB', () => {
    const recursionsCA = new StageRecursionsCA()

        test('CA NDB Stag', async () => {
            await recursionsCA.StageRecursiveTestCANDBStag(CA_STAGE_LINKS.NDBstag)
        })

        test('CA NDB Btag', async () => {
            await recursionsCA.StageRecursiveTestCANDBBtag(CA_STAGE_LINKS.NDBbtag)
        })

        test('CA NoDep Stag', async () => {
            await recursionsCA.StageRecursiveTestCANoDepStag(CA_STAGE_LINKS.NDBstag)
        })

        test('CA NoDep Btag', async () => {
            await recursionsCA.StageRecursiveTestCANoDepBtag(CA_STAGE_LINKS.NDBbtag)
        })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})