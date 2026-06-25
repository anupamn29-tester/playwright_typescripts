import {test,expect}from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://automationexercise.com/')
})

// test.afterAll(async ({page}) => {
//     await page.close()
// })

test ("Register User",async({page})=>{
    await expect(page).toHaveTitle('Automation Exercise')

    const Signup_Login=page.getByRole('link',{name:'Signup / Login'})
    await expect(Signup_Login).toBeVisible()
    await Signup_Login.click()

    const Signup_form=page.getByRole('heading',{name:'New User Signup!'})
    await expect(Signup_form).toBeVisible()
    
    function generateName() {
    const firstNames = ["Kai", "Eliana", "Jaden", "Ezra", "Luca"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${randomFirst}_${randomLast}`;
    }

    const Name_field=page.getByRole('textbox',{name:'Name'})
    const Email_field=page.locator('[data-qa="signup-email"]');
    const nam = generateName()
    await Name_field.fill(nam)
    await Email_field.click()
    await Email_field.fill(`${nam}@gmail.com`)
    const Signup_button=page.getByRole('button',{name:'Signup'})
    await expect(Signup_button).toBeVisible()
    await Signup_button.click()

    const title=page.getByRole('heading',{name:'Enter Account Information'})
    await expect(title).toBeVisible()
    
    const title_gender=page.getByRole('radio',{name:"Mr."})
    await title_gender.click()
})