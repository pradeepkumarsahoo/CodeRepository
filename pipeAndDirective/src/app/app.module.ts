import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditvalidateDirective } from './creditvalidate.directive';
import { AlternatecasePipe } from './alternatecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreditvalidateDirective,
    AlternatecasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
