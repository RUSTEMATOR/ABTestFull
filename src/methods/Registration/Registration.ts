import { Page, chromium } from "playwright"
import test from "playwright/test"
import { RegMethods3Step } from "../regMethods3step"
import RandomEmail from "../../randomEmail/randomEmail"
import { Methods } from "../methods"
import { RegMethods1Step } from "../regMethods1step"


export default class Registration {
    constructor() {
    }

    async recursiveRegistration(
    {url, expectedLocator, PHONE_NUMBERS, expectedLink, openRegFormButton, is3step, depositButton}:
    {url: string, expectedLocator: string, PHONE_NUMBERS: string, expectedLink: string,
    openRegFormButton: string, is3step: boolean, depositButton: string
    }): Promise<undefined> {
        
        const browser = await chromium.launch()
        const ctx = await browser.newContext()
        const page = await ctx.newPage()
        const randomEmail = new RandomEmail()

        const email = await randomEmail.generateRandomEmail(5)
        let methods = new Methods(page)
        let baseCurrentUrl


            if(is3step == true){
                const regMethods = new RegMethods3Step(page)

                await test.step(`Visit ${url}`, async () => {
                    await regMethods.goto({url: url, expectedLocator: expectedLocator})
                    baseCurrentUrl = await methods.formBaseLink()
                    console.log(`Opening ${url}`)
                })

                    if(baseCurrentUrl === expectedLink){

                        await test.step('Open Registration form', async () => {
                            await regMethods.openRegForm(openRegFormButton)
                        })

                        await test.step('Fill in email field', async () => {
                            await regMethods.fillEmailPass({email: email, pass: '193786Az()'})
                            console.log(`Email: ${email}\n Pass: ${'193786Az()'}`)
                        })

                        await test.step('Check the adult checkbox', async () => {
                            await regMethods.checkAdultCheckbox()
                            console.log('Adult checkbox checked')
                        })

                        await test.step('Go to the second registration step', async () => {
                            await regMethods.gotoSecondStep()
                            console.log('Going to the second step')
                        })

                        await test.step('Fill in personal info on the second step', async () => {
                            await regMethods.fillPersonalInfo()
                            console.log('Filling personal info')
                        })

                        await test.step('Going to the third step', async () => {
                            await regMethods.gotoThirdStep()
                            console.log('Going to the third step')
                        })

                        await test.step('Fill in location creds', async () => {
                            await regMethods.fillLocationCreds(PHONE_NUMBERS)
                            console.log(`Fill in location creds`)
                        })

                        await test.step('Create acount', async () => {
                            await regMethods.createAnAccount()
                            await regMethods.expectToBeVisible(depositButton)
                            console.log('Creating a new account')
                        })

                    } else {
                    methods.sleep(1000)
                    await ctx.close();
                    return this.recursiveRegistration({url, expectedLocator, PHONE_NUMBERS,
                                                    expectedLink, openRegFormButton, is3step, depositButton })
                }

            } else {

                const regMethods = new RegMethods1Step(page)

                await test.step(`Visit ${url}`, async () => {
                    await regMethods.goto({url: url, expectedLocator: expectedLocator})
                    baseCurrentUrl = await methods.formBaseLink()
                    console.log(`Opening ${url}`)
                })

                if(baseCurrentUrl === expectedLink){

                    await test.step('Open Registration form', async () => {
                        await regMethods.openRegForm(openRegFormButton)
                    })

                    await test.step('Fill in email field', async () => {
                        await regMethods.fillEmailPass({email: email, pass: '193786Az()'})
                        console.log(`Email: ${email}\n Pass: ${'193786Az()'}`)
                    })

                    await test.step('Check the adult checkbox', async () => {
                        await regMethods.checkAdultCheckbox()
                        console.log('Adult checkbox checked')
                    })

                    await test.step('Create acount', async () => {
                        await regMethods.createAnAccount()
                        await regMethods.expectToBeVisible(depositButton)
                        console.log('Creating a new account')
                    })

                } else {
                    methods.sleep(1000)
                    await ctx.close();
                    return this.recursiveRegistration({url, expectedLocator, PHONE_NUMBERS,
                                                    expectedLink, openRegFormButton, is3step, depositButton })
                }


            }
        }
}