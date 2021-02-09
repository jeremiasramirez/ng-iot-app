import {RouterModule , Routes} from "@angular/router";
import { HomePage } from "../pages/home/home.component";
import { StartPage } from "../pages/start/start.component";



const routes :Routes=[
    
    
    {path: "home", component: HomePage},
    {path: "", component: StartPage},
    {path: "**", component: StartPage}


] 


export const ROUTES : any = RouterModule.forRoot(routes);