import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard/dashboard.component';
import { ClientsComponent } from '../views/clients/clients/clients.component';
import { PropertiesComponent } from '../views/properties-views/properties/properties.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'clients', component: ClientsComponent },
            { path: 'properties', component: PropertiesComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
