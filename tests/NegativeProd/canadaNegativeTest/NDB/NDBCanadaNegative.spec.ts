import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsCA from '../../../../src/methods/Recursions/Negative/negativeRecursionsCA';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA NDB', () => {
    const recursionsCA = new NegativeRecursionsCA()

        test('CA NDB Stag', async () => {
            await recursionsCA.NegativeRecursiveTestCANDBStag('ross@kingbilly.xyz')
        })

        test('CA NDB Btag', async () => {
            await recursionsCA.NegativeRecursiveTestCANDBBtag('ross@kingbilly.xyz')
        })

        test('CA NoDep Stag', async () => {
            await recursionsCA.NegativeRecursiveTestCANoDepStag('ross@kingbilly.xyz')
        })

        test('CA NoDep Btag', async () => {
            await recursionsCA.NegativeRecursiveTestCANoDepBtag('ross@kingbilly.xyz')
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})