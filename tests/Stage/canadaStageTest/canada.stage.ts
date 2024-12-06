import {test} from 'playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsCA from '../../../src/methods/Recursions/Positive/recursionsCA';


test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    const recursionsCA = new RecursionsCA()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursionsCA.recursiveTestWelcomeStag(STAGE_LINK)
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursionsCA.recursiveTestLandStag(STAGE_LINK)
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursionsCA.recursiveTestWelcomeBtag(STAGE_LINK)
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursionsCA.recursiveTestLandBtag(STAGE_LINK)
            })

        test('CA NDB Stag', async () => {
            await recursionsCA.recursiveTestCANDBStag(STAGE_LINK)
        })

        test('CA NDB Btag', async () => {
            await recursionsCA.recursiveTestCANDBBtag(STAGE_LINK)
        })

        test('CA NoDep Stag', async () => {
            await recursionsCA.recursiveTestCANoDepStag(STAGE_LINK)
        })

        test('CA NoDep Btag', async () => {
            await recursionsCA.recursiveTestCANoDepBtag(STAGE_LINK)
        })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})