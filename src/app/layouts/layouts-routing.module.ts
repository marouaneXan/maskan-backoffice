import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard/dashboard.component';
import { ClientsComponent } from '../views/clients/clients/clients.component';
import { PropertiesViewsModule } from '../views/properties-views/properties-views.module';

const routes: Routes = [
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'clients', component: ClientsComponent },
            { path: '', loadChildren:()=> import('../views/properties-views/properties-views.module').then(m=>m.PropertiesViewsModule) }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
