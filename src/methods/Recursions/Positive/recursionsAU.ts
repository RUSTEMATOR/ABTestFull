import RandomEmail from '../../../randomEmail/randomEmail';
import { chromium, type Browser } from '@playwright/test';
import { Methods } from '../../methods';
import { EXPECTED_QUERY, PHONE_NUMBERS } from '../../../Data/constants';
import { EXPECTED_AUSTRALIA_WELCOME_LINKS, EXPECTED_AUSTRALIA_NDB_LINKS } from '../../../Data/Australia/expectedAustraliaResults';
import { AUSTRALIA_LINKNDB } from '../../../Data/Australia/australiaLinks';
import { AUSTRALIA_LINKS_WELCOME } from '../../../Data/Australia/australiaLinks';
import { qase } from 'playwright-qase-reporter';
import { RegMethods3Step } from '../../regMethods3step';
import { RegMethods1Step } from '../../regMethods1step';
import { expect } from '@playwright/test';
import moment from 'moment';


let browser: Browser

async function startBrowser() {
    if (!browser) {
        browser = await chromium.launch();
    }
    return browser;
  }


export default class RecursionsAU {

    constructor(){}

    async recursiveTestWelcomeAUStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKS_WELCOME.Stag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, EXPECTED_AUSTRALIA_WELCOME_LINKS.World)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAU)

            await page.waitForTimeout(1000)
            
            

            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WelcomeAuWelcomeStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKS_WELCOME.Stag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button button.button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome}\n${EXPECTED_AUSTRALIA_WELCOME_LINKS.World}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeAUStag(stageLink);
        }

    }

    async recursiveTestWelcomeAUBtag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()

        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKS_WELCOME.Btag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, EXPECTED_AUSTRALIA_WELCOME_LINKS.World)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAU)

            await page.waitForTimeout(1000)
            
            
    
                // await ctx.close();
    
                
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WelcomeAuBtag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKS_WELCOME.Btag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button button.button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome}\n${EXPECTED_AUSTRALIA_WELCOME_LINKS.World}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)


            await ctx.close();
        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeAUBtag(stageLink);
        }

    }


    async recursiveTestWorldAUStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKS_WELCOME.Stag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_WELCOME_LINKS.World){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, EXPECTED_AUSTRALIA_WELCOME_LINKS.World)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAU)

            await page.waitForTimeout(1000)
            
        
    
                // await ctx.close();

                
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WorldAUStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKS_WELCOME.Stag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            // await regMethods.openRegForm(`div.main__button > button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome}\n${EXPECTED_AUSTRALIA_WELCOME_LINKS.World}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)


            await ctx.close();
                
               
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWorldAUStag(stageLink);
        }

    }

    async recursiveTestWorldAUBtag(stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKS_WELCOME.Btag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_WELCOME_LINKS.World){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome, EXPECTED_AUSTRALIA_WELCOME_LINKS.World)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAU)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome}\n${EXPECTED_AUSTRALIA_WELCOME_LINKS.World}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}`)
    
                // await ctx.close();

            
                await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/WorldAUStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKS_WELCOME.Btag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            // await regMethods.openRegForm(`div.main__button > button`)
            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_WELCOME_LINKS.Welcome}\n${EXPECTED_AUSTRALIA_WELCOME_LINKS.World}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)


            await ctx.close();
    
                
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWorldAUBtag(stageLink);
        }

    }


    //-------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------

    async recursiveTestAUNoDepBtag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKNDB.Btag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAUNDB)

            await page.waitForTimeout(1000)
            
                // await ctx.close();
            
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/AuNoAUpBtag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKNDB.Btag);
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
            await regMethods.fillLocationCreds(PHONE_NUMBERS.Australia)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAUNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)
                
            await ctx.close();
            
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestAUNoDepBtag(stageLink);
        }

    }

    async recursiveTestAUNDBBtag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(3000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKNDB.Btag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAUNDB)

            await page.waitForTimeout(1000)
            
            
                // await ctx.close();


            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/AuNDBBtag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKNDB.Btag);
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
            await regMethods.fillLocationCreds(PHONE_NUMBERS.Australia)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAUNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)
    
            await ctx.close();


        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestAUNDBBtag(stageLink);
        }

    }


    async recursiveTestAUNoDepStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKNDB.Stag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAUNDB)

            await page.waitForTimeout(1000)
            
                // await ctx.close();
            
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/AuNoAUpStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKNDB.Stag);
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
            await regMethods.fillLocationCreds(PHONE_NUMBERS.Australia)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAUNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)
                
            await ctx.close();
            
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestAUNoDepStag(stageLink);
        }

    }

    async recursiveTestAUNDBStag(stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods3Step(page)
        const email = new RandomEmail()
        const randomEmail = await email.generateRandomEmail()

        await methods.sleep(3000)
        await methods.visitPage(stageLink || AUSTRALIA_LINKNDB.Stag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAUNDB)

            await page.waitForTimeout(1000)
            
            
                // await ctx.close();


            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/AuNDBStag.png`})

            const expectedBtag = await regMethods.extractBtag(stageLink || AUSTRALIA_LINKNDB.Stag);
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
            await regMethods.fillLocationCreds(PHONE_NUMBERS.Australia)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAUNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)
    
            await ctx.close();


        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestAUNDBBtag(stageLink);
        }

    }
}