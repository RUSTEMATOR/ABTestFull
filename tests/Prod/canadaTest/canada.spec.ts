import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsCA from '../../../src/methods/Recursions/Positive/recursionsCA';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})
    

test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    const recursionsCA = new RecursionsCA()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursionsCA.recursiveTestWelcomeStag()
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursionsCA.recursiveTestLandStag()
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursionsCA.recursiveTestWelcomeBtag()
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursionsCA.recursiveTestLandBtag()
            })

        test('CA NDB Stag', async () => {
            await recursionsCA.recursiveTestCANDBStag()
        })

        test('CA NDB Btag', async () => {
            await recursionsCA.recursiveTestCANDBBtag()
        })

        test('CA NoDep Stag', async () => {
            await recursionsCA.recursiveTestCANoDepStag()
        })

        test('CA NoDep Btag', async () => {
            await recursionsCA.recursiveTestCANoDepBtag()
        })


   

})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
   
    })