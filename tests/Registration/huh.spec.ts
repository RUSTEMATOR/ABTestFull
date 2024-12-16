import { AUSTRALIA_LINKNDB } from "../../src/Data/Australia/australiaLinks";
import RecursiveAbTest from "../../src/methods/Recursions/GeneralRecursion/GeneralRecursion";
import test from "playwright/test";
import RandomEmail from "../../src/randomEmail/randomEmail";
import { EXPECTED_AUSTRALIA_NDB_LINKS } from "../../src/Data/Australia/expectedAustraliaResults";
import { EXPECTED_QUERY } from "../../src/Data/constants";


test.describe('uytuyyg', () => {

    test('yutuyjgy', async () => {
        let ABtest = new RecursiveAbTest()



        await ABtest.recursiveABTest({
            url: AUSTRALIA_LINKNDB.Stag,
            expectedLink:  EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB,
            expectedComparisonLink1: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB ,
            expectedComparisonLink2: EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep,
            expectedQuery: EXPECTED_QUERY.expectedQueryAUNDB})

    })
})