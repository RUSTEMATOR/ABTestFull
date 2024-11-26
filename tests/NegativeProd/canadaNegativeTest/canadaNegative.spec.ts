import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import VpnController from '../../../src/methods/VpnController/vpnController';
import NegativeRecursionsCA from '../../../src/methods/Recursions/Negative/negativeRecursionsCA';


test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    const recursionsCA = new NegativeRecursionsCA()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursionsCA.NegativeRecursiveTestWelcomeStag('ross@kingbilly.xyz')
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursionsCA.NegativeRecursiveTestLandStag('ross@kingbilly.xyz')
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursionsCA.NegativeRecursiveTestWelcomeBtag('ross@kingbilly.xyz')
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursionsCA.NegativeRecursiveTestLandBtag('ross@kingbilly.xyz')
            })

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


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})