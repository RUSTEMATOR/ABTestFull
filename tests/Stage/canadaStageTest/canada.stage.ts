import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import { CA_STAGE_LINKS } from '../../../src/Data/Canada/canadaLinks';
import VpnController from '../../../src/methods/VpnController/vpnController';
import StageRecursionsCA from '../../../src/methods/Recursions/PositiveStage/StageRecursionsCA';


test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    const recursionsCA = new StageRecursionsCA()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursionsCA.StageRecursiveTestWelcomeStag(CA_STAGE_LINKS.welcomeStag)
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursionsCA.StageRecursiveTestLandStag(CA_STAGE_LINKS.welcomeBtag)
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursionsCA.StageRecursiveTestWelcomeBtag(CA_STAGE_LINKS.welcomeBtag)
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursionsCA.StageRecursiveTestLandBtag(CA_STAGE_LINKS.welcomeBtag)
            })

        test('CA NDB Stag', async () => {
            await recursionsCA.StageRecursiveTestCANDBStag(CA_STAGE_LINKS.NDBstag)
        })

        test('CA NDB Btag', async () => {
            await recursionsCA.StageRecursiveTestCANDBBtag(CA_STAGE_LINKS.NDBbtag)
        })

        test('CA NoDep Stag', async () => {
            await recursionsCA.StageRecursiveTestCANoDepStag(CA_STAGE_LINKS.NDBstag)
        })

        test('CA NoDep Btag', async () => {
            await recursionsCA.StageRecursiveTestCANoDepBtag(CA_STAGE_LINKS.NDBbtag)
        })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})