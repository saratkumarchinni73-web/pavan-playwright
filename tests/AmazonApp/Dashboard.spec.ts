import {test}from "@playwright/test"
import { Dashboard } from "../../PageClass/AmazonClass/AmazonDashboardPage"


test("verify the amazon dashboard validations",async({ page })=>{

   const amapage = new Dashboard(page);
   await amapage.goto()
   await amapage.verifylogo()
   await amapage.verifytitle()
   await amapage.verifyurl()

})