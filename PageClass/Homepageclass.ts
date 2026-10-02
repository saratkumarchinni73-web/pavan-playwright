import {Page,Locator, expect}from "@playwright/test"

export class Homescreen{

// Logo and title and version
readonly page:Page;
readonly TricentisLogo:Locator;
readonly app_sub_title:Locator;
readonly app_version:Locator;

//Links:-> //Automobile//Truck//MotorCycle//Camper 

readonly NavigationAutomobile:Locator;
readonly NavigationTruck: Locator;
readonly NavigationMotorcycle: Locator;
readonly NavigationCamper: Locator;
// maping the locators and adding the values init

constructor(page:Page){
 this.page=page;
 this.TricentisLogo=page.locator("[class=site-title]")
 this.app_sub_title=page.getByText('Vehicle Insurance Application', { exact: true })
 this.app_version=page.getByText('This is a sample application, Version 1.0.1',{exact:true})
 this.NavigationAutomobile=page.getByRole('link',{name:'Automobile',exact:true})
 this.NavigationTruck=page.getByRole('link',{name:'Truck'})
 this.NavigationMotorcycle=page.getByRole('link',{name:'Motorcycle'})
 this.NavigationCamper=page.getByRole('link',{name:'Camper'})

}
// all methods
async goto(){

    await this.page.goto("https://sampleapp.tricentis.com/101/index.php")
}

async logoandsubandversion(){

    await this.TricentisLogo.click()
    
    await this.app_sub_title.click()
    await this.app_version.click()
   // await expect(this.TricentisLogo).toHaveText('Tricentis Logo')
   // await expect(this.app_sub_title).toContainText('Tricentis Logo')
   // await expect(this.app_version).toBeChecked()

}
async automobilelink(){
    await this.NavigationAutomobile.click()

}

async trucklink(){
    await this.NavigationTruck.click()

}

async motolink(){
    await this.NavigationMotorcycle.click()
}
async camperlink(){
    await this.NavigationCamper.click()
}

}



