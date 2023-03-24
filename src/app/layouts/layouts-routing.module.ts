import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard/dashboard.component';
import { ClientsComponent } from '../views/clients/clients/clients.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'clients', component: ClientsComponent },
            { path: '', loadChildren:()=> import('../views/properties-views/properties-views.module').then(m=>m.PropertiesViewsModule) },
            { path: '', loadChildren:()=> import('../views/profile/profile.module').then(m=>m.ProfileModule) },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
