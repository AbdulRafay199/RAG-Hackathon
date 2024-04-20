import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { AboutComponent } from './about-page/about/about.component';
import { ContactComponent } from './contact-page/contact/contact.component';


export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
];
