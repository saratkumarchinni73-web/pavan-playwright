import {test,Locator,Page,expect}from "@playwright/test"

// creating class 
//creating properties[variables]
//"readonly "Once we define the below properties 

export class Dashboard {

    readonly page:Page;
    readonly amazonlogo:Locator
    readonly pageurl:string
    readonly pagetitle:Locator

    // defining the "locators" in the constractor
    constructor(page: Page){
    this.page=page;
    this.amazonlogo=page.locator("#nav-logo-sprites")
    this.pageurl=page.url()
    this.pagetitle=page.getByTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    
}

    //defining the all page methods

    async goto(): Promise<void> {
        await this.page.goto("https://www.amazon.in/");
    }

    async verifylogo(){
        // to verif the amazon logo we have use method tobevisable
    await expect(this.amazonlogo).toBeVisible()
    await this.amazonlogo.click()
    //await expect(this.amazonlogo).toHaveText("AMAZON.in")
     }

     async verifyurl(){
        await expect(this.page).toHaveURL("https://www.amazon.in/ref=nav_logo")
        
     }

     async verifytitle(){
        
        await expect(this.page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
     }

}