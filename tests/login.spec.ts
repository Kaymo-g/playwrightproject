import {test, expect} from '@playwright/test'

test('Login test', async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/')
})