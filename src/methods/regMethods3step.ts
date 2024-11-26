import { Page } from "playwright";
import { qase } from "playwright-qase-reporter/playwright";
import fs from 'fs'
import { faker } from "@faker-js/faker";
import moment from 'moment';
import { expect } from "playwright/test";


export class RegMethods3Step {
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

    async gotoSecondStep(){
        await this.page.locator("div.form_block").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("input[name=email]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("input[name=password]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('div.first-step button[name=next_step]').click()
    }

    async fillPersonalInfo(){
        await this.page.locator('#first-name').fill(faker.person.firstName())
        await this.page.locator('#last-name').fill(faker.person.lastName())
        await this.page.locator('#day').press('5')
        await this.page.locator('#month').press('5')
        await this.page.locator('#year').press('1')
        await this.page.locator('#m').click()
    }

    async gotoThirdStep() {
        await this.page.waitForTimeout(1000)
        await this.page.locator("div.second-step [name=next_step]").click()
    }

    async fillLocationCreds(phoneNumber: string) {
        await this.page.locator('#city').fill(faker.location.city())
        await this.page.locator('#address').fill(faker.location.streetAddress())
        await this.page.locator('#postal_code').fill('1234')
        await this.page.locator('#tel-input').fill(phoneNumber)
    }

    async createAnAccount() {
        await this.page.waitForTimeout(1000)
        await this.page.locator('#city').click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('#address').click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('#postal_code').click()
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

    async expectToBeVisible(locator: string, text: string){
        await expect(this.page.locator(locator).filter({hasText: text})).toBeVisible()
        console.log(`Expected ${locator} to be visible`)
    }

}