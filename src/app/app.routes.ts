import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EnterpageComponent } from './enterpage/enterpage.component';
import { AboutComponent } from './about/about.component';
import { BugComponent } from './bug/bug.component';
import { ContactComponent } from './contact/contact.component';
import { DmcaComponent } from './dmca/dmca.component';
import { TandcComponent } from './tandc/tandc.component';
import { PhotoComponent } from './photo/photo.component';

export const routes: Routes = [
    {path:"dashboard",component:DashboardComponent},
    {path:'dashboard/:id/:type',component:PhotoComponent},
    {path:"header",component:HeaderComponent},
    {path:"enterpage",component:EnterpageComponent},
    {path:"",redirectTo:'/enterpage',pathMatch:'full'},
    {path:"about",component:AboutComponent},
    {path:"bug",component:BugComponent},
    {path:"contact",component:ContactComponent},
    {path:"dmca",component:DmcaComponent},
    {path:"tandc",component:TandcComponent}
];
