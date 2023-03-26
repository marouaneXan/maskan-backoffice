import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTypesComponent } from './components/list-types/list-types.component';
const routes: Routes = [
    {
        path:'types',
        component:ListTypesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRouting { }