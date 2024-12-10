import {test} from 'playwright/test';
import { LOCATIONS } from '../../../../src/Data/constants';
import { NZ_STAGE_LINKS } from '../../../../src/Data/NewZealand/newZealandLinks';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import NegativeRecursionsNZ from '../../../../src/methods/Recursions/Negative/negativeRecursionsNZ';

    

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})

test.describe('A/B test New Zealand', () => {
    const recursionsNZ = new NegativeRecursionsNZ()

        test('NZ NDB stag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNDBStag('ross@kingbilly.xyz', NZ_STAGE_LINKS.NDBstag)
        })

        test('NZ NDB Btag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNDBBtag('ross@kingbilly.xyz', NZ_STAGE_LINKS.NDBbtag)
        })

        test('NZ No dep Stag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNoDepStag('ross@kingbilly.xyz', NZ_STAGE_LINKS.NDBstag)
        })

        test('NZ No dep Btag', async () => {
            await recursionsNZ.NegativeRecursiveTestNZNoDepBtag('ross@kingbilly.xyz', NZ_STAGE_LINKS.NDBbtag)
        })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
   
    })