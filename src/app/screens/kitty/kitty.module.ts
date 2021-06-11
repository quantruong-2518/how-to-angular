import { NgModule } from '@angular/core';
import { KittyComponent } from './kitty.component';
import { KittyRoutingModule } from './kitty-routing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [KittyComponent],
  imports: [SharedModule, KittyRoutingModule],
  exports: [KittyComponent],
})
export class KittyModule {}
