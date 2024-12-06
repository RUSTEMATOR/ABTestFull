import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsDE from '../../../../src/methods/Recursions/Positive/recursionsDE';


test.describe('A/B NDB Germany', () => {
    
    const recursionsDE = new RecursionsDE()

    test('DE NoDep Stag', async () => {
        await recursionsDE.recursiveTestDENoDepStag()
    })

    test('DE NDB Stag', async () => {
        await recursionsDE.recursiveTestDENDBStag()
    })

    test('DE NoDep Btag', async () => {
        await recursionsDE.recursiveTestDENoDepBtag()
    })

    test('DE NDB Stag', async () => {
        await recursionsDE.recursiveTestDENDBBtag()
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})