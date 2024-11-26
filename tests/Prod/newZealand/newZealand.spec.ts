import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import RecursionsNZ from '../../../src/methods/Recursions/Positive/recursionsNZ';


test.describe('A/B test New Zealand', () => {
    const vpnController = new VpnController()
    const recursionsNZ = new RecursionsNZ()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.NewZealand)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursionsNZ.recursiveTestWelcomeStag()
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursionsNZ.recursiveTestLandStag()
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursionsNZ.recursiveTestWelcomeBtag()
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursionsNZ.recursiveTestLandBtag()
            })

        test('NZ NDB stag', async () => {
            await recursionsNZ.recursiveTestNZNDBStag()
        })

        test('NZ NDB Btag', async () => {
            await recursionsNZ.recursiveTestNZNDBBtag()
        })

        test('NZ No dep Stag', async () => {
            await recursionsNZ.recursiveTestNZNoDepStag()
        })

        test('NZ No dep Btag', async () => {
            await recursionsNZ.recursiveTestNZNoDepBtag()
        })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})