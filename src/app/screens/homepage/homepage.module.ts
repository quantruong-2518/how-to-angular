import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [SharedModule, HomepageRoutingModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
