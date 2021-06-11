import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Components */
import { AppComponent } from './app.component';

/** Modules */
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';
import { PuppyModule } from './screens/puppy/puppy.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // imported
    HeaderModule,
    PuppyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
