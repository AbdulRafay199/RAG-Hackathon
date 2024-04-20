import { Routes } from '@angular/router';
import { TdashboardComponent } from './tdashboard/tdashboard.component';
import { ClassContentComponent } from './components/class-content/class-content.component';

export const routes1: Routes = [
    {path:"v1/dashboard", component:TdashboardComponent, children:[
      {path:"classes/:id/materials", component:ClassContentComponent},
      {path:"classes/:id/students", component:ClassContentComponent},
      {path:"classes/:id/chat", component:ClassContentComponent},
      {path:"classes/:id", redirectTo:"classes/:id/materials", pathMatch:"full"},
      {path:"classes", redirectTo:"", pathMatch:"full"},
    ]},
    {path:"v1", redirectTo:"", pathMatch:"full"},
];

