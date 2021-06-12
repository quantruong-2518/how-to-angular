import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuppyComponent } from './screens/puppy/puppy.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'kitties',
    loadChildren: () =>
      import('./screens/kitty/kitty.module').then((m) => m.KittyModule),
  },
  {
    path: 'puppies',
    component: PuppyComponent,
  },
  {
    path: 'quotes',
    loadChildren: () =>
      import('./screens/quote/quote.module').then((m) => m.QuoteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
