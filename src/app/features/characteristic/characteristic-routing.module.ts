import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharacteristicsComponent } from './components/list-characteristics/list-characteristics.component';
const routes: Routes = [
    {
        path:'characteristics',
        component:ListCharacteristicsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteristicRouting { }