import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsDE from '../../../../src/methods/Recursions/Negative/negativeRecursionsDE';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Germany)
})

test.describe('A/B DE Welcome', () => {
    const recursionsDE = new NegativeRecursionsDE()


        test(`DE Welcome Stag`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEStag('ross@kingbilly.xyz')
        })

        test(`DE Welcome Btag`, async () => {
            await recursionsDE.NegativeRecursiveTestWelcomeDEBtag('ross@kingbilly.xyz')
        })

        test(`DE Welcome Land Stag`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEStag('ross@kingbilly.xyz')
        })

        test(`DE Welcome Land Btag`, async () => {
            await recursionsDE.NegativeRecursiveTestLandDEBtag('ross@kingbilly.xyz')
        })

    test.afterAll(async () => {
        const vpnController = new VpnController()
        await vpnController.vpnDisconnect()
    })

})