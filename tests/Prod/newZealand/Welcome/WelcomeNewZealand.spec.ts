import {test} from 'playwright/test';
import { EXPECTED_QUERY, LOCATIONS } from '../../../../src/Data/constants';
import VpnController from '../../../../src/methods/VpnController/vpnController';
import RecursiveAbTest from '../../../../src/methods/Recursions/GeneralRecursion/GeneralRecursion';
import { NEW_ZEALAND_LINKS } from '../../../../src/Data/NewZealand/newZealandLinks';
import { EXPECTED_NEW_ZEALAND_LINKS } from '../../../../src/Data/NewZealand/expectedNewZealandResults';

test.beforeAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnConnnect(LOCATIONS.NewZealand)
})

test.describe('A/B NZ Welcome', () => {
    
    const Abtest = new RecursiveAbTest()
    
        
        test(`NZ Welcome Stag`, async () => {
            await Abtest.recursiveABTest({
                    url: NEW_ZEALAND_LINKS.UrlStag,
                    expectedLink: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, 
                    expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand, 
                    expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryNZ 
                })
            })
        
        test(`NZ Welcome Land Stag`, async () => {
            await Abtest.recursiveABTest({
                    url: NEW_ZEALAND_LINKS.UrlStag,
                    expectedLink: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand, 
                    expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand, 
                    expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryNZ 
                })
            })

        test(`NZ Welcome Btag`, async () => {
            await Abtest.recursiveABTest({
                    url: NEW_ZEALAND_LINKS.UrlBtag,
                    expectedLink: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, 
                    expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand, 
                    expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryNZ 
                })
            })
        
        test(`NZ Welcome Land Btag`, async () => {
            await Abtest.recursiveABTest({
                    url: NEW_ZEALAND_LINKS.UrlBtag,
                    expectedLink: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand, 
                    expectedComparisonLink1: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand, 
                    expectedComparisonLink2: EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, 
                    expectedQuery: EXPECTED_QUERY.expectedQueryNZ 
                })
            })
})

test.afterAll(async () => {
    const vpnController = new VpnController()
    vpnController.vpnDisconnect()
   
})