import { NgModule } from '@angular/core';
import { PuppyComponent } from './puppy.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PuppyComponent],
  imports: [SharedModule],
  exports: [PuppyComponent],
  providers: [],
})
export class PuppyModule {}
