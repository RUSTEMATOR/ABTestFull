import { chromium, type Browser, expect } from '@playwright/test';
import { Methods } from '../../methods';
import { EXPECTED_QUERY, PHONE_NUMBERS } from '../../../Data/constants';
import { GERMANY_LINKS, GERMANY_LINK_NDB } from '../../../Data/Germany/germanyLinks';
import { EXPECTED_GERMANY_LINKS, EXPECTED_GERMANY_NDB_LINKS } from '../../../Data/Germany/expectedGermanyResults';
import { qase } from 'playwright-qase-reporter';
import { RegMethods3Step } from '../../regMethods3step';
import { RegMethods1Step } from '../../regMethods1step';
import RandomEmail from '../../../randomEmail/randomEmail';
import moment from 'moment';



let browser: Browser

async function startBrowser() {
    if (!browser) {
        browser = await chromium.launch();
    }
    return browser;
  }


export default class RecursionsDE {

    constructor(){}


    async recursiveTestWelcomeDEStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || GERMANY_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            

            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WelcomeDEStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINKS.UrlStag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button .button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeDEStag();
        }

    }

    async recursiveTestWelcomeDEBtag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()

        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || GERMANY_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            
    
                // await ctx.close();
    
                
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WelcomeDEBtag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINKS.UrlBtag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button .button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)


            await ctx.close();
        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeDEBtag();
        }

    }


    async recursiveTestLandDEStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || GERMANY_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
        
    
                // await ctx.close();

                
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/LandDEStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINKS.UrlStag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button .button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)


            await ctx.close();
                
               
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestLandDEStag();
        }

    }

    async recursiveTestLandDEBtag(stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || GERMANY_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}`)
    
                // await ctx.close();

            
                await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/LandDEStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINKS.UrlBtag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button .button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)


            await ctx.close();
    
                
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestLandDEBtag();
        }

    }

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
    async recursiveTestDENDBStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(3000)
        await methods.visitPage(stageLink || GERMANY_LINK_NDB.Stag)

        const baseCurrentUrl = await methods.formBaseLink()
        
        console.log(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)
        qase.comment(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)

        if (baseCurrentUrl === EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB){


            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQuerryDENDB)

            await page.waitForTimeout(1000)
            
    
                // await ctx.close();

                await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/DeNDBStag.png`})

                const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINK_NDB.Stag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`xpath=//div[contains(@class, 'offer__button')]/button[contains(@class, 'button')]`)
                await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                await regMethods.gotoSecondStep()
                await regMethods.fillPersonalInfo()
                await regMethods.gotoThirdStep()
                await regMethods.fillLocationCreds(PHONE_NUMBERS.Germany)
    
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            
    
                qase.comment(`Registered with: ${randomEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQuerryDENDB}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.page.waitForTimeout(10000)
    
                
                await ctx.close();

        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestDENDBStag();
        }

    }


    async recursiveTestDENoDepStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(3000)
        await methods.visitPage(stageLink || GERMANY_LINK_NDB.Stag)

        const baseCurrentUrl = await methods.formBaseLink()

        console.log(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)
        qase.comment(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)

        if (baseCurrentUrl === EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep){

 
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQuerryDENDB)

            await page.waitForTimeout(1000)
            
        
                // await ctx.close();
                await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/DeNoDepStag.png`})

                const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINK_NDB.Stag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`section.main button.button`)
                await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                await regMethods.gotoSecondStep()
                await regMethods.fillPersonalInfo()
                await regMethods.gotoThirdStep()
                await regMethods.fillLocationCreds(PHONE_NUMBERS.Germany)
    
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            
    
                qase.comment(`Registered with: ${randomEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQuerryDENDB}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.page.waitForTimeout(10000)


                await ctx.close();
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestDENoDepStag();
        }

    }


    async recursiveTestDENDBBtag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(3000)
        await methods.visitPage(stageLink || GERMANY_LINK_NDB.Btag)

        const baseCurrentUrl = await methods.formBaseLink()
        
        console.log(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)
        qase.comment(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)

        if (baseCurrentUrl === EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB){


            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQuerryDENDB)

            await page.waitForTimeout(1000)
            
    
                // await ctx.close();

                await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/DeNDBBtag.png`})

                const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINK_NDB.Btag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`xpath=//div[contains(@class, 'offer__button')]/button[contains(@class, 'button')]`)
                await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                await regMethods.gotoSecondStep()
                await regMethods.fillPersonalInfo()
                await regMethods.gotoThirdStep()
                await regMethods.fillLocationCreds(PHONE_NUMBERS.Germany)
    
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            
    
                qase.comment(`Registered with: ${randomEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQuerryDENDB}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.page.waitForTimeout(10000)
    
                
                await ctx.close();

        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestDENDBStag();
        }

    }

    async recursiveTestDENoDepBtag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(3000)
        await methods.visitPage(stageLink || GERMANY_LINK_NDB.Btag)

        const baseCurrentUrl = await methods.formBaseLink()

        console.log(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)
        qase.comment(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)

        if (baseCurrentUrl === EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep){

 
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQuerryDENDB)

            await page.waitForTimeout(1000)
            
        
                // await ctx.close();
                await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/DeNoDepBtag.png`})

                const expectedBtag = await regMethods.extractBtag(stageLink || GERMANY_LINK_NDB.Btag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`section.main button.button`)
                await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                await regMethods.gotoSecondStep()
                await regMethods.fillPersonalInfo()
                await regMethods.gotoThirdStep()
                await regMethods.fillLocationCreds(PHONE_NUMBERS.Germany)
    
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            
    
                qase.comment(`Registered with: ${randomEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQuerryDENDB}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.page.waitForTimeout(10000)


                await ctx.close();
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestDENoDepStag();
        }

    }

}