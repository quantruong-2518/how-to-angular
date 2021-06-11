import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KittyComponent } from './kitty.component';

const routes: Routes = [
  {
    path: '',
    component: KittyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KittyRoutingModule {}
