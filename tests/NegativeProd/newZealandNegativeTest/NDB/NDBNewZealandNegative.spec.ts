import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsNZ from '../../../../src/methods/Recursions/Negative/negativeRecursionsNZ';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})

test.describe('A/B NZ NDB', () => {
    const recursionsNZ = new NegativeRecursionsNZ()

        test('NZ NDB stag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNDBStag('ross@kingbilly.xyz')
        })

        test('NZ NDB Btag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNDBBtag('ross@kingbilly.xyz')
        })

        test('NZ NoDep Stag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNoDepStag('ross@kingbilly.xyz')
        })

        test('NZ NoDep Btag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNoDepBtag('ross@kingbilly.xyz')
        })

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})