import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { CA_STAGE_LINKS } from '../../../../src/Data/Canada/canadaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import StageRecursionsCA from '../../../../src/methods/Recursions/PositiveStage/StageRecursionsCA';


test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA Welcome Stage', () => {
    const recursionsCA = new StageRecursionsCA()

        
        test(`CA Welcome Stag`, async () => {
            await recursionsCA.StageRecursiveTestWelcomeStag(CA_STAGE_LINKS.welcomeStag)
            })
        
        test(`CA Welcome Land Stag`, async () => {
            await recursionsCA.StageRecursiveTestLandStag(CA_STAGE_LINKS.welcomeBtag)
            })

        test(`CA Welcome Btag`, async () => {
            await recursionsCA.StageRecursiveTestWelcomeBtag(CA_STAGE_LINKS.welcomeBtag)
            })
        
        test(`CA Welcome Land Btag`, async () => {
            await recursionsCA.StageRecursiveTestLandBtag(CA_STAGE_LINKS.welcomeBtag)
        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})