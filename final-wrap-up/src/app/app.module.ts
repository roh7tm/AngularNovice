import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleChildComponentComponent } from './single-child-component/single-child-component.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { TwoWayCompBindingComponent } from './two-way-comp-binding/two-way-comp-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleChildComponentComponent,
    TwoWayBindingComponent,
    TwoWayCompBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
