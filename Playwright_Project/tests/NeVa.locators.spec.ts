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

    const language=page.getByRole('link',{name:'English'})
    await expect(language).toBeVisible()
    await language.click()

    const businessLink = page.locator('#collapsibleNavbar').getByRole('link',{name:'Business'})
    await expect(businessLink).toBeVisible()
    await businessLink.click()

    const asshouse = page.locator('#select2-assemblyLst-container')
    await expect(asshouse).toBeVisible()
    await asshouse.click()

    const assemblyOption = page.locator('li.select2-results__option', { hasText: 'Bihar Legislative Council' })
    await expect(assemblyOption).toBeVisible()
    await assemblyOption.click()
    await expect(asshouse).toHaveText('Bihar Legislative Council')
})