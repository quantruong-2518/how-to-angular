import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookmarkModule } from 'src/app/components/bookmark/bookmark.module';
import { QuoteRoutingModule } from './quote-routing.module';

@NgModule({
  declarations: [QuoteComponent],
  imports: [SharedModule, BookmarkModule, QuoteRoutingModule],
  exports: [QuoteComponent],
})
export class QuoteModule {}
