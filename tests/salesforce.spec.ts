import {test,expect}from "@playwright/test"


test ("verify login functionality",async({page})=>{

await page.goto("https://login.salesforce.com/")
const logo = page.getByAltText("Salesforce login")// images
await expect(logo).toBeVisible()

const heading = page.getByRole("heading", { name: "Salesforce login" });
await expect(heading).toBeVisible();

await page.getByLabel("Username").fill("sarat")
await page.getByLabel("Password").fill("23232")

await page.getByRole("button",{name:"Log In"}).click()
})

test("verify hard error message of the login button",async({page})=>{

    await page.goto("https://login.salesforce.com/")
    page.getByRole("button",{name:"Log In "}).click()

    const errorMessage = page.getByText("Please enter your username and password.");
    await expect(errorMessage).toBeVisible();

})
