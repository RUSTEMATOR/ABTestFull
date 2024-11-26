import {test} from 'playwright/test';
import { LOCATIONS, STAGE_LINK } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import NegativeRecursionsNZ from '../../../src/methods/Recursions/Negative/negativeRecursionsNZ';
import { setDefaultHighWaterMark } from 'stream';


test.describe('A/B test New Zealand', () => {
    const vpnController = new VpnController()
    const recursionsNZ = new NegativeRecursionsNZ()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.NewZealand)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursionsNZ.NegativeRecursiveTestWelcomeStag('ross@kingbilly.xyz', STAGE_LINK)
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursionsNZ.NegativeRecursiveTestLandStag('ross@kingbilly.xyz', STAGE_LINK)
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursionsNZ.NegativeRecursiveTestWelcomeBtag('ross@kingbilly.xyz', STAGE_LINK)
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursionsNZ.NegativeRecursiveTestLandBtag('ross@kingbilly.xyz', STAGE_LINK)
            })

        test('NZ NDB stag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNDBStag('ross@kingbilly.xyz', STAGE_LINK)
        })

        test('NZ NDB Btag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNDBBtag('ross@kingbilly.xyz', STAGE_LINK)
        })

        test('NZ No dep Stag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNoDepStag('ross@kingbilly.xyz', STAGE_LINK)
        })

        test('NZ No dep Btag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNoDepBtag('ross@kingbilly.xyz', STAGE_LINK)
        })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})