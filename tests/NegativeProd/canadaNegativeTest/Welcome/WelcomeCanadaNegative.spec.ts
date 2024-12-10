import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsCA from '../../../../src/methods/Recursions/Negative/negativeRecursionsCA';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA Welcome', () => {
    const recursionsCA = new NegativeRecursionsCA()
        
        test(`CA Welcome Stag`, async () => {
            await recursionsCA.NegativeRecursiveTestWelcomeStag('ross@kingbilly.xyz')
            })
        
        test(`CA Welcome Land Stag`, async () => {
            await recursionsCA.NegativeRecursiveTestLandStag('ross@kingbilly.xyz')
            })

        test(`CA Welcome Btag`, async () => {
            await recursionsCA.NegativeRecursiveTestWelcomeBtag('ross@kingbilly.xyz')
            })
        
        test(`CA Welcome Land Btag`, async () => {
            await recursionsCA.NegativeRecursiveTestLandBtag('ross@kingbilly.xyz')
            })

})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})