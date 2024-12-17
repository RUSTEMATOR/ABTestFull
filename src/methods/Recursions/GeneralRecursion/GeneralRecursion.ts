import {chromium, test, expect} from "playwright/test";
import { Methods } from "../../methods";
import { RegMethods1Step } from "../../regMethods1step";
import { qase } from "playwright-qase-reporter/playwright";

export default class RecursiveAbTest{
    constructor(){

    }

    async recursiveABTest(
                        {url,
                        expectedLink, 
                        expectedComparisonLink1, 
                        expectedComparisonLink2, 
                        expectedQuery}: 
                        {
                        url: string,
                        expectedLink: string, 
                        expectedComparisonLink1: string, 
                        expectedComparisonLink2: string, 
                        expectedQuery: string 
                        }): Promise<undefined>
                        {
        const browser = await chromium.launch();
        const ctx = await browser.newContext();
        const page = await ctx.newPage()

        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        await methods.visitPage(url)
        await methods.sleep(2000)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === expectedLink){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, expectedComparisonLink1, expectedComparisonLink2)
            await methods.checkQueryParameters(receivedParameters, expectedQuery)

            await page.waitForTimeout(1000)
            
            

            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WelcomeAuWelcomeStag.png`})

            const expectedBtag = await regMethods.extractBtag(url);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()
    
            qase.comment(`
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${expectedComparisonLink1}\n${expectedComparisonLink2}
                \n\n Expected parameters: ${expectedQuery}\n Received parameters: ${receivedParameters}
                
                `)

           
            console.log('Actual btag:', actualBtag);

            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveABTest({url,
                                        expectedLink, 
                                        expectedComparisonLink1, 
                                        expectedComparisonLink2, 
                                        expectedQuery});
        }

    }
}