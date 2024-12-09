import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { NZ_STAGE_LINKS } from '../../../../src/Data/NewZealand/newZealandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsNZ from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsNZ';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})


test.describe('A/B NZ NDB', () => {
    const recursionsNZ = new StageRecursionsNZ()
    

    test('NZ NDB stag', async () => {
        await recursionsNZ.StageRecursiveTestNZNDBStag(NZ_STAGE_LINKS.NDBstag)
    })

    test('NZ NDB Btag', async () => {
        await recursionsNZ.StageRecursiveTestNZNDBBtag(NZ_STAGE_LINKS.NDBbtag)
    })

    test('NZ NoDep Stag', async () => {
        await recursionsNZ.StageRecursiveTestNZNoDepStag(NZ_STAGE_LINKS.NDBstag)
    })

    test('NZ NoDep Btag', async () => {
        await recursionsNZ.StageRecursiveTestNZNoDepBtag(NZ_STAGE_LINKS.NDBstag)
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})