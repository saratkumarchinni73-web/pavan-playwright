import {test}from "@playwright/test"
import {Homescreen}from "../../PageClass/Homepageclass"



test("verify the insurance homepage",async({page})=>{
    const homepage = new Homescreen (page);

    await homepage.goto();
    await homepage.logoandsubandversion();
    await homepage.automobilelink();
    await homepage.trucklink();
    await homepage.motolink();
    await homepage.camperlink();

})