import { test, expect, type Page } from '@playwright/test'

const URL='https://neva.gov.in/'

async function openCouncilSection(page: Page) {
    const council = page.locator('a.nav-link[href="#tabCouncil"]')
    await expect(council).toBeVisible()
    await council.click()

    const bihar = page.getByAltText('Bihar Council')
    await expect(bihar).toBeVisible()
    await bihar.click()

    const title_bihar = page.getByText('Bihar Legislative Council ')
    await expect(title_bihar).toBeVisible()

    const englishLink = page.getByRole('link', { name: 'English' })
    await expect(englishLink).toBeVisible()
    await englishLink.click()
}

test.beforeEach(async({ page })=>{
    await page.goto(URL)
})
test.afterEach(async({page})=>{
    await page.close()
})

test('Navigate Page',async({ page })=>{
    await expect(page).toHaveTitle('National e-Vidhan Application - Digital Legislators ')
})

test('Council',async({ page })=>{
    await openCouncilSection(page)
})

test('Business',async({ page })=>{
    await openCouncilSection(page)
    
    const today=page.getByRole('link', { name: 'Today' });
    await expect(today).toBeVisible()
    await today.click()

    const heading=page.getByRole('heading',{name:'Today'})
    await expect(heading).toBeVisible()
})