import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsNZ from '../../../../src/methods/Recursions/Positive/recursionsNZ';
test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})


test.describe('A/B NZ NDB', () => {
    const recursionsNZ = new RecursionsNZ()

    test('NZ NDB stag', async () => {
        await recursionsNZ.recursiveTestNZNDBStag()
    })

    test('NZ NDB Btag', async () => {
        await recursionsNZ.recursiveTestNZNDBBtag()
    })

    test('NZ No dep Stag', async () => {
        await recursionsNZ.recursiveTestNZNoDepStag()
    })

    test('NZ No dep Btag', async () => {
        await recursionsNZ.recursiveTestNZNoDepBtag()
    })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})