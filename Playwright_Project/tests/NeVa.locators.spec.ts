import {test,expect} from '@playwright/test';
test("NeVa Title Check",async({page})=>{

    await page.goto("https://neva.gov.in/")
    await expect (page).toHaveTitle("National e-Vidhan Application - Digital Legislators ")

    const tablist=page.getByRole("tab",{name:"Council"})
    await expect(tablist).toBeVisible()
    await tablist.click()

    const tabCouncil=page.getByRole("link",{name:"Bihar"})
    await tabCouncil.click()

    const welbla=page.getByText('Bihar Legislative Council ')
    await expect(welbla).toBeVisible()

    
})