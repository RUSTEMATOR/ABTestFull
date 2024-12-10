import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { CA_STAGE_LINKS } from '../../../../src/Data/Canada/canadaLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsCA from '../../../../src/methods/Recursions/Negative/negativeRecursionsCA';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

test.describe('A/B CA Welcome', () => {
    const recursionsCA = new NegativeRecursionsCA()

    test(`CA Welcome Stag`, async () => {
        await recursionsCA.NegativeRecursiveTestWelcomeStag('ross@kingbilly.xyz', CA_STAGE_LINKS.welcomeStag)
        })
    
    test(`CA Welcome Land Stag`, async () => {
        await recursionsCA.NegativeRecursiveTestLandStag('ross@kingbilly.xyz', CA_STAGE_LINKS.welcomeStag)
        })

    test(`CA Welcome Btag`, async () => {
        await recursionsCA.NegativeRecursiveTestWelcomeBtag('ross@kingbilly.xyz', CA_STAGE_LINKS.welcomeBtag)
        })
    
    test(`Ca Welcome Land Btag`, async () => {
        await recursionsCA.NegativeRecursiveTestLandBtag('ross@kingbilly.xyz', CA_STAGE_LINKS.welcomeBtag)
        })
})


test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
})