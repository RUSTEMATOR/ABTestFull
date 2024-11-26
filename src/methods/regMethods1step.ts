import { Page} from "playwright";
import { qase } from "playwright-qase-reporter/playwright";
import fs from 'fs'
import { faker } from "@faker-js/faker";
import moment from 'moment';
import { expect } from "playwright/test";



export class RegMethods1Step {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async extractBtag(url: string): Promise<any>{
        const parsedUrl = new URL(url)
        const btag = parsedUrl.searchParams.get('btag')
        if (btag === null) {
            console.log('btag parameter is missing in the URL');
        }
        return btag || null;
    }


    async makeFullScreenshot({fullPage, path}: {fullPage: boolean, path: string}) {
        await this.page.screenshot({fullPage, path});
    }

    async openRegForm(regFormLocator: string){
        await this.page.locator(regFormLocator).click()
    }

    async fillEmailPass({email, pass,}: {email: string, pass: string}){
        await this.page.locator("input[name=email]").fill(email)
        await this.page.locator("input[name=password]").fill(pass)
    }

    async checkAdultCheckbox() {
        await this.page.locator("label.gal[for=rule]").click()
    }

    async createAnAccount() {
        await this.page.locator("input[name=email]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("input[name=password]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("button.create_account[name=send_data]").click()
    }

    async logActions(randomEmail: string, actualBtag: string, expectedBtag: string){
        const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        const finalUrl = this.page.url()

        qase.comment(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n\n
            Actual btag: ${actualBtag}\n Expected btag: ${expectedBtag}\n\n`)
        console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
        console.log('Actual btag:', actualBtag);

        
        fs.appendFileSync('usedEmails.txt', `Used email: ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
    }

    async expectToBeVisible(locator: string, text: string) {
        await expect(this.page.locator(locator).filter({hasText: text})).toBeVisible()
        console.log(`Expected ${locator} to be visible`)
    }

}