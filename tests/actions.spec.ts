import {test,expect,Locator}from "@playwright/test"



test("verify inputvalues",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
const name =page.locator('#name')
await expect(name).toBeVisible()



})