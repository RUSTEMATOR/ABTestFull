import {test} from 'playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsNZ from '../../../src/methods/Recursions/Positive/recursionsNZ';


test.describe('A/B test New Zealand', () => {
    const vpnController = new VpnController()
    const recursionsNZ = new RecursionsNZ()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.NewZealand)
    })
    test(`Landing WP Stag check page and params`, async () => {
        await recursionsNZ.recursiveTestWelcomeStag(STAGE_LINK)
        })
    
    test(`Landing Land Stag check page and params`, async () => {
        await recursionsNZ.recursiveTestLandStag(STAGE_LINK)
        })

    test(`Landing WP Btag check page and params`, async () => {
        await recursionsNZ.recursiveTestWelcomeBtag(STAGE_LINK)
        })
    
    test(`Landing Land Btag check page and params`, async () => {
        await recursionsNZ.recursiveTestLandBtag(STAGE_LINK)
        })

    test('NZ NDB stag', async () => {
        await recursionsNZ.recursiveTestNZNDBStag(STAGE_LINK)
    })

    test('NZ NDB Btag', async () => {
        await recursionsNZ.recursiveTestNZNDBBtag(STAGE_LINK)
    })

    test('NZ No dep Stag', async () => {
        await recursionsNZ.recursiveTestNZNoDepStag(STAGE_LINK)
    })

    test('NZ No dep Btag', async () => {
        await recursionsNZ.recursiveTestNZNoDepBtag(STAGE_LINK)
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})