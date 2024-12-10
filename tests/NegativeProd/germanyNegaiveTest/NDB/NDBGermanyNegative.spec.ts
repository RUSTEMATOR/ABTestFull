import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsDE from '../../../../src/methods/Recursions/Negative/negativeRecursionsDE';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Germany)

})

test.describe('A/B DE NDB', () => {
    const recursionsDE = new NegativeRecursionsDE()

    test('DE NoDep Stag', async () => {
        await recursionsDE.NegativeRecursiveTestDENoDepStag('ross@kingbilly.xyz')
    })

    test('DE NDB Stag', async () => {
        await recursionsDE.NegativeRecursiveTestDENDBStag('ross@kingbilly.xyz')
    })

    test('DE NoDep Btag', async () => {
        await recursionsDE.NegativeRecursiveTestDENoDepBtag('ross@kingbilly.xyz')
    })

    test('DE NDB Btag', async () => {
        await recursionsDE.NegativeRecursiveTestDENDBBtag('ross@kingbilly.xyz')
    })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect() 
})