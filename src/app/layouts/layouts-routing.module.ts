import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('../views/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: '', loadChildren: () => import('../features/clients/clients.module').then(m => m.ClientsModule) },
            { path: '', loadChildren: () => import('../views/properties-views/properties-views.module').then(m => m.PropertiesViewsModule) },
            { path: '', loadChildren: () => import('../views/profile/profile.module').then(m => m.ProfileModule) },
            { path: '', loadChildren: () => import('../features/categories/category.module').then(m => m.CategoryModule) },
            { path: '', loadChildren: () => import('../features/characteristic/characteristic.module').then(m => m.CharacteristicModule) },
            { path: '', loadChildren: () => import('../features/type/type.module').then(m => m.TypeModule) },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
