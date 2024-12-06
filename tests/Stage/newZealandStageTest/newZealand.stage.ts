import {test} from 'playwright/test';
import { LOCATIONS } from '../../../src/Data/constants';
import { NZ_STAGE_LINKS } from '../../../src/Data/NewZealand/newZealandLinks';
import VpnController from '../../../src/methods/VpnController/vpnController';
import StageRecursionsNZ from '../../../src/methods/Recursions/PositiveStage/StageRecursionsNZ';


test.describe('A/B test New Zealand', () => {
    const vpnController = new VpnController()
    const recursionsNZ = new StageRecursionsNZ()
    
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.NewZealand)
    })
    test(`Landing WP Stag check page and params`, async () => {
        await recursionsNZ.StageRecursiveTestWelcomeStag(NZ_STAGE_LINKS.welcomeStag)
        })
    
    test(`Landing Land Stag check page and params`, async () => {
        await recursionsNZ.StageRecursiveTestLandStag(NZ_STAGE_LINKS.welcomeBtag)
        })

    test(`Landing WP Btag check page and params`, async () => {
        await recursionsNZ.StageRecursiveTestWelcomeBtag(NZ_STAGE_LINKS.welcomeBtag)
        })
    
    test(`Landing Land Btag check page and params`, async () => {
        await recursionsNZ.StageRecursiveTestLandBtag(NZ_STAGE_LINKS.welcomeBtag)
        })

    test('NZ NDB stag', async () => {
        await recursionsNZ.StageRecursiveTestNZNDBStag(NZ_STAGE_LINKS.NDBstag)
    })

    test('NZ NDB Btag', async () => {
        await recursionsNZ.StageRecursiveTestNZNDBBtag(NZ_STAGE_LINKS.NDBbtag)
    })

    test('NZ No dep Stag', async () => {
        await recursionsNZ.StageRecursiveTestNZNoDepStag(NZ_STAGE_LINKS.NDBstag)
    })

    test('NZ No dep Btag', async () => {
        await recursionsNZ.StageRecursiveTestNZNoDepBtag(NZ_STAGE_LINKS.NDBstag)
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })

})