import { chromium, type Browser, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';
import { Methods } from '../../methods';
import { NEW_ZEALAND_LINKS, NEW_ZEALAND_LINKS_NDB } from '../../../Data/NewZealand/newZealandLinks';
import { EXPECTED_NEW_ZEALAND_LINKS, EXPECTED_NEW_ZEALAND_LINKS_NDB } from '../../../Data/NewZealand/expectedNewZealandResults';
import { ERROR_TEXT, EXPECTED_QUERY, PHONE_NUMBERS } from '../../../Data/constants';
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


export default class NegativeRecursionsNZ {

    constructor(){}

    async NegativeRecursiveTestWelcomeStag(wrongEmail: string, stageLink?: string): Promise<boolean>{
        
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page) 
        
        const regMethods = new RegMethods1Step(page)
        
    
        await methods.sleep(1000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZ)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}`)

                // await page.screenshot({path: './screenshots/screeenshot.png'})

                const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS.UrlStag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`div.main__button button.button`)
                await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        
                qase.comment(`Registered with: ${wrongEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
                await regMethods.page.waitForTimeout(10000)

                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            // await page.screenshot({path: './screenshots/screeenshot.png'})
            await ctx.close();
            return this.NegativeRecursiveTestWelcomeStag(wrongEmail);
        }
    }

    async NegativeRecursiveTestWelcomeBtag(wrongEmail: string, stageLink?: string): Promise<boolean>{
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
        
    
        await methods.sleep(1000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZ)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}`)


                

            const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS.UrlBtag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`div.main__button button.button`)
            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)
    
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestWelcomeBtag(wrongEmail);
        }
    }



    async NegativeRecursiveTestLandStag(wrongEmail: string, stageLink?: string): Promise<boolean> {


        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
    
        await methods.sleep(1000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZ)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}`)

                const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS.UrlStag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`div.main__button .button`)
                await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        
                qase.comment(`Registered with: ${wrongEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestLandStag(wrongEmail);
        }

    }



    async NegativeRecursiveTestLandBtag(wrongEmail: string, stageLink?: string): Promise<boolean> {


        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods1Step(page)
       
    
        await methods.sleep(7000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome, EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZ)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}`)

                const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS.UrlBtag);
                console.log('Expected btag:', expectedBtag);
                
    
                const currentUrl = await regMethods.page.url()
                const actualBtag = await regMethods.extractBtag(currentUrl);
                expect(actualBtag).toEqual(expectedBtag)
    
                const finalUrl = await regMethods.page.url()
    
                await regMethods.openRegForm(`div.main__button .button`)
                await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})
    
                await regMethods.checkAdultCheckbox()
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        
                qase.comment(`Registered with: ${wrongEmail}\n\n
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                    Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlWelcome}\n${EXPECTED_NEW_ZEALAND_LINKS.expectedUrlLand}
                    \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZ}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                console.log('Actual btag:', actualBtag);
    
                await regMethods.createAnAccount()
                await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
                await regMethods.page.waitForTimeout(10000)
    
                await ctx.close();
            
            
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestLandBtag(wrongEmail);
        }

    }




    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------


    async NegativeRecursiveTestNZNoDepBtag(wrongEmail: string, stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)
      

        await methods.sleep(1000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS_NDB.Btag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZNDB)

            await page.waitForTimeout(1000)
            
                // await ctx.close();
        
            const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS_NDB.Btag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`section.main button.button`)
            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            await regMethods.gotoSecondStep()
            await regMethods.fillPersonalInfo()
            await regMethods.gotoThirdStep()
            await regMethods.fillLocationCreds(PHONE_NUMBERS.NewZealand)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep}\n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)
                
            await ctx.close();
            
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestNZNoDepBtag(wrongEmail);
        }

    }

    async NegativeRecursiveTestNZNDBBtag(wrongEmail: string, stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods3Step(page)
        

        await methods.sleep(3000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS_NDB.Btag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZNDB)

            await page.waitForTimeout(1000)
            
            
                // await ctx.close();

            const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS_NDB.Btag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`xpath=//div[contains(@class, 'offer__button')]/button[contains(@class, 'button')]`)
            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            await regMethods.gotoSecondStep()
            await regMethods.fillPersonalInfo()
            await regMethods.gotoThirdStep()
            await regMethods.fillLocationCreds(PHONE_NUMBERS.NewZealand)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep}\n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)
    
            await ctx.close();


        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestNZNDBBtag(wrongEmail);
        }

    }


    async NegativeRecursiveTestNZNoDepStag(wrongEmail: string, stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)
        const regMethods = new RegMethods3Step(page)

        await methods.sleep(1000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS_NDB.Stag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZNDB)

            await page.waitForTimeout(1000)
            
                // await ctx.close();

            const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS_NDB.Stag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`section.main button.button`)
            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            await regMethods.gotoSecondStep()
            await regMethods.fillPersonalInfo()
            await regMethods.gotoThirdStep()
            await regMethods.fillLocationCreds(PHONE_NUMBERS.NewZealand)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep}\n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)
                
            await ctx.close();
            
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestNZNoDepStag(wrongEmail);
        }

    }

    async NegativeRecursiveTestNZNDBStag(wrongEmail: string, stageLink?: string): Promise<any> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods3Step(page)

        await methods.sleep(3000)
        await methods.visitPage(stageLink || NEW_ZEALAND_LINKS_NDB.Stag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB, EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryNZNDB)

            await page.waitForTimeout(1000)
            
            
                // await ctx.close();

            const expectedBtag = await regMethods.extractBtag(stageLink || NEW_ZEALAND_LINKS_NDB.Stag);
            console.log('Expected btag:', expectedBtag);
            

            const currentUrl = await regMethods.page.url()
            const actualBtag = await regMethods.extractBtag(currentUrl);
            expect(actualBtag).toEqual(expectedBtag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm(`xpath=//div[contains(@class, 'offer__button')]/button[contains(@class, 'button')]`)
            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            await regMethods.gotoSecondStep()
            await regMethods.fillPersonalInfo()
            await regMethods.gotoThirdStep()
            await regMethods.fillLocationCreds(PHONE_NUMBERS.NewZealand)

            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        

            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNoDep}\n${EXPECTED_NEW_ZEALAND_LINKS_NDB.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryNZNDB}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            console.log('Actual btag:', actualBtag);

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('div.error', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)
    
            await ctx.close();


        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.NegativeRecursiveTestNZNDBStag(wrongEmail);
        }

    }
}