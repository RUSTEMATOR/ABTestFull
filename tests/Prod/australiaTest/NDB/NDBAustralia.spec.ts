
import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursionsAU from '../../../../src/methods/Recursions/Positive/recursionsAU';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.Australia)
})

test.describe('Canada', async () => {
    
        test.describe('A/B NDB Australia', async  () => {
        
            const recursionsAU = new RecursionsAU()

            test('AU NoDep Stag', async () => {
                await recursionsAU.recursiveTestAUNoDepStag()
            })

            test('AU NDB Stag', async () => {
                await recursionsAU.recursiveTestAUNDBStag()
            })

            test('AU NoDep Btag', async () => {
                await recursionsAU.recursiveTestAUNoDepBtag()
            })

            test('AU NDB Btag', async () => {
                await recursionsAU.recursiveTestAUNDBBtag()
            })

        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})